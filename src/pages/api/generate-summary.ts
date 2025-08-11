import type { APIRoute } from 'astro';
import { createUserContent, GoogleGenAI } from "@google/genai";
// @ts-ignore
import dotenv from 'dotenv';
dotenv.config();

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const { content } = await request.json();

    const genAI = new GoogleGenAI({
        apiKey: process.env.GOOGLE_GENAI_API_KEY || ""
    });
    const modelName = "gemini-2.5-flash-lite";

    const response = await genAI.models.generateContent({
        model: modelName,
        contents:`Ringkaslah konten berikut dalam 2/3 paragraf yang ringkas, dengan menyoroti poin-poin utama dan ide-ide utama:
${content} hapus **, tolong juga gunakan “artikel ini” pada kalimat pertama.`
    });

    const summary = response.text;

    return new Response(JSON.stringify({ summary }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error generating summary:', error);
    return new Response(JSON.stringify({ error: 'Failed to generate summary' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
}
