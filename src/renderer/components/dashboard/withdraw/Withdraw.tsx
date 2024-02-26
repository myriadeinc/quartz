import {
  Button,
  Card,
  Checkbox,
  FormControlLabel,
  Grid,
  Grow,
  TextField,
  Typography,
} from "@mui/material";
import InputAdornment from '@mui/material/InputAdornment';
import Box from '@mui/material/Box';
import { useState } from "react";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { MinerConsumer } from "renderer/pages/Dashboard";
import { EnhancedTable } from "../gameroom/HistoryTable";
export const Withdraw = () => {
  const [withdrawing, setWithdrawing] = useState(false);
  const [address, setAddress] = useState("");
  

  return (
    <Grid
      container
      item
      style={{
        width: "1473px", 
        marginLeft: "406px",
        padding: "16px",
      }}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
    >

        <Grid>  
        <Typography  fontFamily="Poppins, sans-serif" style={{ 
          fontSize: '28px',
          color: '#EAEAEA',
          marginTop: "24px",
          marginLeft: "20px",
          fontWeight: 400, 
          }}>
              Withdraw
            </Typography>
        </Grid>

                <Grow in={true}>
              <Card
                style={{
                  backgroundColor: '#080A0F',
                  backgroundImage: 'none',
                  backgroundSize: 'cover',
                  width: '1473px',
                  height: '108px',
                  padding: '0px',
                  marginLeft: '20px',
                  marginTop: '30px',
                  marginRight: "10px",
                  zIndex: 2,  // Higher zIndex for the second card to be above the first card
                  borderRadius: '0 0 7px 7px',
                  border: '1px solid rgba(234, 234, 234, 0.2)',
                  display: 'flex',
                  
                }}
              >

                  <div style={{ 
                      flex: 1, 
                      borderRight: '1px solid rgba(234, 234, 234, 0.2)', 
                      padding: '10px',
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', // Center items horizontally
                      justifyContent: 'center', // Center items vertically
                }}>
                  <MinerConsumer>
                  {(miner) => (
                  
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '18px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", textAlign: 'center', }}>
                       {miner.xmrBalance} XMR
                  </Typography>
                  )}
                  </MinerConsumer>
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", textAlign: 'center', }}>
                        Your Monero Balance
                  </Typography>
                  
                  </div>

                  <div style={{ 
                      flex: 1, 
                      borderRight: '1px solid rgba(234, 234, 234, 0.2)', 
                      padding: '10px',
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', // Center items horizontally
                      justifyContent: 'center', // Center items vertically
                }}>
                                    <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '18px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", textAlign: 'center', }}>
                        0.001 XMR
                  </Typography>
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#EAEAEA', width: '220px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", textAlign: 'center', }}>
                        Minimum Withdrawal Amount
                  </Typography>
                  </div>



                  <div style={{ 
                      flex: 1, 
                      borderRight: '1px solid rgba(234, 234, 234, 0.2)', 
                      padding: '10px',
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', // Center items horizontally
                      justifyContent: 'center', // Center items vertically
                }}>
                                    <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '18px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", textAlign: 'center', }}>
                        0 XMR
                  </Typography>
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", marginBottom: '15px', textAlign: 'center', }}>
                        Withdrawal Fee
                  </Typography>
                  </div>
              </Card>
              </Grow>

              <Grid item sm={12}>
              <Box sx={{
          width: '128px', // width of the circle container
          height: '128px', // height of the circle container
          backgroundColor: '#141A29', // circle container color
          borderRadius: '50%', // makes the box a circle
          marginLeft: '20px',
          marginTop: '32px',
          display: 'flex', // use flex to center the content inside the Box
          flexDirection: 'column', // stack children vertically
          justifyContent: 'center', // center vertically
          alignItems: 'center', // center horizontally
          padding: '8px', // Add some padding around the content
      }}>
         <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

         
      <img 
          src="https://i.ibb.co/nfBZy8x/Monero.png" // replace with your image URL
          alt="Your Description"
          style={{
            width: '44px', // width of the image
            height: '44px', // height of the image
            marginTop: '5-px',
          }}/>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA',  fontWeight: 400, marginTop: "10px", textAlign: 'center', }}>
                        Monero
                  </Typography>
                  </div>
    </Box>
              </Grid>



      <Grid item sm={12}>
        <Card
          elevation={0}
          style={{ width: '1472px',height: '320px', marginTop: "32px", backgroundColor: '#0F141F', borderRadius: '7px'  }}
        >
          
          {withdrawing ? (
  <div>
    <Typography variant="h6">XMR Amount</Typography>
  </div>
) : (
  <div style={{ display: 'flex' }}> {/* Parent container to align content and image */}
    <div style={{ flex: 1 }}> {/* Container for existing content to ensure it takes available space */}
      <Typography fontFamily="Poppins, sans-serif" style={{fontSize: '20px', marginLeft: '20px', marginTop: '20px', color: '#EAEAEA'}} variant="h6">Withdraw your Monero</Typography>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '40px' }}>
        <Typography fontFamily="Poppins, sans-serif" style={{fontSize: '16px', marginLeft: '100px', marginRight: '5px', color: '#EAEAEA'}}>XMR Amount: </Typography>
        <TextField id="outlined-basic"
          style={{
            width: '220px',
            height: '32px',
          }}
          inputProps={{
            style: {
              height: '32px',
              padding: '0 14px', // Adjust padding as needed
            },
          }}
          size="small"
          fullWidth
          variant="outlined"
          onChange={this.emailChange}
          InputProps={{
            endAdornment: <InputAdornment position="end">XMR</InputAdornment>,
            type: 'number', 
          }}
        />
      </div>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <Typography fontFamily="Poppins, sans-serif" style={{fontSize: '16px', marginLeft: '27px', marginRight: '5px', color: '#EAEAEA'}}>Monero Wallet Address: </Typography>
        <TextField id="outlined-basic"
          style={{
            width: '874px',
            height: '32px',
          }}
          inputProps={{
            style: {
              height: '32px',
              width: '874px',
              padding: '0 14px', // Adjust padding as needed
            },
          }}
          size="small"
          fullWidth
          label="e.g. 44AFFq5kSiGBoZ4NMDwYtN18obc8AemS33DBLWs3H7otXft3XjrpDtQGv7SqSsaBYBb98uNbr2VBBEt7f2wfn3RVGQBEP3A"
          variant="outlined"
          onChange={this.emailChange}
        />
      </div>
      
      {/* Other elements */}

      <Button variant="contained" style={{
        marginLeft: '205px',
        marginTop: '20px',
        height: '40px',
        width: '120px',
        backgroundColor: '#FA6F15'
      }}>Withdraw</Button>
    </div>
    
    {/* Image container */}
    <div>
      <img src="https://i.ibb.co/ynzQqZG/Withdraw-Illustration.png" alt="Description" style={{ width: '325px', height: '225px', marginTop: '48px', marginRight: '45px' }} />
    </div>
  </div>
)}

        </Card>
      </Grid>

      {/*
      <Grid item sm={12}>
        <EnhancedTable
          data={[
            {
              title: "Temp",
              amount: 3,
              purchased: 3,
              status: 0,
              tickets: 234,
              winner: "2342",
            },
          ]}
        />
      </Grid>
      */}
    </Grid>
  );
};
