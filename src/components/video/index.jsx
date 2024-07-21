import Box from "@mui/material/Box";
import tostadoImage from "../../assets/images/tostado.jpg";
import { Typography } from "@mui/material";
import { philosophyText } from "../heroBanner/texts";

export default function VideoContainer() {
  return (
    <Box
      sx={{
        textAlign: "center",
        fontSize: "17px",
        fontWeight: "600",
      }}
    >
      <Typography color="primary">{philosophyText}</Typography>
      <Typography color="primary"
        sx={{ textAlign: "center", fontSize: "30px", fontWeight: "999", pb: 2 }}
      >
        ¡Te esperamos para que conozcas la especialidad de la casa!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          height: "500px",
        }}
      >
        <Box sx={{ width: "50%", overflow: "hidden", position:"relative"}}>
          <a href="https://youtu.be/Q7lnjV4XNbY" target="_blank">
          <img
            
            src={tostadoImage}
            alt="Tostados del mundo"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
          </a>
        </Box>
        <iframe
          src="https://www.youtube.com/embed/Q7lnjV4XNbY?si=J4iZXO8JNQgKiw2I"
          title="Video de tostado"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          width="50%"
          height="100%"
        />
      </Box>
    </Box>
  );
}
