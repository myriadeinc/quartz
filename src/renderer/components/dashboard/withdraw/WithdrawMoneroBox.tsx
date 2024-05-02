import { Grid, Card, Box, TextField, Checkbox, Snackbar } from "@mui/material";
import Stack from "@mui/material/Stack";
import React, { useState } from "react";
import PrimaryButton from "renderer/components/atoms/Login/PrimaryButtons";
import Typography from "renderer/components/atoms/TextStyles";
import FormControl from "@mui/material/FormControl";
import { MinerConsumer } from "renderer/pages/Dashboard";
import emailjs from "@emailjs/browser";

type WithdrawMoneroBoxProps = {
  withdrawing: boolean;
  //   setEmailChange: React.Dispatch<React.SetStateAction<string>>;
};
const defaultAddress =
  "44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A";
const validateAddress = (address: string) => {
  return /[48][0-9AB][123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz]{93}/gm.test(
    address
  );
};
export const WithdrawMoneroBox = ({
  withdrawing,
}: //   setEmailChange,
WithdrawMoneroBoxProps) => {
  emailjs.init({
    publicKey: "YOUR_PUBLIC_KEY",
  });
  const [withDrawFormState, setWithDrawState] = useState({
    walletAddress: defaultAddress,
    amount: 0,
    addressCheckbox: false,
  });
  const [errorMessage, setErrorMessage] = useState<null | string>(null);
  const [minerDetails, setMinerDetails] = useState({
    minerName: "",
    minerEmail: "",
    minerId: 0,
    uuid: 0,
    minerAmountBalance: 0,
  });

  const handlerWithdraw = (e) => {
    setWithDrawState({ ...withDrawFormState, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e, miner) => {
    setMinerDetails({
      minerName: miner.name,
      minerEmail: miner.email,
      minerId: miner.shortId,
      minerAmountBalance: miner.mcBalance,
      uuid: miner.id,
    });
    e.preventDefault();
    if (minerDetails.minerAmountBalance >= 0.01) {
      console.log("inside minerdetails.minerAmountBalance");
      if (validateAddress(withDrawFormState.walletAddress)) {
        emailjs
          .send(
            "myriade",
            "myriade_checkout",
            minerDetails,
            "user_mW0DdzT5qaDfThP4Nyd3E"
          )
          .then(
            (result) => {
              console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      } else {
        setErrorMessage("incorrect wallet address. please check it.");
      }
    } else {
      setErrorMessage(
        "Hmm it seems like you do not have enough Monero (XMR) in your account for a withdrawal. The minimum amount for a withdrawal is 0.001 XMR. If this is an error, please contact support. Please note: you can not withdraw MC."
      );
    }
  };
  return (
    <MinerConsumer>
      {(miner) => {
        return (
          <Grid>
            <form onSubmit={(e) => handleSubmit(e, miner)}>
              <Card
                elevation={0}
                style={{
                  backgroundColor: "#0F141F",
                  borderRadius: "7px",
                }}
              >
                {withdrawing ? (
                  <div>
                    <Typography variant="heading6" color="#EAEAEA">
                      XMR Amount
                    </Typography>
                  </div>
                ) : (
                  <Stack padding={"22px"} gap={"1rem"}>
                    <Box>
                      <Typography variant="heading4" color="#EAEAEA">
                        Withdraw your Monero
                      </Typography>
                    </Box>
                    <Box
                      display={"grid"}
                      gridTemplateColumns={{
                        sm: "1fr",
                        md: "1fr",
                        lg: "3fr 1fr",
                        xl: "3fr 1fr",
                      }}
                    >
                      <Stack gap={"1rem"} direction={"row"}>
                        <Stack
                          direction={"column"}
                          alignItems="flex-end"
                          gap="1rem"
                          sx={{ whiteSpace: "nowrap" }}
                        >
                          {errorMessage && (
                            <Snackbar
                              anchorOrigin={{
                                vertical: "top",
                                horizontal: "right",
                              }}
                              color="#FFFFFF"
                              open={!!errorMessage}
                              onClose={() => setErrorMessage(null)}
                              message={errorMessage}
                              autoHideDuration={3000}
                            />
                          )}
                          <Typography variant="body" color="#EAEAEA">
                            XMR Amount:{" "}
                          </Typography>
                          <Box sx={{ marginTop: "16px" }}>
                            <Typography variant="body" color="#EAEAEA">
                              Monero Wallet Address:{" "}
                            </Typography>
                          </Box>
                        </Stack>
                        <Stack
                          direction={"column"}
                          alignItems="baseline"
                          gap="1rem"
                          sx={{ width: "80%" }}
                        >
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              width: "100%",
                            }}
                          >
                            <TextField
                              name="amount"
                              variant="standard"
                              id="outlined-basic"
                              type="number"
                              InputProps={{
                                disableUnderline: true,
                              }}
                              style={{
                                maxWidth: "360px",
                                minHeight: "32px",
                                fontSize: "14px",
                                marginBottom: "16px",
                              }}
                              inputProps={{
                                style: {
                                  padding: 5,
                                },
                                min: 0,
                              }}
                              size="small"
                              fullWidth
                              placeholder="XMR"
                              sx={{
                                border: "1px solid #414E66",
                                borderRadius: "3px",
                                "& input:focus": {
                                  borderBottom: "2px solid #FA6F15",
                                  outline: "none",
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      border: "none",
                                    },
                                    "&.Mui-focused fieldset": {
                                      border: "none",
                                    },
                                    "&:hover fieldset": {
                                      border: "none",
                                    },
                                  },
                                },
                                "&:focus": {
                                  outline: "none",
                                  border: "0",
                                },
                              }}
                              onChange={handlerWithdraw}
                            />
                            <TextField
                              variant="standard"
                              id="outlined-basic"
                              name="walletAddress"
                              InputProps={{
                                disableUnderline: true,
                              }}
                              style={{
                                width: "100%",
                                maxHeight: "32px",
                                fontSize: "14px",
                              }}
                              inputProps={{
                                style: {
                                  padding: 5,
                                },
                              }}
                              size="small"
                              fullWidth
                              placeholder="e.g. 44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A"
                              sx={{
                                border: "1px solid #414E66",
                                borderRadius: "3px",
                                "& input:focus": {
                                  borderBottom: "2px solid #FA6F15",
                                  outline: "none",
                                  "& .MuiOutlinedInput-root": {
                                    "& fieldset": {
                                      border: "none",
                                    },
                                    "&.Mui-focused fieldset": {
                                      border: "none",
                                    },
                                    "&:hover fieldset": {
                                      border: "none",
                                    },
                                  },
                                },
                                "&:focus": {
                                  outline: "none",
                                  border: "0",
                                },
                              }}
                              onChange={handlerWithdraw}
                            />
                            <Box
                              sx={{
                                display: "flex",
                                gap: "2px",
                                alignItems: "center",
                                position: "relative",
                                left: "-6px",
                              }}
                            >
                              <Checkbox
                                style={{
                                  color: "#FA6F15",
                                  width: "32px",
                                  height: "32px",
                                }}
                                name="addressCheckbox"
                                value="cryon"
                                onChange={handlerWithdraw}
                              />
                              <Typography color="#8C8C8C" variant="bodySmall">
                                Use my default wallet address
                              </Typography>
                            </Box>
                            <Box sx={{ alignSelf: "start" }}>
                              <PrimaryButton text="WithDraw" type="submit" />
                            </Box>
                          </Box>
                        </Stack>
                      </Stack>
                      <Box
                        sx={{
                          maxWidth: "340px",
                          height: "auto",
                          marginTop: "20px",
                        }}
                      >
                        <img
                          src="/assets/Illustrations/Withdraw-Illustration.webp"
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
            </form>
          </Grid>
        );
      }}
    </MinerConsumer>
  );
};
