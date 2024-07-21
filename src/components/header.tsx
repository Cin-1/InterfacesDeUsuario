import React from "react";
import Box from "@mui/material/Box";
import Cafe from "../assets/images/Coffee-Banner.webp";
import { Typography } from "@mui/material";

export function Prueba() {
  return (
    <Box
      sx={{
        pt: 20,
        backgroundImage: `url(${Cafe})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "385px",
      }}
    ></Box>
  );
}
