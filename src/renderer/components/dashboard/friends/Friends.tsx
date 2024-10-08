import { CardActions, CardContent } from "@mui/material";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import { RangeSelectorButtonGroup } from "renderer/components/atoms/Dashboard/RangeSelectors";
import PrimaryButton from "renderer/components/atoms/Login/PrimaryButtons";
import Typography from "renderer/components/atoms/TextStyles";
import { BonusforFriends } from "renderer/components/components/Gameroom/components/BonusforFriends";
import { FriendsMolecule } from "renderer/components/molecules/Friends/Friends";
import { FriendsActivityCardHeader } from "renderer/components/molecules/Friends/FriendsActivityCardHeader";
import { InformationBox } from "renderer/components/molecules/StartMining-I/InformationBox";
export const Friends = () => {
  return (
    <Grid
      container
      item
      style={{
        width: "calc(100% - 406px)",
        marginLeft: "406px",
        padding: "24px 0px 0 21px",
      }}
    >
      <Grid lg={12} item>
        <Box>
          <Typography color={"#EAEAEA"} variant="heading1">
            Friends
          </Typography>
        </Box>
      </Grid>
      <Grid item container lg={12} marginTop={"32px"}>
        <Grid md={12} lg={12} xl={7.8}>
          <BonusforFriends />
          <Box>
            <Grid sx={{ paddingTop: "32px" }}>
              <Box>
                <Typography color="#EAEAEA" variant="heading2">
                  All Friends Historical Metrics
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "end",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  flexWrap: "wrap",
                }}
              >
                <Box>
                  <RangeSelectorButtonGroup
                    firstButtonTitle="Hour"
                    SecondButtonTitle="Day"
                    ThirdButtonTitle="Week"
                    FourthButtonTitle="3 Month"
                    FifthButtonTitle="Year"
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  background: "#0F141F",
                  borderRadius: "7px",
                  display: "flex",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    padding: "40px 20px 57px 20px",
                  }}
                >
                  <InformationBox
                    title="Total Mining Time"
                    info="25h : 06m : 52s"
                  />
                  <InformationBox title="average" info="8672.35 H/sec" />
                  <InformationBox title="MC mined Total" info="963183" />
                </Box>
                <Box
                  sx={{
                    height: {
                      xs: "45vh",
                      sm: "45vh",
                      md: "45vh",
                      lg: "52 vh",
                      xl: "48vh",
                    },
                    position: "relative",
                    width: "75%",
                    alignSelf: "center",
                  }}
                >
                  <img
                    src="/assets/Illustrations/Historical-Metrics-3-Month-Card.webp"
                    alt="Your Image Alt Text"
                    style={{
                      maxWidth: "-webkit-fill-available",
                      height: "100%",
                      objectFit: "contain",
                      position: "absolute",
                      zIndex: 3,
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid
          md={12}
          lg={12}
          xl={4}
          sx={{
            marginLeft: { sm: "0", md: "0", lg: "0", xl: "20px" },
            marginTop: {
              sm: "20px",
              md: "20px",
              lg: "20px",
              xl: "0px",
            },
          }}
        >
          <Box
            maxHeight={"988px"}
            overflow={"auto"}
            sx={{
              background: "transparent",
              borderRadius: "7px",
            }}
          >
            <Box sx={{ padding: "0 0 20px 20px" }}>
              <Typography variant="heading2" color="#EAEAEA">
                Friends Activity
              </Typography>
            </Box>
            <Card
              sx={{
                background: "#0F141F",
                height: "100%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardContent
                sx={{
                  overflowY: "auto",
                  padding: "0",
                  paddingBottom: "20px",
                }}
              >
                <Box sx={{ borderRadius: "7px" }}>
                  <FriendsActivityCardHeader friends={24} />
                  {Array(13)
                    .fill(0)
                    .map((_, index) => (
                      <>
                        <FriendsMolecule
                          key={index}
                          isMetrics={false}
                          friendName="Salt.Mine#69"
                          mining="53:22"
                        />
                      </>
                    ))}
                </Box>
              </CardContent>
              <CardActions
                sx={{
                  justifyContent: "center",
                  width: "120px",
                  alignSelf: "center",
                }}
              >
                <PrimaryButton
                  text="View All"
                  onClick={() => console.log("view all")}
                />
              </CardActions>
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
