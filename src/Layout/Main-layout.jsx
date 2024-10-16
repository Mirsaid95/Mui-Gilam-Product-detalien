import React from "react";
import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Stack, Box } from "@mui/material";

export const MainLayout = () => {
  return (
    <>
      <Box display={"flex"} flexDirection={"column"} minHeight={"100vh"}>
        <header>
          <Header />
        </header>
        <main style={{ flexGrow: 1 }}>
          <Outlet />
        </main>
        <footer style={{ marginTop: "auto" }}>
          <Footer />
        </footer>
      </Box>
    </>
  );
};
