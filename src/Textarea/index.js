import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, Typography, Card, CardContent, Avatar } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';

const InputTextArea = () => {
  const [text, setText] = useState('');
  const [style, setStyle] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!text || !style) {
      alert('Please enter text and select a style.');
      return;
    }

    setLoading(true);
    setResult('');

    try {
      const response = await fetch('http://localhost:5000/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text, style }),
      });

      const data = await response.json();
      if (data.error) {
        setResult('Error: ' + data.error);
      } else {
        setResult(data.styled_text || 'No response from model.');
      }
    } catch (error) {
      setResult('Error: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      component="form"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        mt: 4,
        width: '80%',
        margin: '0 auto',
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
      />

      <FormControl fullWidth>
        <InputLabel id="style-select-label">Choose Style</InputLabel>
        <Select
          labelId="style-select-label"
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        >
          <MenuItem value="Humor">Humor</MenuItem>
          <MenuItem value="Angry">Angry</MenuItem>
          <MenuItem value="Flirty">Flirty</MenuItem>
          <MenuItem value="Shakespeare">Shakespeare</MenuItem>
          <MenuItem value="Casual">Casual</MenuItem>
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
        sx={{
          padding: '10px 20px',
          fontSize: '16px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Generate Style'}
      </Button>

      <Box
        sx={{
          mt: 4,
          p: 2,
          width: '100%',
          minHeight: '10rem',
          background: '#f0f8ff',
          borderRadius: '8px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
          overflowY: 'auto',
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: '#1976d2',
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
          result.split('\n').map((line, index) => (
            <Card
              key={index}
              sx={{
                mb: 2,
                backgroundColor: '#e3f2fd',
                borderRadius: '12px',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
                overflow: 'hidden',
              }}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <Avatar sx={{ bgcolor: '#1976d2' }}>
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
  );
};

export default InputTextArea;
