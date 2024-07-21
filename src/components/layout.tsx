"use client";

import { Box } from "@mui/material";
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minWidth: "1100px",
        minHeight: "100%",
        margin: "0",
        padding: "0",
      }}
    >
      {children}
    </Box>
  );
};
