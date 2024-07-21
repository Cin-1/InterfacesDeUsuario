import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material"; // Import Button component
import FaceIcon from "@mui/icons-material/Face";
import Face4Icon from "@mui/icons-material/Face4";
import Face6Icon from "@mui/icons-material/Face6";

export function Footer() {
  return (
    <Box position="absolute" pb={"0px"} justifyContent={"space-between"}>
      <BottomNavigation
        showLabels
        display="flex"
        justifyContent={"space-between"}
      >
        <BottomNavigationAction
          disabled
          label="Nicolas Trias"
          icon={<FaceIcon />}
        />
        <BottomNavigationAction
          disabled
          label="Cinthia Pardos"
          icon={<Face4Icon />}
        />
        <BottomNavigationAction
          disabled
          label="Octavio Cecio"
          icon={<Face6Icon />}
        />
      </BottomNavigation>
    </Box>
  );
}
