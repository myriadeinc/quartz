import { Box, CardContent, CardMedia } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import Card from "@mui/material/Card";
import { GiveAwayPriceCardTag } from "renderer/components/atoms/GitftCards/GiveAwayPriceCardTag";
import { PurchasedProgressBar } from "renderer/components/molecules/Gameroom-I/PurchasedProgressBar";
type Props = {};
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
export const CurrentDrawings = (props: Props) => {
  return (
    <Box>
      <Box
        sx={{
          padding: "16px 0 14px 20px",
          borderTopLeftRadius: "4px",
          borderTopRightRadius: "4px",
          backgroundColor: "#0F141F",
          maxWidth: "226px",
        }}
      >
        <Typography color="#EAEAEA">Current Drawings</Typography>
      </Box>
      <Box
        sx={{ display: "flex", padding: "40px", backgroundColor: "#0F141F" }}
      >
        <Box
          sx={{
            backgroundColor: "#080A0F",
            borderRadius: "7px",
            display: "flex",
          }}
        >
          {CURRENT__DRAWING.map((element) => {
            return (
              <Card sx={{ width: 384, borderRadius: "7px" }}>
                <CardMedia title="green iguana">
                  <Box
                    sx={{ backgroundColor: "#141A29", position: "relative" }}
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
                        <Typography>{element.cardMileStoneName}</Typography>
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
                          <Typography variant="bodySmall" color="#EAEAEA">
                            {element.moneroPoints}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </CardMedia>
                <CardContent>
                  <Box>
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
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
    </Box>
  );
};
