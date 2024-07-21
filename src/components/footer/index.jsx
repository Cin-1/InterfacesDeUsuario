import { Box, Divider, Typography } from "@mui/material";
import Face4Icon from "@mui/icons-material/Face";
import Face4Icon2 from "@mui/icons-material/Face4";
import Face4Icon3 from "@mui/icons-material/Face6";

export const Footer = () => {
  return (
    <>
      <Box
        pt={6}
        position="absolute"
        bottom={0}
        width={"100%"}
        height={10}
        margin={0}
        padding={0}
        sx={{
          backgroundColor: "secondary.main",
        }}
      >
        <Divider />
        <Box
          component="footer"
          sx={{
            mt: 0,
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            backgroundColor: "secondary.main",
            p: "2rem",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              maxWidth: 900,
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Box display="flex" justifyContent={"space-between"} >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Face4Icon3 />
                  <Typography variant="h6" color="textPrimary" fontWeight={500} mr={2} >
                     Nicolas Trias
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Face4Icon2 />
                  <Typography variant="h6" color="textPrimary" fontWeight={500} mr={2}>
                    Cinthia Pardos
                  </Typography>
                </Box>
                <Box sx={{display: 'flex', alignItems: 'center'} }>
                  <Face4Icon />
                  <Typography variant="h6" color="textPrimary" fontWeight={500}>
                    Octavio Cecio
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                }}
              ></Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              © Construcción de interfaces de usuario - UNAHUR -  {new Date().getFullYear()} 
              <Box sx={{ display: "flex" }}>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ width: "100%" }}
                >
                  <a href="https://github.com/Cin-1/InterfacesDeUsuario" target="_blank">
                    Link al repositorio
                  </a>
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};


 