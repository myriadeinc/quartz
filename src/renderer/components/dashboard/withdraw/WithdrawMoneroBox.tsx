import { Grid, Card, Box, TextField, Checkbox } from "@mui/material";
import Stack from "@mui/material/Stack";
import React from "react";
import PrimaryButton from "renderer/components/atoms/Login/PrimaryButtons";
import Typography from "renderer/components/atoms/TextStyles";

type WithdrawMoneroBoxProps = {
  withdrawing: boolean;
  //   setEmailChange: React.Dispatch<React.SetStateAction<string>>;
};

export const WithdrawMoneroBox = ({
  withdrawing,
}: //   setEmailChange,
WithdrawMoneroBoxProps) => {
  return (
    <Grid>
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
                  <Typography variant="body" color="#EAEAEA">
                    XMR Amount:{" "}
                  </Typography>
                  <Typography variant="body" color="#EAEAEA">
                    Monero Wallet Address:{" "}
                  </Typography>
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
                      variant="standard"
                      id="outlined-basic"
                      InputProps={{
                        disableUnderline: true,
                      }}
                      style={{
                        maxWidth: "360px",
                        minHeight: "32px",
                        fontSize: "14px",
                      }}
                      inputProps={{
                        style: {
                          padding: 5,
                        },
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
                      // onChange={onEmailChange}
                    />
                    <TextField
                      variant="standard"
                      id="outlined-basic"
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
                      //   onChange={onEmailChange}
                    />
                    <Box
                      sx={{ display: "flex", gap: "9px", alignItems: "center" }}
                    >
                      <Checkbox
                        style={{
                          color: "#FA6F15",
                        }}
                        value="cryon"
                      />
                      <Typography color="#8C8C8C" variant="bodySmall">
                        Use my default wallet address
                      </Typography>
                    </Box>
                    <Box sx={{ alignSelf: "start" }}>
                      <PrimaryButton text="WithDraw" />
                    </Box>
                  </Box>
                </Stack>
              </Stack>
              <Box
                sx={{ maxWidth: "340px", height: "auto", marginTop: "20px" }}
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
    </Grid>
  );
};
