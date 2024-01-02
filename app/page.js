// pages/api/openai.js
import { Configuration, OpenAIApi } from "openai";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const completion = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{ role: "system", content: "You are a helpful assistant." }],
      });
        console.log(completion.data);
      res.status(200).json(completion.data);
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ message: "Error accessing OpenAI API", error: error.message });
    }
  }
}
