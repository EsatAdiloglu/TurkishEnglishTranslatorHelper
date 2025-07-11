"use client"

import { FormControl, OutlinedInput } from "@mui/material"
import { useRef, useState } from "react"


export default function InputField({
    onChange
}: {onChange: ((requestJSON: Object) => void | ((requestJSON: Object) => Promise<void>))}){
    const [sentence, setSentence] = useState<String>("")
    const inputTimeout = useRef<NodeJS.Timeout | null>(null)

    const handleChange = async (event: any) => {
        event.stopPropagation();
        event.preventDefault();

        const newSentence = event.target.value.trim().toLowerCase()
        if(sentence.trim() !== newSentence){
            if(inputTimeout.current){
            clearTimeout(inputTimeout.current)
            }
            setSentence(newSentence)
            if(newSentence !== ""){
                inputTimeout.current = setTimeout(async (latestSentence) => {
                    const requestJSON = {words: latestSentence.split(" ")}
                    await onChange(requestJSON)
                }, 2000, newSentence)
            }

        }
        
    }
    return(
        <form autoComplete="off">
        <FormControl sx={{width:"35vw"}}>
          <OutlinedInput
          placeholder="Your sentence goes here..."
          multiline
          minRows={15}
          maxRows={15}
          sx={{fontSize:"1.2rem", lineHeight:1.2}}
          onChange={(e) => handleChange(e)}
          />
        </FormControl>
      </form>
    )
}