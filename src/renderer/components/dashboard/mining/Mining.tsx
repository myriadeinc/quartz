import { Card, Grid, Grow, Box, Typography, Button } from "@mui/material";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/system';
import * as React from 'react';
import { Link } from "react-router-dom";
import { Card as BCard } from "react-bootstrap";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { FriendMenu } from "../friends/Friends";
import Chart from "./Chart";

export const Mining = () => {
  return (
    <Grid
      container
      item
      style={{ width: "1473px", marginLeft: "406px" }}
      alignItems={"flex-start"}
      justifyContent={"flex-start"}
    >



            <Grid item sm={4}>
        
        
          
            <div style={{ position: 'relative' }}>
            <Grid>  
          <Typography  fontFamily="Poppins, sans-serif" style={{ 
            fontSize: '28px',
            color: '#EAEAEA',
            marginTop: "25px",
            marginLeft: "20px",
            fontWeight: 400, 
            }}>
                Start Mining
              </Typography>
          </Grid>
  
          <Grow in={true}>
              <Card
                style={{
                  backgroundColor: '#080A0F',
                  backgroundImage: 'none',
                  backgroundSize: 'cover',
                  width: '1473px',
                  height: '152px',
                  padding: '0px',
                  marginLeft: '20px',
                  marginTop: '20px',
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
                  <img
                     src="https://i.ibb.co/TmDbVbK/Referrals-Icon-Start-mining-Page.png"
                     alt="Referral Image"
                     style={{
                      width: '44px',
                      height: '44px',
                      objectFit: 'cover',
                      marginBottom: '10px' // Add some space between the image and the text
                       }}
                       />
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", textAlign: 'center', }}>
                        Refer your friends to Myriade and get them to mine at the same time as you
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
                  <img
                     src="https://i.ibb.co/TBRNg3H/Mining-Allocation-Icon.png"
                     alt="Referral Image"
                     style={{
                      width: '44px',
                      height: '44px',
                      objectFit: 'cover',
                      marginBottom: '10px' // Add some space between the image and the text
                       }}
                       />
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#EAEAEA', width: '220px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", textAlign: 'center', }}>
                        Choose your custom mining allocation below
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
                  <img
                     src="https://i.ibb.co/q1kGQ85/Start-Mining-Icon-smpage.png"
                     alt="Referral Image"
                     style={{
                      width: '44px',
                      height: '44px',
                      objectFit: 'cover',
                      marginBottom: '10px' // Add some space between the image and the text
                       }}
                       />
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", marginBottom: '15px', textAlign: 'center', }}>
                        Press play to start mining
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
                  <img
                     src="https://i.ibb.co/DfvgBCC/Bonus-Icon.png"
                     alt="Referral Image"
                     style={{
                      width: '44px',
                      height: '44px',
                      objectFit: 'cover',
                      marginBottom: '10px' // Add some space between the image and the text
                       }}
                       />
                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", marginBottom: '15px', textAlign: 'center', }}>
                        Earn a bonus at every level
                  </Typography>
                  </div>
              </Card>
              </Grow>







              <div style={{ 
                      flex: 1,  
                      padding: '0px',
                      width: '1473px',
                      display: 'flex', 
                      marginLeft: '20px',
                      marginTop: '32px',
                      flexDirection: 'row', 
                      alignItems: 'flex-start', // Center items horizontally
                      justifyContent: 'flex-start', // Center items vertically
                }}>

              <Grow in={true}>
              <Card
                style={{
                  backgroundColor: '#0F141F',
                  backgroundImage: 'none',
                  backgroundSize: 'cover',
                  width: '975px',
                  height: '496px',
                  padding: '0px',
                  marginLeft: '0px',
                  
                  marginRight: "0px",
                  zIndex: 2,  // Higher zIndex for the second card to be above the first card
                  borderRadius: '7px',
                  display: 'flex',
                  
                }}
              >




<div style={{ position: 'absolute', display: 'inline-block' }}>

<Box sx={{
    width: '208px',
    height: '116px',
    backgroundColor: 'transparent',
    border: '1px solid #293040',
    borderRadius: '7px',
    marginLeft: '20px',
    marginTop: '356px',
  }}>

    <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
          PC Stats                 
 </Typography>
 <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
          Ryzen 7 5700&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;        82°C      
 </Typography>
 <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
          CPU Usage:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;64%                
 </Typography>
  </Box>

</div>

<div style={{ position: 'absolute', display: 'inline-block' }}>

<Box sx={{
    width: '208px',
    height: '92px',
    backgroundColor: 'transparent',
    border: '1px solid #293040',
    borderRadius: '7px',
    marginLeft: '740px',
    marginTop: '268px',
  }}>

    <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
          Current Hashrate                 
 </Typography>
 <Divider sx={{ 
                       
                      bgcolor: '#EAEAEA', 
                      height: 0.01,
                      marginTop: '20px',
                      marginLeft: '20px',
                      marginRight: '175px', // Adjust as needed for spacing between divider and text
                    }} />

  </Box>

</div>

<div style={{ position: 'absolute', display: 'inline-block' }}>

<Box sx={{
    width: '208px',
    height: '92px',
    backgroundColor: 'transparent',
    border: '1px solid #293040',
    borderRadius: '7px',
    marginLeft: '740px',
    marginTop: '380px',
  }}>

<Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
          Highest Hashrate                 
 </Typography>
 <Divider sx={{ 
                       
                      bgcolor: '#EAEAEA', 
                      height: 0.01,
                      marginTop: '20px',
                      marginLeft: '20px',
                      marginRight: '175px', // Adjust as needed for spacing between divider and text
                    }} />

  </Box>

</div>


                
                 <div style={{ position: 'relative', display: 'inline-block' }}>

                  
                 <div style={{ marginLeft: '450px', marginTop: '85px', position: 'absolute', display: 'inline-block', zIndex: 3, }}>
                <IconButton sx={{
                 width: 110, 
                 height: 110,  
                  }}
                >
                  <PlayArrowIcon sx={{
                     width: 150, 
                    height: 150, 
                     color: '#FA6F15', // Icon color
                    backgroundColor: 'transparent', // Button background color
                   }}
        >
                    </PlayArrowIcon> 
                </IconButton>

                <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '20px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "10px", marginLeft: "-80px", marginBottom: '0px', textAlign: 'center', }}>
                        Start Mining
                  </Typography>

                  <Divider sx={{ 
                   marginLeft: '-90px',
                   marginTop: '15px',
                   height: 0.25, 
                   bgcolor: '#293040',
                  }} />


                <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '20px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "15px", marginLeft: "-80px", marginBottom: '0px', textAlign: 'center', }}>
                        694 XP Until Level 34
                  </Typography>

                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "3px", marginLeft: "-80px", marginBottom: '0px', textAlign: 'center', }}>
                        Next bonus: 21MC
                  </Typography>



                  <div style={{ zIndex: 3, }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginTop: '15px',
                  }}>
                    <Divider sx={{ 
                      flexGrow: 0.4, 
                      bgcolor: '#FA6F15', 
                      height: 0.25,
                      marginLeft: '-20px',
                      marginRight: '20px', // Adjust as needed for spacing between divider and text
                    }} />
                    <Typography sx={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '14px', 
                      color: '#8C8C8C', 
                      fontWeight: 400, 
                      textAlign: 'center',
                    }}>
                      1H estimate
                    </Typography>

                    
                  </Box>
                  <Divider sx={{ 
                   marginLeft: '-55px',
                   marginTop: '5px',
                   marginRight: '30px',
                   height: 0.25, 
                   flexGrow: 0, 
                   bgcolor: '#293040',
                  }} />


                    <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    marginTop: '5px',
                  }}>
                    <Divider sx={{ 
                      flexGrow: 0.4, 
                      bgcolor: '#FA6F15', 
                      height: 0.25,
                      marginLeft: '-18px',
                      marginRight: '20px', // Adjust as needed for spacing between divider and text
                    }} />
                    <Typography sx={{ 
                      fontFamily: 'Poppins, sans-serif', 
                      fontSize: '14px', 
                      color: '#8C8C8C', 
                      fontWeight: 400, 
                      textAlign: 'center',
                    }}>
                      24H estimate
                    </Typography>

                    
                  </Box>

                  </div>


                </div>







                 <CircularProgress style={{
                color: '#FA6F15',
                zIndex: 2,
                marginLeft: '0px',
                position: 'absolute',
                left: '300px',
                top: '50px',
                
              }} 
              variant="determinate" value={35} size={400} thickness={0.5} 
              
              />
              <CircularProgress style={{
                color: '#414E66',
                zIndex: 1,
                position: 'absolute',
                left: '300px',
                top: '50px',
              }} 
              variant="determinate" value={100} size={400} thickness={0.5} 
              />
              </div>

   


                </Card>
                </Grow>


                <div style={{ 
                      flex: 1,  
                      padding: '0px',
                      width: '478px',
                      display: 'flex', 
                      marginLeft: '20px',
                      marginTop: '0px',
                      flexDirection: 'column', 
                      alignItems: 'flex-start', // Center items horizontally
                      justifyContent: 'flex-start', // Center items vertically
                }}>
                  <Grow in={true}>
                <Card
                style={{
                  backgroundColor: '#0F141F',
                  backgroundImage: 'none',
                  backgroundSize: 'cover',
                  width: '478px',
                  height: '164px',
                  padding: '0px',
                  marginLeft: '0px',
                  
                  marginRight: "0px",
                  zIndex: 2,  // Higher zIndex for the second card to be above the first card
                  borderRadius: '7px',
                  display: 'flex',
                  
                }}
              >
                                      <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '20px', color: '#EAEAEA', width: '430px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                              Mining Allocation               
                    </Typography>

                    <div style={{ position: 'absolute', display: 'inline-block' }}>

                    <Box sx={{
                        width: '96px',
                        height: '48px',
                        backgroundColor: 'transparent',
                        border: '1px solid #293040',
                        borderRadius: '3px',
                        marginLeft: '20px',
                        marginTop: '70px',
                      }}>

                    <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '96px', fontWeight: 400, marginTop: "12px", marginLeft: "00px", marginBottom: '0px', textAlign: 'center', }}>
                              00                
                    </Typography>
                    
                      </Box>
                      <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '96px', fontWeight: 400, marginTop: "3px", marginLeft: "20px", marginBottom: '0px', textAlign: 'center', }}>
                              Unused Points                
                    </Typography>

                    </div>
                    <div style={{ position: 'absolute', display: 'inline-block' }}>

                    <Box sx={{
                        width: '96px',
                        height: '48px',
                        backgroundColor: 'transparent',
                        border: '1px solid #293040',
                        borderRadius: '3px',
                        marginLeft: '136px',
                        marginTop: '70px',
                      }}>


              <IconButton sx={{
                 width: 20, 
                 height: 20,  
                 marginLeft: '13px',
                 marginTop: '13px',
                 position: 'absolute',
                 transform: 'rotate(180deg)',
                 zIndex: 4,
                  }}
                >
                  <PlayArrowIcon sx={{
                    position: 'absolute',
                     width: 20, 
                    height: 20, 
                     color: '#FFFFFF', // Icon color
                    backgroundColor: 'transparent',
                    zIndex: 4,
                   }}
        >
                    </PlayArrowIcon> 
                </IconButton>


                    <Typography fontFamily="Poppins, sans-serif" style={{ Size: '16px', color: '#EAEAEA', width: '96px', fontWeight: 400, marginTop: "12px", marginLeft: "00px", marginBottom: '0px', textAlign: 'center', }}>
                              50                
                    </Typography>

                    <IconButton sx={{
                 width: 20, 
                 height: 20,  
                 marginLeft: '65px',
                 marginTop: '-23px',
                 position: 'absolute',
                 zIndex: 4,
                 
                  }}
                >
                  <PlayArrowIcon sx={{
                    position: 'absolute',
                     width: 20, 
                    height: 20, 
                     color: '#FFFFFF', // Icon color
                    backgroundColor: 'transparent', // Button background color
                    zIndex: 4,
                   }}
        >
                    </PlayArrowIcon> 
                </IconButton>



                      </Box>
                      <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '96px', fontWeight: 400, marginTop: "3px", marginLeft: "136px", marginBottom: '0px', textAlign: 'center', }}>
                              MC                
                    </Typography>

                    </div>

                    <div style={{ position: 'absolute', display: 'inline-block' }}>

                    <Box sx={{
                        width: '96px',
                        height: '48px',
                        backgroundColor: 'transparent',
                        border: '1px solid #293040',
                        borderRadius: '3px',
                        marginLeft: '252px',
                        marginTop: '70px',
                      }}>


                    <IconButton sx={{
                    width: 20, 
                    height: 20,  
                    marginLeft: '13px',
                    marginTop: '13px',
                    position: 'absolute',
                    transform: 'rotate(180deg)',
                    zIndex: 4,
                    }}
                    >
                    <PlayArrowIcon sx={{
                    position: 'absolute',
                    width: 20, 
                    height: 20, 
                    color: '#FFFFFF', // Icon color
                    backgroundColor: 'transparent', // Button background color
                    zIndex: 4,
                    }}
                    >
                    </PlayArrowIcon> 
                    </IconButton>


                    <Typography fontFamily="Poppins, sans-serif" style={{  Size: '16px', color: '#EAEAEA', width: '96px', fontWeight: 400, marginTop: "12px", marginLeft: "00px", marginBottom: '0px', textAlign: 'center', }}>
                              20                
                    </Typography>

                    <IconButton sx={{
                    width: 20, 
                    height: 20,  
                    marginLeft: '65px',
                    marginTop: '-23px',
                    position: 'absolute',
                    zIndex: 4,

                    }}
                    >
                    <PlayArrowIcon sx={{
                    position: 'absolute',
                    width: 20, 
                    height: 20, 
                    color: '#FFFFFF', // Icon color
                    backgroundColor: 'transparent', // Button background color
                    zIndex: 4,
                    }}
                    >
                    </PlayArrowIcon> 
                    </IconButton>



                      </Box>
                      <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '96px', fontWeight: 400, marginTop: "3px", marginLeft: "252px", marginBottom: '0px', textAlign: 'center', }}>
                              Gift Card                
                    </Typography>

                    </div>

                    <div style={{ position: 'absolute', display: 'inline-block' }}>

                      <Box sx={{
                          width: '96px',
                          height: '48px',
                          backgroundColor: 'transparent',
                          border: '1px solid #293040',
                          borderRadius: '3px',
                          marginLeft: '368px',
                          marginTop: '70px',
                        }}>


                      <IconButton sx={{
                      width: 20, 
                      height: 20,  
                      marginLeft: '13px',
                      marginTop: '13px',
                      position: 'absolute',
                      transform: 'rotate(180deg)'
                      }}
                      >
                      <PlayArrowIcon sx={{
                      position: 'absolute',
                      width: 20, 
                      height: 20, 
                      color: '#FFFFFF', // Icon color
                      backgroundColor: 'transparent', // Button background color
                      }}
                      >
                      </PlayArrowIcon> 
                      </IconButton>


                      <Typography fontFamily="Poppins, sans-serif" style={{  Size: '16px', color: '#EAEAEA', width: '96px', fontWeight: 400, marginTop: "12px", marginLeft: "00px", marginBottom: '0px', textAlign: 'center', }}>
                                10                
                      </Typography>

                      <IconButton sx={{
                      width: 20, 
                      height: 20,  
                      marginLeft: '65px',
                      marginTop: '-23px',
                      position: 'absolute',

                      }}
                      >
                      <PlayArrowIcon sx={{
                      position: 'absolute',
                      width: 20, 
                      height: 20, 
                      color: '#FFFFFF', // Icon color
                      backgroundColor: 'transparent', // Button background color
                      }}
                      >
                      </PlayArrowIcon> 
                      </IconButton>



                        </Box>
                        <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '96px', fontWeight: 400, marginTop: "3px", marginLeft: "368px", marginBottom: '0px', textAlign: 'center', }}>
                                XMR               
                      </Typography>

                      </div>


                </Card>
                </Grow>

                <Grow in={true}>
                <Card
                style={{
                  backgroundColor: '#0F141F',
                  backgroundImage: 'none',
                  backgroundSize: 'cover',
                  width: '478px',
                  height: '312px',
                  padding: '0px',
                  marginLeft: '0px',
                  marginTop: '20px',
                  marginRight: "0px",
                  zIndex: 2,  // Higher zIndex for the second card to be above the first card
                  borderRadius: '7px',
                  display: 'flex',
                  
                }}
              >

                <Typography fontFamily="Poppins, sans-serif" style={{ position: 'absolute', fontSize: '20px', color: '#EAEAEA', width: '430px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                              Plan Your Mining              
                    </Typography>
                    <img 
              src="https://i.ibb.co/HtvWS21/Illustration.png"
              alt="Plan your Mining Image"
              style={{
                position: 'absolute',
                width: '208px',
                height: '144px',
                marginLeft: '150px',
                marginRight: '0px',
                marginTop: '80px',
                zIndex: 3,  // Higher zIndex for the image to be above the second card
              }}
            />

               <Button sx={{
                position: 'absolute',
                width: '120px',
                height: '40px',
                backgroundColor: 'transparent',
                marginLeft: '338px',
                marginTop: '252px',
                border: '2px solid #FA6F15',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '4px',
              }}>
                <Typography fontFamily="Poppins, sans-serif" style={{  fontSize: '15px', color: '#EAEAEA', fontWeight: 600, alignItems: 'center', textTransform: 'none',}}>
                  Plan Mining
                </Typography>
              </Button>



                </Card>
                </Grow>



                </div>
                </div>

                <Grow in={true}>
                <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '20px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: '30px', marginBottom: "35px", marginLeft: "20px", textAlign: '', }}>
                        Average Hashrate
                  </Typography>
                  </Grow>
                  
                <div style={{ 
                      flex: 1,  
                      padding: '0px',
                      width: '1470px',
                      height: '450px',
                      display: 'flex', 
                      marginLeft: '20px',
                      marginTop: '0px',
                      flexDirection: 'row', 
                      alignItems: 'flex-start', // Center items horizontally
                      justifyContent: 'flex-start', // Center items vertically
                }}>
                   <Grow in={true}>
              <Card
                style={{
                  backgroundColor: '#0F141F',
                  backgroundImage: 'none',
                  backgroundSize: 'cover',
                  width: '975px',
                  height: '424px',
                  padding: '0px',
                  marginLeft: '0px',
                  marginTop: '20px',
                  marginRight: "0px",
                  zIndex: 2,  // Higher zIndex for the second card to be above the first card
                  borderRadius: '7px',
                  display: 'flex',
                  
                }}
              >





              <img // DELETE THIS. FOr Demo purposes only
              src="https://i.ibb.co/41kDKBX/Historical-Metrics-3-Month-Card.png"
              alt="Your Image Alt Text"
              style={{
                width: '1000px',
                height: '400px',
                objectFit: 'cover',
                position: 'absolute',
                top: "890px",
                left: "0px",
                zIndex: 3,  // Higher zIndex for the image to be above the second card
              }}
            />




                </Card>
                </Grow>
               
           



                <div style={{ 
                      flex: 1,  
                      padding: '0px',
                      width: '1470px',
                      height: '450px',
                      display: 'flex', 
                      marginLeft: '20px',
                      marginTop: '0px',
                      flexDirection: 'column', 
                      alignItems: 'flex-start', // Center items horizontally
                      justifyContent: 'flex-start', // Center items vertically
                }}>
                  <Grow in={true}>
                <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '20px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: '-60px', marginBottom: "35px", marginLeft: "20px", textAlign: '', }}>
                        Mining Stats
                  </Typography>
                  </Grow>

                  <Grow in={true}>
                <Card
                style={{
                  backgroundColor: '#0F141F',
                  backgroundImage: 'none',
                  backgroundSize: 'cover',
                  width: '478px',
                  height: '432px',
                  padding: '0px',
                  marginLeft: '20px',
                  marginRight: "0px",
                  zIndex: 2,  // Higher zIndex for the second card to be above the first card
                  borderRadius: '7px',
                  display: 'flex',
                  
                }}
              >


                <div style={{ position: 'absolute', display: 'inline-block' }}>

                <Box sx={{
                    width: '208px',
                    height: '92px',
                    backgroundColor: 'transparent',
                    border: '1px solid #293040',
                    borderRadius: '7px',
                    marginLeft: '20px',
                    marginTop: '20px',
                  }}>

                    <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                          Current Hashrate                 
                </Typography>
                <Divider sx={{ 
                                      
                                      bgcolor: '#EAEAEA', 
                                      height: 0.001,
                                      marginTop: '20px',
                                      marginLeft: '20px',
                                      marginRight: '175px', // Adjust as needed for spacing between divider and text
                                    }} />

                  </Box>

                  

                </div>

                <div style={{ position: 'absolute', display: 'inline-block' }}>

                <Box sx={{
                  width: '208px',
                  height: '92px',
                  backgroundColor: 'transparent',
                  border: '1px solid #293040',
                  borderRadius: '7px',
                  marginLeft: '248px',
                  marginTop: '20px',
                }}>

                  <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                        Total Mining Time                
              </Typography>

              <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "5px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                        11:22:51:33                 
              </Typography>
              

                </Box>

                

              </div>

              <div style={{ position: 'absolute', display: 'inline-block' }}>

              <Box sx={{
                  width: '208px',
                  height: '92px',
                  backgroundColor: 'transparent',
                  border: '1px solid #293040',
                  borderRadius: '7px',
                  marginLeft: '20px',
                  marginTop: '132px',
                }}>

            <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                      Mining Bonus from Friends                
              </Typography>

              <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "5px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                      0.8%              
              </Typography>

                </Box>

                

              </div>

              <div style={{ position: 'absolute', display: 'inline-block' }}>

              <Box sx={{
                width: '208px',
                height: '92px',
                backgroundColor: 'transparent',
                border: '1px solid #293040',
                borderRadius: '7px',
                marginLeft: '248px',
                marginTop: '132px',
              }}>

                <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                      MC Earned from Refferals                 
              </Typography>

              <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "5px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                      923,415MC                
              </Typography>


              </Box>



              </div>

              <div style={{ position: 'absolute', display: 'inline-block' }}>

            <Box sx={{
                width: '208px',
                height: '92px',
                backgroundColor: 'transparent',
                border: '1px solid #293040',
                borderRadius: '7px',
                marginLeft: '20px',
                marginTop: '244px',
              }}>

            <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                    Total MC Earned              
            </Typography>

            <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "5px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                    473,581MC              
            </Typography>

              </Box>

              

            </div>

            <div style={{ position: 'absolute', display: 'inline-block' }}>

            <Box sx={{
              width: '208px',
              height: '92px',
              backgroundColor: 'transparent',
              border: '1px solid #293040',
              borderRadius: '7px',
              marginLeft: '248px',
              marginTop: '244px',
            }}>

              <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '14px', color: '#8C8C8C', width: '270px', fontWeight: 400, marginTop: "20px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                    Accepted Shares (XP)                
            </Typography>

            <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#EAEAEA', width: '270px', fontWeight: 400, marginTop: "5px", marginLeft: "20px", marginBottom: '0px', textAlign: 'left', }}>
                    3,023,414,823                
            </Typography>


            </Box>



            </div>

<Button sx={{
                position: 'absolute',
                width: '120px',
                height: '40px',
                backgroundColor: 'transparent',
                marginLeft: '20px',
                marginTop: '372px',
                border: '2px solid #FA6F15',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '4px',
              }}>
                <Typography fontFamily="Poppins, sans-serif" style={{  fontSize: '15px', color: '#EAEAEA', fontWeight: 600, alignItems: 'center', textTransform: 'none',}}>
                  Pool Stats
                </Typography>
              </Button>
                </Card>
                </Grow>
                </div>
                </div>
                





             
            </div>
            
          
        </Grid>


    </Grid>
  );
};
