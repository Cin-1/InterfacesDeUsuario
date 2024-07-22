import Box from "@mui/material/Box";
import Cafe from "../../assets/images/Coffee-Banner.webp";

export function Banner() {
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
