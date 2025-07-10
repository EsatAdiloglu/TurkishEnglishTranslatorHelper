"use client"

import { Button } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

export default function TurkishGuide(){
    const route = useRouter();
    const pathname = usePathname();
    return(
    <Button onClick={() => route.push(`${pathname}/translator`)}>
        Go to translator
    </Button>
    )
}