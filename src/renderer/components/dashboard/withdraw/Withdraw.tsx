import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import { useState } from "react";
import { MinerConsumer } from "renderer/pages/Dashboard";

export const Withdraw = () => {
  const [withdrawing, setWithdrawing] = useState(false);

  return (
    <Stack
      style={{
        width: "calc(100% - 430px)",
        marginLeft: "400px",
        padding: "16px",
        gap: "20px",
      }}
    >
      <Grid container>
        <Box>
          <Typography
            fontFamily="Poppins, sans-serif"
            style={{
              fontSize: "2rem",
              color: "#EAEAEA",
              fontWeight: 400,
            }}
          >
            Withdraw
          </Typography>
        </Box>
      </Grid>
      <Box
        display={"grid"}
        gridTemplateColumns={"1fr 1fr 1fr"}
        sx={{
          backgroundColor: "#080A0F",
          borderRadius: "0 0 7px 7px",
          border: "1px solid rgba(234, 234, 234, 0.2)",
        }}
      >
        <div
          style={{
            flex: 1,
            borderRight: "1px solid rgba(234, 234, 234, 0.2)",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center items horizontally
            justifyContent: "center", // Center items vertically
          }}
        >
          <MinerConsumer>
            {(miner) => (
              <Typography
                fontFamily="Poppins, sans-serif"
                style={{
                  fontSize: "18px",
                  color: "#EAEAEA",
                  fontWeight: 400,
                  marginTop: "10px",
                  marginLeft: "20px",
                  textAlign: "center",
                }}
              >
                {miner.xmrBalance} XMR
              </Typography>
            )}
          </MinerConsumer>
          <Typography
            fontFamily="Poppins, sans-serif"
            style={{
              fontSize: "14px",
              color: "#EAEAEA",
              fontWeight: 400,
              marginTop: "10px",
              marginLeft: "20px",
              textAlign: "center",
            }}
          >
            Your Monero Balance
          </Typography>
        </div>

        <div
          style={{
            flex: 1,
            borderRight: "1px solid rgba(234, 234, 234, 0.2)",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            fontFamily="Poppins, sans-serif"
            style={{
              fontSize: "18px",
              color: "#EAEAEA",
              fontWeight: 400,
              marginTop: "10px",
              marginLeft: "20px",
              textAlign: "center",
            }}
          >
            0.001 XMR
          </Typography>
          <Typography
            fontFamily="Poppins, sans-serif"
            style={{
              fontSize: "14px",
              color: "#EAEAEA",
              fontWeight: 400,
              marginTop: "10px",
              marginLeft: "20px",
              textAlign: "center",
            }}
          >
            Minimum Withdrawal Amount
          </Typography>
        </div>

        <div
          style={{
            flex: 1,
            borderRight: "1px solid rgba(234, 234, 234, 0.2)",
            padding: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center", // Center items horizontally
            justifyContent: "center", // Center items vertically
          }}
        >
          <Typography
            fontFamily="Poppins, sans-serif"
            style={{
              fontSize: "18px",
              color: "#EAEAEA",
              fontWeight: 400,
              marginTop: "10px",
              marginLeft: "20px",
              textAlign: "center",
            }}
          >
            0 XMR
          </Typography>
          <Typography
            fontFamily="Poppins, sans-serif"
            style={{
              fontSize: "14px",
              color: "#EAEAEA",
              fontWeight: 400,
              marginTop: "10px",
              marginLeft: "20px",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            Withdrawal Fee
          </Typography>
        </div>
      </Box>
      <Grid item sm={12}>
        <Box
          sx={{
            maxWidth: "200px", // width of the circle container
            minHeight: "200px", // height of the circle container
            backgroundColor: "#141A29", // circle container color
            borderRadius: "50%", // makes the box a circle
            display: "flex", // use flex to center the content inside the Box
            flexDirection: "column", // stack children vertically
            justifyContent: "center", // center vertically
            alignItems: "center", // center horizontally
            padding: "8px", // Add some padding around the content
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="https://i.ibb.co/nfBZy8x/Monero.png" // replace with your image URL
              alt="Your Description"
              style={{
                maxWidth: "44px",
                maxHeight: "44px", // height of the image
                marginTop: "5px",
              }}
            />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              fontFamily="Poppins, sans-serif"
              style={{
                fontSize: "16px",
                color: "#EAEAEA",
                fontWeight: 400,
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Monero
            </Typography>
          </div>
        </Box>
      </Grid>

      <Grid item sm={12}>
        <Card
          elevation={0}
          style={{
            maxWidth: "1472px",
            minHeight: "320px",
            backgroundColor: "#0F141F",
            borderRadius: "7px",
          }}
        >
          {withdrawing ? (
            <div>
              <Typography variant="h6">XMR Amount</Typography>
            </div>
          ) : (
            <Stack padding={"22px"} gap={"1rem"}>
              <Box>
                <Typography
                  fontFamily="Poppins, sans-serif"
                  style={{
                    fontSize: "20px",
                    color: "#EAEAEA",
                  }}
                  variant="h6"
                >
                  Withdraw your Monero
                </Typography>
              </Box>
              <Box
                display={"grid"}
                gridTemplateColumns={{
                  md: "1fr",
                  lg: "3fr 1fr",
                  xl: "3fr 1fr",
                }}
              >
                <Stack gap={"1rem"}>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography
                      fontFamily="Poppins, sans-serif"
                      style={{
                        fontSize: "16px",
                        marginRight: "5px",
                        color: "#EAEAEA",
                        whiteSpace: "nowrap",
                      }}
                    >
                      XMR Amount:{" "}
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      style={{
                        maxWidth: "874px",
                        height: "32px",
                      }}
                      inputProps={{
                        style: {
                          height: "32px",
                          padding: "0 14px",
                        },
                      }}
                      size="small"
                      fullWidth
                      variant="outlined"
                      onChange={this.emailChange}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="start">XMR</InputAdornment>
                        ),
                        type: "number",
                      }}
                    />
                  </Stack>
                  <Stack direction={"row"} justifyContent={"space-between"}>
                    <Typography
                      fontFamily="Poppins, sans-serif"
                      style={{
                        fontSize: "16px",
                        color: "#EAEAEA",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Monero Wallet Address:{" "}
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      style={{
                        maxWidth: "874px",
                        height: "32px",
                      }}
                      inputProps={{
                        style: {
                          height: "32px",
                          maxWidth: "874px",
                          padding: "0 14px", // Adjust padding as needed
                        },
                      }}
                      size="small"
                      fullWidth
                      label="e.g. 44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A"
                      variant="outlined"
                      onChange={this.emailChange}
                    />
                  </Stack>
                  <Button
                    variant="contained"
                    style={{
                      marginTop: "20px",
                      maxHeight: "40px",
                      maxWidth: "120px",
                      backgroundColor: "#FA6F15",
                    }}
                  >
                    Withdraw
                  </Button>
                </Stack>
                <Box>
                  <img
                    src="/assets/img/Withdraw-Illustration.webp"
                    alt="Description"
                    style={{
                      maxWidth: "325px",
                      maxHeight: "225px",
                    }}
                  />
                </Box>
              </Box>
            </Stack>
          )}
        </Card>
      </Grid>
    </Stack>
  );
};
