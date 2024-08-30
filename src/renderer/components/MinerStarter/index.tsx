import PauseIcon from "@mui/icons-material/Pause";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useState, useEffect } from "react";

export const MinerStarter = () => {
  const [miningStarted, setMiningStarted] = useState(true)

  const [systemInfo, setSystemInfo] = useState<{
    cpu: string;
    load: number;
    temperature: number;
    error?: string;
  }>({
    cpu: '',
    load: 0,
    temperature: 0
  });

  useEffect(() => {
    const fetchSystemInfo = async () => {
      const info = await window?.electronAPI?.getSystemInfo();
      setSystemInfo({
        ...info,
        load: parseFloat(info.load?.toFixed(2))
      });
    };

    fetchSystemInfo();
    const intervalId = setInterval(fetchSystemInfo, 1000);

    return () => clearInterval(intervalId);
  }, []);


  const miningRun = () => {
    window.electronAPI.startXmrig();
  };
  const miningStop = () => {
    window.electronAPI.stopXmrig();
  };

  useEffect(() => {
    window.electronAPI.onXmrigOutput((event, data) => {
      setMiningStarted(false);
      if (data === null) setMiningStarted(true)
      // TODO: Will capture [ stdout: [2024-07-24 18:27:11.738]  miner    speed 10s/60s/15m n/a n/a n/a H/s max 1911.4 H/s ]

    });
  }, [miningRun, miningStop]);

  return (
    <Card
      style={{
        backgroundColor: "#0F141F",
        display: "flex",
        flexWrap: "wrap",
        padding: "20px 20px 20px",
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
      <Stack alignSelf={"end"} order={{ md: 1, lg: 1, xl: 0 }}>
        <Box
          sx={{
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
              {/* Ryzen 7 */}
              {systemInfo.cpu}
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

              Temperature: {systemInfo.temperature}
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

              {systemInfo.load}%
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

        {/*<Box
          sx={{
            height: "16px",
            width: "16px",
            zIndex: 1,
            top: 12,
            position: "relative",
            backgroundColor: "#EC5506",
            borderRadius: "50%",
          }} 
        ></Box> */}
        <Box
          sx={{
            minWidth: "418px",
            minHeight: "415px",
            border: "thick solid #414E66",
            borderRadius: "50%",
            position: "relative",
          }}
        >
          <Stack
            sx={{
              position: "relative",
              top: "72px",
              alignItems: "center",
            }}
            direction={"column"}
          >
            <IconButton>
              {miningStarted ?
                <PlayArrowIcon
                  sx={{
                    minWidth: 188,
                    minHeight: 188,
                    color: "#FA6F15",
                    backgroundColor: "transparent",
                  }}
                  onClick={miningRun}
                />
                :
                <PauseIcon
                  sx={{
                    minWidth: 188,
                    minHeight: 188,
                    color: "#FA6F15",
                    backgroundColor: "transparent",
                  }}
                  onClick={miningStop}
                />
              }
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
              {miningStarted ? "Start Mining" : "Pause Mining"}
            </Typography>

            {/* <Divider
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
            </div>*/}
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
