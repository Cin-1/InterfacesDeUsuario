import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material"; // Import Button component
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

export function Schedule() {
  return (
    <Box id="mapa" position="static" pb={"0px"} justifyContent={"space-between"}>
      <BottomNavigation showLabels>
        <BottomNavigationAction
          disabled
          style={{ marginRight: "350px" }}
          label="Origone 151"
          icon={<PlaceIcon />}
        />
        <BottomNavigationAction
          disabled
          style={{ marginRight: "350px" }}
          label="08:00 a 21:00"
          icon={<AccessTimeIcon />}
        />
        <BottomNavigationAction
          disabled
          label="(011) 2066-1958"
          icon={<LocalPhoneIcon />}
        />
      </BottomNavigation>
    </Box>
  );
}
