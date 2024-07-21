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
        height={60}
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
            mt: 6,
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
              gap: "1rem",
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
                <Box>
                  <Face4Icon3 />
                  <Typography variant="h6" color="textPrimary" fontWeight={500}>
                    Nicolas Trias
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Subtitulo
                  </Typography>
                </Box>
                <Box sx={{ px: 2 }}>
                  <Face4Icon2 />
                  <Typography variant="h6" color="textPrimary" fontWeight={500}>
                    Cinthia Pardos
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Subtitulo
                  </Typography>
                </Box>
                <Box>
                  <Face4Icon />
                  <Typography variant="h6" color="textPrimary" fontWeight={500}>
                    Octavio Cecio
                  </Typography>
                  <Typography variant="body1" color="textPrimary">
                    Subtitulo
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "0.5rem",
                  mt: 1,
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
              © {new Date().getFullYear()}
              <Box sx={{ display: "flex", gap: "0.25rem" }}>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  sx={{ width: "100%" }}
                >
                  <a href="https://lordicon.com/" target="_blank">
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
