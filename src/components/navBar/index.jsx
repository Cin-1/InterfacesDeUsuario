import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { AppBar, Toolbar } from "@mui/material";

export function NavBar() {
  const [firstLoad, setFirstLoad] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFirstLoad(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, [firstLoad]);
  return (
    <AppBar
      color={firstLoad ? "brown" : "primary"}
      elevation={firstLoad ? 4 : 0}
      sx={{
        display: "flex",
        alignItems: "center",
        backdropFilter: firstLoad ? "blur(10px) opacity(0.8)" : "none",
        transition: "background 0.75s ease-in-out",
        height: "100%",
        maxHeight: { xs: 80, md: 66 },
      }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignContent={"center"}
        sx={{
          position: "relative",
          py: 2,
          maxWidth: "1280px",
          width: "100%",
          transition: "padding 500ms cubic-bezier(0.4, 0, 0.2, 1) !important",
        }}
      >
        <IconButton size="medium" edge="start" aria-label="menu">
          <MenuIcon color={"white"} />
        </IconButton>
        <Button
          variant="text"
          size="medium"
          sx={{ zIndex: "99" }}
          color="white"
        >
          Historia
        </Button>
        <Button variant="text" size="medium" color="white">
          Menú
        </Button>
        <Button variant="text" size="medium" color="white">
          Ubicación
        </Button>
        <Box
          display="flex"
          justifyContent={"space-around"}
          alignItems={"center"}
          sx={{ mx: 4 }}
        >
          <Typography variant="p" p="6" sx={{ mx: 2 }} color="common.white">
            Tostados del mundo
          </Typography>
          <CoffeeIcon color="white" />
        </Box>
      </Box>
    </AppBar>
  );
}
