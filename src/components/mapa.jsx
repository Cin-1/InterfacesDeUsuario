import * as React from "react";
import Box from "@mui/material/Box";
import restaurant from "../images/restaurante.jpg";

export default function Ubicacion() {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", bgcolor: "#556cd6", height:"500px"}}>
      <Box sx={{ width: "50%", overflow: "hidden" }}>
        <a href="https://www.youtube.com/watch?v=9Y5v8kpVILg" target="_blank">
          <img
            src={restaurant}
            alt="Tostados del mundo"
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </a>
      </Box>
      <iframe
        title="mapa"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13133.519288815696!2d-58.63805810969287!3d-34.61984075042804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb8d055e548bf%3A0x738f85ea67aeabe5!2sUniversidad%20Nacional%20de%2Hurlingham!5e0!3m2!1ses-419!2sar!4v1721444587109!5m2!1ses-419!2sar"
        width="50%"
        height="100%"
      />
    </Box>
  );
}





