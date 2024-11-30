import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Typography,
  Card,
  CardContent,
  Avatar,
  Container,
  Input,
} from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import CircularProgress from "@mui/material/CircularProgress";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import Image from "next/image";
import TemporaryDrawer from "../HelpSection";

const InputTextArea = () => {
  const [text, setText] = useState("");
  const [style, setStyle] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text || !style) {
      alert("Please enter text and select a style.");
      return;
    }

    setLoading(true);
    setResult("");

    try {
      const response = await fetch("http://localhost:5000/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, style }),
      });

      const data = await response.json();
      if (data.error) {
        setResult("Error: " + data.error);
      } else {
        setResult(data.styled_text || "No response from model.");
      }
    } catch (error) {
      setResult("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
        className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"
      >
        <Image
          src="/textalchemy_logo.png"
          alt="Next.js Logo"
          width={240}
          height={64}
          className="h-6 mr-2"
        />
        <TemporaryDrawer />
      </div>
      <Container>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            margin: "auto",
            width: "60%",
            mt: 4,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            placeholder="Type something…"
            fullWidth
            multiline
            rows={4}
            value={text}
            onChange={(e) => setText(e.target.value)}
            variant="outlined"
            label="Input Text"
            sx={{
              borderRadius: "8px",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              gap: 2,
              width: "100%",
            }}
          >
            <FormControl fullWidth>
              <InputLabel id="style-select-label">Choose Style</InputLabel>
              <Select
                labelId="style-select-label"
                value={style}
                label="Choose Style"
                onChange={(e) => setStyle(e.target.value)}
                sx={{
                  background: "#DCDCDC",
                  borderRadius: "8px",
                }}
              >
                <MenuItem value="Humor">Humor</MenuItem>
                <MenuItem value="Angry">Angry</MenuItem>
                <MenuItem value="Flirty">Flirty</MenuItem>
                <MenuItem value="Shakespeare">Shakespeare</MenuItem>
                <MenuItem value="Casual">Casual</MenuItem>
              </Select>
            </FormControl>

            <Input
              id="api-key"
              variant="outlined"
              placeholder="Enter your API Key"
              fullWidth
              sx={{
                borderRadius: "8px",
              }}
            />
          </Box>

          <Button
            variant="contained"
            color="primary"
            onClick={handleSubmit}
            disabled={loading}
            sx={{
              fontSize: "16px",
              borderRadius: "100px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              border: "0.5px solid",
              background: "#6945ED",
              borderImageSlice:
                "linear-gradient(180deg, #8E77E4 0%, rgba(142, 119, 228, 0) 100%)",
              transition: "transform 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                background: "#5a3dbf",
              },
              "&:active": {
                transform: "scale(0.95)",
              },
            }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Generate"
            )}
          </Button>

          <Box
            sx={{
              mt: 4,
              p: 2,
              width: "100%",
              minHeight: "10rem",
              background: "#f0f8ff",
              borderRadius: "8px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
              overflowY: "auto",
            }}
          >
            <Typography
              variant="h5"
              gutterBottom
              sx={{
                textAlign: "center",
                fontWeight: "bold",
                color: "#1976d2",
                mb: 0,
              }}
            >
              Output
            </Typography>

            {loading ? (
              <Typography variant="body1" align="center">
                Loading...
              </Typography>
            ) : result ? (
              result.split("\n").map((line, index) => (
                <Card
                  key={index}
                  sx={{
                    mb: 2,
                    backgroundColor: "#e3f2fd",
                    borderRadius: "12px",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                  }}
                >
                  <CardContent
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 2,
                    }}
                  >
                    <Avatar sx={{ bgcolor: "#1976d2" }}>
                      <SentimentVerySatisfiedIcon />
                    </Avatar>
                    <Typography variant="body1">{line.trim()}</Typography>
                  </CardContent>
                </Card>
              ))
            ) : (
              <Typography variant="body1" color="text.secondary">
                No output generated.
              </Typography>
            )}
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default InputTextArea;
