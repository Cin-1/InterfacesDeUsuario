"use client";

import { Box } from "@mui/material";

export const Layout = ({ children }) => {
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
