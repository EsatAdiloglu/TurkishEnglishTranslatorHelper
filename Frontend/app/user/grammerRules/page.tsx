"use client"

import { Box, Button } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

export default function TurkishGuide(){
    const route = useRouter();
    const pathname = usePathname();
    return(
    <Box>
        <h1>Grammer</h1>
    </Box>
    )
}