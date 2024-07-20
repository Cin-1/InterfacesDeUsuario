import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b27046",
    },
    secondary: {
      main: "#f2e9e4",
    },
    pale: { main: "#edd6c8" },
    brown: { main: "#d38845" },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
