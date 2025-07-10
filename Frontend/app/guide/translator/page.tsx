"use client"

import { Box, Grid, OutlinedInput, TextField } from "@mui/material";
import { useState } from "react";
import FormControl, { useFormControl } from '@mui/material/FormControl';


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
          <form autoComplete="off">
            <FormControl sx={{width:"35vw"}}>
              <OutlinedInput placeholder="Your sentence goes here..." multiline minRows={15} maxRows={15} sx={{fontSize:"1.2rem", lineHeight:1.2}}/>
            </FormControl>
          </form>
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
