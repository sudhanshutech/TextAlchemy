import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const apiKey = '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'; // Replace with your API key
const modelUrl = 'https://huggingface.co/openai-community/gpt2'; // Example model

app.post('/generate', async (req, res) => {
  const { text, style } = req.body;

  try {
    const response = await fetch(modelUrl, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ inputs: `${style}: ${text}` }),
    });

    const data = await response.json();
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: 'An error occurred while processing the request.' });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
