import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';

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
        setResult(data.generated_text || 'No response from model.');
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
        </Select>
      </FormControl>

      <Button
        variant="contained"
        color="primary"
        onClick={handleSubmit}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit'}
      </Button>

      <Box
        sx={{
          mt: 4,
          p: 2,
          width: '100%',
          minHeight: '10rem',
          background: '#f4f4f4',
          borderRadius: '4px',
          overflowY: 'auto',
        }}
      >
        <strong>Output:</strong>
        <p>{loading ? 'Loading...' : result}</p>
      </Box>
    </Box>
  );
};

export default InputTextArea;
