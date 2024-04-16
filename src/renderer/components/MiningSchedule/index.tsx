import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Card from "@mui/material/Card";

export const MiningSchedule = () => {
  return (
    <Card
      sx={{
        background: "transparent",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Stack
        padding={"12px"}
        gap={"1rem"}
        sx={{
          flexBasis: "40%",
          backgroundColor: "#0F141F",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography fontSize={"1rem"} color={"#FFF"}>
            Mining Allocation
          </Typography>
        </Box>

        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          flexWrap={"wrap"}
        >
          <Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #293040",
                borderRadius: "3px",
                maxWidth: "75px",
                maxHeight: "40px",
              }}
            >
              <Typography
                fontFamily="Poppins, sans-serif"
                style={{
                  fontSize: "1rem",
                  color: "#EAEAEA",
                  fontWeight: 400,
                  marginTop: "6px",
                  textAlign: "center",
                }}
              >
                00
              </Typography>
            </Box>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "10px",
                color: "#EAEAEA",
                fontWeight: 400,
                marginTop: "6px",
                textAlign: "left",
              }}
            >
              Unused Points
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #293040",
                borderRadius: "3px",
                maxWidth: "75px",
                maxHeight: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 1,
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    width: 30,
                    height: 30,
                    zIndex: 4,
                    position: "absolute",
                    transform: "rotate(180deg)",
                    left: 0,
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
                <Typography
                  fontFamily="Poppins, sans-serif"
                  style={{
                    fontSize: "1rem",
                    color: "#EAEAEA",
                    fontWeight: 400,
                    textAlign: "center",
                    marginLeft: "30px",
                  }}
                >
                  50
                </Typography>
                <IconButton
                  sx={{
                    width: 30,
                    height: 30, // Adjust height as needed
                    zIndex: 4,
                    marginLeft: "auto",
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              </Box>
            </Box>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "10px",
                color: "#8C8C8C",
                fontWeight: 400,
                marginTop: "3px",
                textAlign: "center",
              }}
            >
              MC
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #293040",
                borderRadius: "3px",
                maxWidth: "75px",
                maxHeight: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 1,
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    width: 30,
                    height: 30,
                    zIndex: 4,
                    position: "absolute",
                    transform: "rotate(180deg)",
                    left: 0,
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
                <Typography
                  fontFamily="Poppins, sans-serif"
                  style={{
                    fontSize: "1rem",
                    color: "#EAEAEA",
                    fontWeight: 400,
                    textAlign: "center",
                    marginLeft: "30px",
                  }}
                >
                  50
                </Typography>
                <IconButton
                  sx={{
                    width: 30,
                    height: 30, // Adjust height as needed
                    zIndex: 4,
                    marginLeft: "auto",
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              </Box>
            </Box>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "10px",
                color: "#8C8C8C",
                fontWeight: 400,
                marginTop: "3px",
                textAlign: "center",
              }}
            >
              Gift Card
            </Typography>
          </Box>
          <Box>
            <Box
              sx={{
                backgroundColor: "transparent",
                border: "1px solid #293040",
                borderRadius: "3px",
                maxWidth: "75px",
                maxHeight: "40px",
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  borderRadius: 1,
                  position: "relative",
                }}
              >
                <IconButton
                  sx={{
                    width: 30,
                    height: 30,
                    zIndex: 4,
                    position: "absolute",
                    transform: "rotate(180deg)",
                    left: 0,
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
                <Typography
                  fontFamily="Poppins, sans-serif"
                  style={{
                    fontSize: "1rem",
                    color: "#EAEAEA",
                    fontWeight: 400,
                    textAlign: "center",
                    marginLeft: "30px",
                  }}
                >
                  50
                </Typography>
                <IconButton
                  sx={{
                    width: 30,
                    height: 30,
                    zIndex: 4,
                    marginLeft: "auto",
                  }}
                >
                  <PlayArrowIcon />
                </IconButton>
              </Box>
            </Box>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "10px",
                color: "#8C8C8C",
                fontWeight: 400,
                marginTop: "3px",
                textAlign: "center",
              }}
            >
              XMR
            </Typography>
          </Box>
        </Stack>
      </Stack>
      <Stack
        padding={"12px"}
        direction={"column"}
        gap={"1rem"}
        sx={{
          flexBasis: "40%",
          backgroundColor: "#0F141F",
          borderRadius: "8px",
        }}
      >
        <Box>
          <Typography
            fontFamily="Poppins, sans-serif"
            fontSize="16px"
            fontWeight="400"
            color={"#FFF"}
          >
            Plan Your Mining
          </Typography>
        </Box>
        <Box alignSelf={{ md: "auto", lg: "center" }}>
          <img
            src="/assets/img/Illustration.webp"
            alt="Plan your Mining Image"
            style={{
              zIndex: 3,
              backgroundPosition: "50% 50%",
            }}
          />
        </Box>
        <Box alignSelf={"end"}>
          <Button
            sx={{
              maxWidth: "120px",
              maxHeight: "40px",
              backgroundColor: "transparent",
              border: "2px solid #FA6F15",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "4px",
              color: "#FFF",
            }}
          >
            Plan Mining
          </Button>
        </Box>
      </Stack>
    </Card>
  );
};
