import Box from "@mui/material/Box";
import tostadoImage from "../../assets/images/tostadoP.jpg";
import { historyText, introText, philosophyText } from "./texts";
import { Typography } from "@mui/material";

export function HeroBanner() {
  return (
    <Box
      id="historia"
      display="flex"
      px={2}
      pt={2}
      gap={2}
      color="primary"
      alignItems={"center"}
    >
      <Typography color="primary">{introText}</Typography>
      <Typography color="primary">{historyText}</Typography>
      {/* <Typography>{philosophyText}</Typography> */}
      <Box>
        <img src={tostadoImage} alt="Tostado suizo" />
      </Box>
    </Box>
  );
}
