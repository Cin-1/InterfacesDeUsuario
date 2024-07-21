"use client";

import { Box } from "@mui/material";
import React from "react";

interface PageContainerProps {
  children: React.ReactNode;
}

export const PageContainer = ({ children }: PageContainerProps) => {
  return (
    <Box
      sx={{
        position: "relative",
        maxWidth: "1080px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        px: { xs: 4, sm: 8 },
        pt: 6,
        gap: 4,
        overflow: { md: "hidden", lg: "visible" },
        bgcolor: "background.default",
      }}
    >
      {children}
    </Box>
  );
};
