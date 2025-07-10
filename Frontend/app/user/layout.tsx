import UserSidebar from "@/components/UserSidebar";
import { Stack } from "@mui/material";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Stack direction={"row"} spacing={0}>
      <UserSidebar/>
      <main className="main-content">
      {children}
      </main>
    </Stack>
  );
}