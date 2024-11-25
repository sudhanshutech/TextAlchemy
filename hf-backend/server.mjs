import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { GoogleGenerativeAI } from "@google/generative-ai";

const app = express();
const port = 5000;

// Middleware setup
app.use(cors());
app.use(bodyParser.json());

// Set up Google Generative AI
const apiKey = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/generate", async (req, res) => {
  const { text, style } = req.body;

  if (!text || !style) {
    return res.status(400).json({ error: "Text and style are required." });
  }

  console.log(`Received text: ${text}, style: ${style}`);

  try {
    const prompt = `Style this text in ${style}: ${text}`;
    const result = await model.generateContent(prompt);

    const styledText = result.response.text().trim();
    res.json({ styled_text: styledText });
  } catch (error) {
    console.error("Error from Google Gemini API:", error.message);
    res.status(500).json({ error: "An error occurred while processing the request." });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
