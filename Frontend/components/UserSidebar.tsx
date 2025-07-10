"use client"

import { Button, Stack } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation"

const links = [
        {href:`/user/grammerRules`, name: "Guide"},
        {href:`/user/translator`, name: "Translator"},
        {href:`/user/savedWords`, name: "Saved Words"}
]

export default function UserSidebar(){
    const pathname = usePathname();
    return(
        <Stack spacing={2} className={"userSidebar"}>
            {links.map((link) => (
                <Link key={link.href} href={link.href}>
                <Button 
                fullWidth  
                variant={pathname === link.href ? 'contained' : 'outlined'} 
                color="primary"
                sx={{height:"5vh"}}
                >{link.name}</Button>
                </Link>
            ))}
        </Stack>
    )
}