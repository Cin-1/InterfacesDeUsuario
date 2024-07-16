import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import CoffeeIcon from "@mui/icons-material/Coffee";

export default function ButtonAppBar() {
  return (
    <Box width={"100vw"} position="sticky" px="6">
      <AppBar>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignContent={"center"}
          sx={{ mx: 4 }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Box
            display="flex"
            justifyContent={"space-around"}
            alignItems={"center"}
            sx={{ mx: 4 }}
          >
            <Typography variant="h6" p="6" sx={{ mx: 2 }}>
              Coffee Shop
            </Typography>
            <CoffeeIcon />
          </Box>
          <Button color="inherit">Login</Button>
        </Box>
      </AppBar>
    </Box>
  );
}
