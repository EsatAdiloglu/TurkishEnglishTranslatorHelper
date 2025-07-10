"use client"

import { Box, FormControl, Grid, InputAdornment, InputLabel, OutlinedInput, Stack, TextField } from "@mui/material";
import { useState } from "react";


export default function Home() {
  const [original, setOriginal] = useState<String>("")

  return (
    <div>
      <Box mt={30}>
        <Grid 
        container 
        spacing={0.5}
        sx={{
          justifyContent: "center",
          alignItems: "center",
        }}>
          <TextField
          id="filled-multiline-flexible"
          placeholder="Your sentence goes here..."
          variant="filled"
          multiline
          rows={15}
          onChange={event => setOriginal(event.target.value)}
          sx={{
            width: "35vw",
            '& .MuiInputBase-input': {fontSize: '20px'}
          }}
          ></TextField>
          <TextField
          id="filled-multiline-flexible"
          placeholder="The translated sentence will appear here..."
          variant="filled"
          multiline
          rows={15}
          sx={{
            width: "35vw",
            '& .MuiInputBase-input': {fontSize: '20px'}
          }}
          ></TextField>
        </Grid>
      </Box>
    </div>
  );
}
