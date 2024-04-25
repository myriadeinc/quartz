import { Box, CardContent, CardMedia } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import Card from "@mui/material/Card";
import { GiveAwayPriceCardTag } from "renderer/components/atoms/GitftCards/GiveAwayPriceCardTag";
import { PurchasedProgressBar } from "renderer/components/molecules/Gameroom-I/PurchasedProgressBar";
// type Props = {};
const CURRENT__DRAWING = [
  {
    price: "99.58",
    imgSrc: "/assets/Illustrations/img/Gameroom/Sapphire.svg",
    cardMileStoneName: "Sapphire 1",
    moneroPoints: "0.33XMR",
    moneroIcon: "",
    cardBodyTitle: "Sapphire 1",
    ticketPrice: "22MC",
    priceTagColor: "#4A83F2",
  },
  {
    price: "1.58",
    imgSrc: "/assets/Illustrations/img/Gameroom/Bronze.svg",
    cardMileStoneName: "Bronze 123",
    moneroPoints: "0.004XMR",
    moneroIcon: "",
    cardBodyTitle: "Bronze 125",
    ticketPrice: "1MC",
    priceTagColor: "#E5A639",
  },
  {
    price: "8.33",
    imgSrc: "/assets/Illustrations/img/Gameroom/Emerald.svg",
    cardMileStoneName: "Emerald 6",
    moneroPoints: "0.03XMR",
    moneroIcon: "",
    cardBodyTitle: "Emerald 6",
    ticketPrice: "8MC",
    priceTagColor: "#1DC47A",
  },
];

import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
export const SteamAmazonTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              display: "flex",
              paddingRight: "20px",
              borderBottom: "none",
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab
              label="Steam"
              value="1"
              sx={{
                border:
                  value === "1"
                    ? "1px solid transparent"
                    : " 1px solid #0F141F",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
                marginRight: "1vw",
                "&.Mui-selected": {
                  color: "#EAEAEA",
                },
                padding: "16px",
                backgroundColor: value === "1" ? "#0F141F" : "transparent",
              }}
            />
            <Tab
              label="Amazon"
              value="2"
              sx={{
                border:
                  value === "2"
                    ? "1px solid transparent"
                    : " 1px solid #0F141F",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
                "&.Mui-selected": {
                  color: "#EAEAEA",
                },
                padding: "16px",
                color: value === "2" ? "#EAEAEA" : "",
                backgroundColor: value === "2" ? "#0F141F" : "transparent",
              }}
            />
          </TabList>
          <Box
            sx={{ borderRadius: "0 7px 7px 7px", border: "1px solid #0F141F" }}
          >
            <TabPanel value="1">
              <Box
                sx={{
                  display: "flex",
                  backgroundColor: "#0F141F",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#080A0F",
                    borderRadius: "7px",
                    display: "flex",
                    padding: "20px",
                    gap: "2rem",
                    flexWrap: "wrap",
                  }}
                >
                  {CURRENT__DRAWING.map((element) => {
                    return (
                      <Card sx={{ width: 384, borderRadius: "7px" }}>
                        <CardMedia title="green iguana">
                          <Box
                            sx={{
                              backgroundColor: "#141A29",
                              position: "relative",
                            }}
                          >
                            <GiveAwayPriceCardTag
                              text={element.price}
                              backgroundColor={element.priceTagColor}
                            />
                            <Box>
                              <Box
                                sx={{
                                  paddingTop: "30px",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    padding: "15px",
                                    width: "103px",
                                    height: "103px",
                                    borderRadius: "50%",
                                    backgroundColor: "#EAEAEA",
                                  }}
                                >
                                  <img
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                    }}
                                    src={element.imgSrc}
                                  />
                                </Box>
                              </Box>
                              <Box
                                sx={{
                                  paddingTop: "10px",
                                  textAlign: "center",
                                  justifyContent: "center",
                                  paddingBottom: "30px",
                                }}
                              >
                                <Typography>
                                  {element.cardMileStoneName}
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: "8px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="/assets/svg/MoneroBalanceIcon.svg"
                                    style={{ width: "16px", height: "16px" }}
                                  />
                                  <Typography
                                    variant="bodySmall"
                                    color="#EAEAEA"
                                  >
                                    {element.moneroPoints}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </CardMedia>
                        <CardContent sx={{ backgroundColor: "#293040" }}>
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography>{element.cardBodyTitle}</Typography>
                              <Typography>
                                Ticket price:{element.ticketPrice}
                              </Typography>
                            </Box>
                            <PurchasedProgressBar caption="1000 out of 1000" />
                          </Box>
                        </CardContent>
                      </Card>
                    );
                  })}
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value="2">
              <Box
                sx={{
                  display: "flex",
                  //   padding: "40px",
                  backgroundColor: "#0F141F",
                }}
              >
                <Box
                  sx={{
                    backgroundColor: "#080A0F",
                    borderRadius: "7px",
                    display: "flex",
                    padding: "20px",
                    flexWrap: "wrap",
                    gap: "2rem",
                  }}
                >
                  {CURRENT__DRAWING.map((element) => {
                    return (
                      <Card sx={{ width: 384, borderRadius: "7px" }}>
                        <CardMedia title="green iguana">
                          <Box
                            sx={{
                              backgroundColor: "#141A29",
                              position: "relative",
                            }}
                          >
                            <GiveAwayPriceCardTag
                              text={element.price}
                              backgroundColor={element.priceTagColor}
                            />
                            <Box>
                              <Box
                                sx={{
                                  paddingTop: "30px",
                                  display: "flex",
                                  justifyContent: "center",
                                }}
                              >
                                <Box
                                  sx={{
                                    padding: "15px",
                                    width: "103px",
                                    height: "103px",
                                    borderRadius: "50%",
                                    backgroundColor: "#EAEAEA",
                                  }}
                                >
                                  <img
                                    style={{
                                      height: "100%",
                                      width: "100%",
                                    }}
                                    src={element.imgSrc}
                                  />
                                </Box>
                              </Box>
                              <Box
                                sx={{
                                  paddingTop: "10px",
                                  textAlign: "center",
                                  justifyContent: "center",
                                  paddingBottom: "30px",
                                }}
                              >
                                <Typography>
                                  {element.cardMileStoneName}
                                </Typography>
                                <Box
                                  sx={{
                                    display: "flex",
                                    gap: "8px",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <img
                                    src="/assets/svg/MoneroBalanceIcon.svg"
                                    style={{ width: "16px", height: "16px" }}
                                  />
                                  <Typography
                                    variant="bodySmall"
                                    color="#EAEAEA"
                                  >
                                    {element.moneroPoints}
                                  </Typography>
                                </Box>
                              </Box>
                            </Box>
                          </Box>
                        </CardMedia>
                        <CardContent sx={{ backgroundColor: "#293040" }}>
                          <Box>
                            <Box
                              sx={{
                                display: "flex",
                                flexDirection: "column",
                              }}
                            >
                              <Typography>{element.cardBodyTitle}</Typography>
                              <Typography>
                                Ticket price:{element.ticketPrice}
                              </Typography>
                            </Box>
                            <PurchasedProgressBar caption="1000 out of 1000" />
                          </Box>
                        </CardContent>
                      </Card>
                    );
                  })}
                </Box>
              </Box>
            </TabPanel>
          </Box>
        </Box>
      </TabContext>
    </Box>
  );
};
