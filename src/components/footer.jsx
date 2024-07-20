import * as React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import Face4Icon from '@mui/icons-material/Face4';
import Face6Icon from '@mui/icons-material/Face6';

export  function Footer() {
  const [value, setValue] = React.useState(null);

  

  return (
    <Box width={"75%"} position="absolute" pb={"0px"} justifyContent={"space-between"} >
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction disabled label="Nicolas Trias" icon={<FaceIcon />} />
      <BottomNavigationAction disabled label="Cinthia Pardos" icon={<Face4Icon />} />
      <BottomNavigationAction disabled label="Octavio Cecio" icon={<Face6Icon />} />
    </BottomNavigation>
  </Box>
  );
}