"use client";

import { Box } from "@mui/material";

export const PageContainer = ({ children }) => {
  return (
    <Box
      sx={{
        py: 10,
        position: "relative",
        maxWidth: "1080px",
        display: "flex",
        flexDirection: "column",
        margin: "0 auto",
        px: { xs: 4, sm: 8 },
        gap: 3,
        overflow: { md: "hidden", lg: "visible" },
        bgcolor: "background.default",
      }}
    >
      {children}
    </Box>
  );
};
