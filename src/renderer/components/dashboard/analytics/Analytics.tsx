import Grow from "@mui/material/Grow";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Link } from "react-router-dom";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { FriendMenu } from "../friends/Friends";
import { HistoryChart } from "renderer/components/common/historyChart";

export const Analytics = () => {
  return (
    <MinerConsumer>
      {(miner) => (
        <Box
          style={{
            width: "calc(100% - 406px)",
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
            <Box>
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
                    </Card>

                    <img
                      src="https://i.ibb.co/h8qPJZ5/DM.png"
                      alt="Your Image Alt Text"
                      style={{
                        width: "218px",
                        height: "220px",
                        objectFit: "cover",
                        position: "absolute",
                        top: "60px",
                        right: "1rem",
                        zIndex: 3, // Higher zIndex for the image to be above the second card
                      }}
                    />
                  </div>
                </Grow>
              </Link>
            </Box>
            <Box>
              <Link to={} style={{ textDecoration: "none", cursor: "pointer" }}>
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
                        zIndex: 2, // Higher zIndex for the second card to be above the first card
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
                    </Card>
                    <img
                      src="https://i.ibb.co/nkWHgp7/DM2.png"
                      alt="Your Image Alt Text"
                      style={{
                        width: "340px",
                        height: "213px",
                        objectFit: "cover",
                        position: "absolute",
                        top: "50px",
                        right: "1rem",
                        zIndex: 3,
                      }}
                    />
                  </div>
                </Grow>
              </Link>
            </Box>
            <Box>
              <Link to={} style={{ textDecoration: "none", cursor: "pointer" }}>
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
                        zIndex: 2, // Higher zIndex for the second card to be above the first card
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
                    </Card>
                    <img
                      src="https://i.ibb.co/TTbBTKc/DM3.png"
                      alt="Your Image Alt Text"
                      style={{
                        width: "292px",
                        height: "227px",
                        objectFit: "cover",
                        position: "absolute",
                        top: "30px",
                        right: "1rem",
                        zIndex: 3,
                      }}
                    />
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
            <Box maxHeight={"600px"}>
              <FriendMenu />
            </Box>
          </Box>
        </Box>
      )}
    </MinerConsumer>
  );
};
