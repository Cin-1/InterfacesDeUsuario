import * as React from "react";
import Box from "@mui/material/Box";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export  function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box width={"75vw"} position="absolute" pb={"0px"} >
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
    </BottomNavigation>
  </Box>
  );
}