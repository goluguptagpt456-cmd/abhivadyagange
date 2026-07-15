import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, GenerateContentResponse } from '@google/genai';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Concierge Chat API
  app.post('/api/gemini/chat', async (req, res) => {
    try {
      const { prompt } = req.body;
      const isLocationQuery = /where|map|direction|distance|location|near|how to reach/i.test(prompt);
      
      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          systemInstruction: "You are the Abhivadya Gange Home Stay AI Concierge. You can help users with information about Varanasi, hotel amenities, and nearby attractions. The hotel costs ₹1200-2500 per night. Be helpful, polite, and warm.",
          tools: [isLocationQuery ? { googleMaps: {} } : { googleSearch: {} }],
        },
      });

      let responseText = response.text || "I'm sorry, I couldn't process that request.";
      const chunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks;
      let links: any[] = [];
      if (chunks) {
        links = chunks.filter((c: any) => c.web).map((c: any) => ({ uri: c.web?.uri, title: c.web?.title }));
      }
      
      res.json({ text: responseText, links });
    } catch (error: any) {
      if (error?.status === 429 || error?.message?.includes('429')) {
        console.log('Gemini API rate limit exceeded.');
        res.status(429).json({ error: 'API quota exceeded. Please try again later.' });
      } else {
        console.error('Gemini API Error:', error.message || error);
        res.status(500).json({ error: error.message });
      }
    }
  });

  // AI Concierge Image Generation API
  app.post('/api/gemini/image', async (req, res) => {
    try {
      const { prompt, imageSize = '1K' } = req.body;
      
      const response = await ai.models.generateContent({
        model: 'gemini-3.1-flash-image',
        contents: prompt,
        config: {
          imageConfig: {
            aspectRatio: "1:1",
            imageSize: imageSize as any
          }
        },
      });
      
      let imageUrl = "";
      if (response.candidates && response.candidates[0].content.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const base64EncodeString = part.inlineData.data;
              imageUrl = `data:${part.inlineData.mimeType || 'image/png'};base64,${base64EncodeString}`;
              break;
            }
          }
      }
      
      if (!imageUrl) throw new Error("No image generated");
      
      res.json({ imageUrl });
    } catch (error: any) {
      if (error?.status === 429 || error?.message?.includes('429')) {
        console.log('Gemini API rate limit exceeded (image).');
        res.status(429).json({ error: 'API quota exceeded. Please try again later.' });
      } else {
        console.error('Gemini Image API Error:', error.message || error);
        res.status(500).json({ error: error.message });
      }
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
