import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Card from "@mui/material/Card";

export const MinerStarter = () => {
  return (
    <Card
      style={{
        backgroundColor: "#0F141F",
        display: "flex",
        flexWrap: "wrap",
        // height: "100%",
        // width: "100%",
        padding: "1rem",
        paddingBottom: "0px",
        height: "100%",
      }}
      sx={{
        justifyContent: {
          sm: "center",
          md: "space-around",
          lg: "space-around",
          xl: "space-between",
        },
        paddingTop: "0px !important",
        gap: {
          sm: "6px",
          md: "12px",
          lg: "12px",
          xl: "0",
        },
      }}
    >
      <Stack
        alignSelf={"end"}
        // alignItems={"center"}
        // marginLeft='1rem'
        order={{ md: 1, lg: 1, xl: 0 }}
      >
        <Box
          sx={{
            // minWidth: "150px",
            width: "100%",
            maxHeight: "100%",
            backgroundColor: "transparent",
            border: "1px solid #293040",
            borderRadius: "7px",
            marginBottom: "20px",
            padding: ".2rem .5rem",
          }}
        >
          <Box>
            <Typography></Typography>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "14px",
                color: "#8C8C8C",
                fontWeight: 400,
                marginTop: "6px",
                // marginBottom: "0px",
                textAlign: "left",
              }}
            >
              PC Stats
            </Typography>
          </Box>
          <Stack direction="row" justifyContent={"space-between"} width="100%">
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "16px",
                color: "#EAEAEA",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              Ryzen 7 5700
            </Typography>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "16px",
                color: "#EAEAEA",
                fontWeight: 400,
                textAlign: "left",
              }}
            >
              82°C
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent={"space-between"} width="100%">
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "16px",
                color: "#EAEAEA",
                fontWeight: 400,
                marginBottom: "0px",
                textAlign: "left",
              }}
            >
              CPU Usage:
            </Typography>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "16px",
                color: "#EAEAEA",
                fontWeight: 400,
                marginBottom: "0px",
                textAlign: "left",
              }}
            >
              64%
            </Typography>
          </Stack>
        </Box>
      </Stack>
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        alignSelf={"center"}
      >
        <Box
          sx={{
            height: "16px",
            width: "16px",
            zIndex: 1,
            top: 12,
            position: "relative",
            backgroundColor: "#EC5506",
            borderRadius: "50%",
          }}
        ></Box>
        <Box
          sx={{
            // minWidth: "260px",
            // minHeight: "260px",
            minWidth: "418px",
            minHeight: "415px",
            border: "thick solid #414E66",
            // transform: "rotate(-25deg)",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              // transform: "rotate(25deg)",
              position: "relative",
              top: "72px",
              alignItems: "center",
            }}
            direction={"column"}
          >
            <IconButton>
              <PlayArrowIcon
                sx={{
                  minWidth: 88,
                  minHeight: 88,
                  color: "#FA6F15", // Icon color
                  backgroundColor: "transparent", // Button background color
                }}
              />
            </IconButton>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "20px",
                color: "#EAEAEA",
                fontWeight: 400,
                marginBottom: "0px",
                textAlign: "center",
              }}
            >
              Start Mining
            </Typography>

            <Divider
              sx={{
                marginTop: "8px",
                height: 0.25,
                width: "288px",
                bgcolor: "#293040",
              }}
            />

            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "20px",
                color: "#EAEAEA",
                fontWeight: 400,
                marginTop: "6px",
                marginBottom: "0px",
                textAlign: "center",
              }}
            >
              694 XP Until Level 34
            </Typography>

            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "16px",
                color: "#EAEAEA",
                fontWeight: 400,
                marginTop: "4px",
                marginBottom: "0px",
                textAlign: "center",
              }}
            >
              Next bonus: 21MC
            </Typography>
            <div style={{ zIndex: 3 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "6px",
                }}
              >
                <Divider
                  sx={{
                    flexGrow: 0.4,
                    bgcolor: "#FA6F15",
                    height: 0.25,
                    width: "3rem",
                    marginRight: "20px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    color: "#8C8C8C",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  1H estimate
                </Typography>
              </Box>
              <Divider
                sx={{
                  marginTop: "5px",
                  height: 0.25,
                  minWidth: "20px",
                  flexGrow: 0,
                  bgcolor: "#293040",
                  width: "224px",
                }}
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <Divider
                  sx={{
                    flexGrow: 0.4,
                    bgcolor: "#FA6F15",
                    height: 0.25,
                    width: "3rem",
                    marginRight: "20px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "14px",
                    color: "#8C8C8C",
                    fontWeight: 400,
                    textAlign: "center",
                  }}
                >
                  24H estimate
                </Typography>
              </Box>
            </div>
          </Stack>
        </Box>
      </Stack>
      <Stack alignSelf={"end"} order={{ md: 1, lg: 1, xl: 0 }}>
        <Box>
          <Box
            sx={{
              width: "150px",
              maxHeight: "100%",
              backgroundColor: "transparent",
              border: "1px solid #293040",
              borderRadius: "7px",
              marginBottom: "20px",
              padding: "1rem",
            }}
          >
            <Stack
              direction="column"
              justifyContent={"space-between"}
              alignItems={"flex-start"}
              width="100%"
            >
              <Typography
                fontFamily="Poppins, sans-serif"
                style={{
                  fontSize: "14px",
                  color: "#8C8C8C",
                  fontWeight: 400,
                  textAlign: "left",
                }}
              >
                Current Hashrate
              </Typography>
              <Divider
                sx={{
                  bgcolor: "#EAEAEA",
                  height: 0.01,
                  marginTop: "10px",
                  minWidth: "15px",
                }}
              />
            </Stack>
          </Box>
          <Box
            sx={{
              maxWidth: "150px",
              maxHeight: "100%",
              backgroundColor: "transparent",
              border: "1px solid #293040",
              borderRadius: "7px",
              marginBottom: "20px",
              padding: "1rem",
            }}
          >
            <Stack direction="column" width="100%" alignItems={"flex-start"}>
              <Typography
                fontFamily="Poppins, sans-serif"
                style={{
                  fontSize: "14px",
                  color: "#8C8C8C",
                  fontWeight: 400,
                  textAlign: "left",
                }}
              >
                Highest Hashrate
              </Typography>
              <Divider
                sx={{
                  bgcolor: "#EAEAEA",
                  height: 0.01,
                  marginTop: "10px",
                  minWidth: "15px",
                }}
              />
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Card>
  );
};
