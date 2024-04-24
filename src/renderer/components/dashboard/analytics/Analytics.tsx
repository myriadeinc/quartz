import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { FriendMenu } from "../friends/Friends";
import { HistoryChart } from "renderer/components/common/historyChart";
import { useState, useEffect } from "react";
import Chart from "./Chart";
import { CurrentDrawings } from "renderer/components/components/Gameroom/components/CurrentDrawings";
const dummyData = [
  { time: 1619443200000, rate: 500 },
  { time: 1619446800000, rate: 600 },
  { time: 1619450400000, rate: 700 },
  { time: 1619454000000, rate: 800 },
  { time: 1619457600000, rate: 900 },
  { time: 1619461200000, rate: 1000 },
  // Add more data points as needed
];
export const Analytics = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  useEffect(() => {
    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  console.log("screenSizescreenSize", screenSize);
  return (
    <MinerConsumer>
      {(miner) => (
        <Box
          sx={{
            width: {
              xs: "100vw",
              sm: "100vw",
              md: "calc(100% - 406px)",
              lg: "calc(100% - 406px)",
            },
            marginLeft: "406px",
            padding: "1.5rem",
          }}
        >
          <Box>
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "28px",
                color: "#EAEAEA",
                fontWeight: 400,
              }}
            >
              Dashboard
            </Typography>
          </Box>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", xl: "justifyContent" }}
            flexDirection={{ md: "row", lg: "row" }}
          >
            <Box sx={{ width: { xs: "100%", sm: "100%", md: "inherit" } }}>
              <Link
                to={""}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Grow in={true}>
                  <div style={{ position: "relative" }}>
                    <Card
                      style={{
                        backgroundColor: "#0F141F",
                        backgroundImage: "none",
                        backgroundSize: "cover",
                        minWidth: "475px",
                        height: "288px",
                        padding: "0px",
                        marginTop: "20px",
                        marginRight: "10px",
                        zIndex: 2,
                        borderRadius: "7px",
                      }}
                    >
                      <Typography
                        fontFamily="Poppins, sans-serif"
                        style={{
                          fontSize: "16px",
                          color: "#8C8C8C",
                          fontWeight: 400,
                          marginTop: "20px",
                          marginLeft: "20px",
                        }}
                      >
                        Average Hashrate (1hr)
                      </Typography>
                      <Typography
                        fontFamily="Poppins, sans-serif"
                        style={{
                          fontSize: "20px",
                          color: "#EAEAEA",
                          fontWeight: 500,
                          marginLeft: "20px",
                        }}
                      >
                        {miner.avgHashrate} H/sec
                      </Typography>
                      <CardMedia
                        component="img"
                        height="194"
                        image="/assets/Illustrations/DM.webp"
                        alt="Paella dish"
                        sx={{ objectFit: "contain" }}
                      />

                      {/* <Box
                        sx={{
                          maxWidth: "280px",
                          height: "220px",
                          objectFit: "cover",
                          position: "absolute",
                          top: "60px",
                          right: "1rem",
                        }}
                      >
                      </Box> */}
                    </Card>
                    {/* <Card
                      style={{
                        backgroundColor: "#0F141F",
                        backgroundImage: "none",
                        backgroundSize: "cover",
                        width: "100%", // Set card width to 100% to make it responsive
                        height: "288px",
                        padding: "0px",
                        marginTop: "20px",
                        marginRight: "10px",
                        zIndex: 2,
                        borderRadius: "7px",
                        display: "flex",
                        flexDirection: "column", // Ensure child elements stack vertically
                        justifyContent: "space-between", // Distribute space evenly between child elements
                        position: "relative",
                      }}
                    >
                      <Typography
                        variant="body1"
                        style={{
                          fontSize: "16px",
                          color: "#8C8C8C",
                          fontWeight: 400,
                          marginTop: "20px",
                          marginLeft: "20px",
                        }}
                      >
                        Average Hashrate (1hr)
                      </Typography>
                      <Typography
                        variant="h6"
                        style={{
                          fontSize: "20px",
                          color: "#EAEAEA",
                          fontWeight: 500,
                          marginLeft: "20px",
                        }}
                      >
                        {miner.avgHashrate} H/sec
                      </Typography>
                      <Box
                        style={{
                          maxWidth: "100%",
                          height: "220px",
                          objectFit: "cover",
                          position: "absolute",
                          top: "60px",
                          right: "1rem",
                        }}
                      >
                        <img
                          src="/assets/img/DM.webp"
                          alt="Your Image Alt Text"
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            zIndex: 3,
                          }}
                        />
                      </Box>
                    </Card> */}
                  </div>
                </Grow>
              </Link>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "100%", md: "inherit" } }}>
              <Link
                to={""}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Grow in={true}>
                  <div style={{ position: "relative" }}>
                    <Card
                      style={{
                        backgroundColor: "#0F141F",
                        backgroundImage: "none",
                        backgroundSize: "cover",
                        minWidth: "475px",
                        height: "288px",
                        padding: "0px",
                        marginTop: "20px",
                        zIndex: 2,
                        borderRadius: "7px",
                      }}
                    >
                      <Typography
                        fontFamily="Poppins, sans-serif"
                        style={{
                          fontSize: "16px",
                          color: "#8C8C8C",
                          fontWeight: 400,
                          marginTop: "20px",
                          marginLeft: "20px",
                        }}
                      >
                        Pool Hashrate
                      </Typography>
                      <Typography
                        fontFamily="Poppins, sans-serif"
                        style={{
                          fontSize: "20px",
                          color: "#EAEAEA",
                          fontWeight: 500,
                          marginLeft: "20px",
                        }}
                      >
                        2039570 H/sec
                      </Typography>
                      <CardMedia
                        component="img"
                        height="194"
                        image="/assets/Illustrations/DM2.webp"
                        alt="Paella dish"
                        sx={{ objectFit: "contain" }}
                      />
                    </Card>
                  </div>
                </Grow>
              </Link>
            </Box>
            <Box sx={{ width: { xs: "100%", sm: "100%", md: "inherit" } }}>
              <Link
                to={""}
                style={{ textDecoration: "none", cursor: "pointer" }}
              >
                <Grow in={true}>
                  <div style={{ position: "relative" }}>
                    <Card
                      style={{
                        backgroundColor: "#0F141F",
                        backgroundImage: "none",
                        backgroundSize: "cover",
                        minWidth: "475px",
                        height: "288px",
                        marginTop: "20px",
                        zIndex: 2,
                        borderRadius: "7px",
                      }}
                      sx={{
                        marginLeft: { md: "0", lg: ".5rem", xl: ".5rem" },
                      }}
                    >
                      <Typography
                        fontFamily="Poppins, sans-serif"
                        style={{
                          fontSize: "16px",
                          color: "#8C8C8C",
                          fontWeight: 400,
                          marginTop: "20px",
                          marginLeft: "20px",
                        }}
                      >
                        Referrer Bonus
                      </Typography>
                      <Typography
                        fontFamily="Poppins, sans-serif"
                        style={{
                          fontSize: "20px",
                          color: "#EAEAEA",
                          fontWeight: 500,
                          marginLeft: "20px",
                        }}
                      >
                        68531 MC
                      </Typography>
                      <CardMedia
                        component="img"
                        height="194"
                        image="/assets/Illustrations/DM3.webp"
                        alt="Paella dish"
                        sx={{ objectFit: "contain" }}
                      />
                    </Card>
                  </div>
                </Grow>
              </Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: "grid",
              flexWrap: "wrap",
            }}
            gridTemplateColumns={{ md: "1fr", lg: "2fr 1fr", xl: "2fr 1fr" }}
          >
            <HistoryChart isAnalytics={true} padding="1.5rem 0" />
            <Box maxHeight={"600px"} overflow={"auto"}>
              <FriendMenu />
            </Box>
          </Box>
        </Box>
      )}
    </MinerConsumer>
  );
};
