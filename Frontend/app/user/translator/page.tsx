"use client"

import { Box, Grid, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import FormControl, { useFormControl } from '@mui/material/FormControl';
import InputField from "@/components/InputField";


export default function Home() {
  const [original, setOriginal] = useState<String>("")

  const handleInputChange = (requestJSON: Object) => {
    console.log("Received requestJSON:", requestJSON);
    // Here you can handle the requestJSON, e.g., send it to an API
  };

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
          <InputField onChange={handleInputChange}/>
          <TextField
          id="filled-multiline-flexible"
          placeholder="The translated sentence will appear here..."
          multiline
          rows={15}
          disabled
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
