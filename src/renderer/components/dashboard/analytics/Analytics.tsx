import { Card, Grid, Grow, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { Card as BCard } from "react-bootstrap";
import { MinerConsumer } from "renderer/pages/Dashboard";
import { FriendMenu } from "../friends/Friends";
import Chart from "./Chart";




export const Analytics = () => {
  return (
    <MinerConsumer>
      {(miner) => (
        <Grid
          container
          item
          style={{ width: "1473px", marginLeft: "406px" }}
          alignItems={"center"}
          justifyContent={"center"}
        >
       <Grid container spacing={2}>
        



      <Grid item sm={4}>
        
      <Link to={""} style={{ textDecoration: 'none', cursor: 'pointer',  }} >
      <Grid>  
        <Typography  fontFamily="Poppins, sans-serif" style={{ 
          fontSize: '28px',
          color: '#EAEAEA',
          marginTop: "25px",
          marginLeft: "20px",
          fontWeight: 400, 
          }}>
              Dashboard
            </Typography>
        </Grid>
        <Grow in={true}>
          <div style={{ position: 'relative' }}>


        
            <Card
              style={{
                backgroundColor: '#0F141F',
                backgroundImage: 'none',
                backgroundSize: 'cover',
                width: '478px',
                height: '288px',
                padding: '0px',
                marginLeft: '20px',
                marginTop: '20px',
                marginRight: "10px",
                zIndex: 2,  // Higher zIndex for the second card to be above the first card
                borderRadius: '7px',
                
              }}
            >
            <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#8C8C8C', fontWeight: 400, marginTop: "20px", marginLeft: "20px", }}>
              Average Hashrate (1hr)
            </Typography>
            <Typography  fontFamily="Poppins, sans-serif" style={{ fontSize: '20px', color: '#EAEAEA', fontWeight: 500, marginLeft: "20px", }}>
              {miner.avgHashrate} H/sec
            </Typography>
            </Card>
            
            <img
              src="https://i.ibb.co/h8qPJZ5/DM.png"
              alt="Your Image Alt Text"
              style={{
                width: '218px',
                height: '220px',
                objectFit: 'cover',
                position: 'absolute',
                top: "60px",
                left: "250px",
                zIndex: 3,  // Higher zIndex for the image to be above the second card
              }}
            />
          </div>
        </Grow>
        </Link>
      </Grid>

      <Grid item sm={4}>
      <Link to={} style={{ textDecoration: 'none', cursor: 'pointer',  }} >
        <Grow in={true}>
          <div style={{ position: 'relative' }}>
            <Card
              style={{
                backgroundColor: '#0F141F',
                backgroundImage: 'none',
                backgroundSize: 'cover',
                width: '478px',
                height: '288px',
                padding: '0px',
                marginLeft: '20px',
                marginTop: '86px',
                zIndex: 2,  // Higher zIndex for the second card to be above the first card
                borderRadius: '7px',
              }}
            >
            <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#8C8C8C', fontWeight: 400, marginTop: "20px", marginLeft: "20px", }}>
              Pool Hashrate
            </Typography>
            <Typography  fontFamily="Poppins, sans-serif" style={{ fontSize: '20px', color: '#EAEAEA', fontWeight: 500, marginLeft: "20px", }}>
              2039570 H/sec
            </Typography>
            </Card>
            <img
              src="https://i.ibb.co/nkWHgp7/DM2.png"
              alt="Your Image Alt Text"
              style={{
                width: '340px',
                height: '213px',
                objectFit: 'cover',
                position: 'absolute',
                top: "50px",
                left: "120px",
                zIndex: 3,  // Higher zIndex for the image to be above the second card
              }}
            />
          </div>
        </Grow>
        </Link>
      </Grid>


      <Grid item sm={4}>
      <Link to={} style={{ textDecoration: 'none', cursor: 'pointer',  }} >
        <Grow in={true}>
          <div style={{ position: 'relative' }}>
            <Card
              style={{
                backgroundColor: '#0F141F',
                backgroundImage: 'none',
                backgroundSize: 'cover',
                width: '478px',
                height: '288px',
                padding: '0px',
                marginLeft: '20px',
                marginTop: '86px',
                zIndex: 2,  // Higher zIndex for the second card to be above the first card
                borderRadius: '7px',
              }}
            >
            <Typography fontFamily="Poppins, sans-serif" style={{ fontSize: '16px', color: '#8C8C8C', fontWeight: 400, marginTop: "20px", marginLeft: "20px", }}>
              Referrer Bonus
            </Typography>
            <Typography  fontFamily="Poppins, sans-serif" style={{ fontSize: '20px', color: '#EAEAEA', fontWeight: 500, marginLeft: "20px", }}>
              68531 MC
            </Typography>
            </Card>
            <img
              src="https://i.ibb.co/TTbBTKc/DM3.png"
              alt="Your Image Alt Text"
              style={{
                width: '292px',
                height: '227px',
                objectFit: 'cover',
                position: 'absolute',
                top: "30px",
                left: "160px",
                zIndex: 3,  // Higher zIndex for the image to be above the second card
              }}
            />
          </div>
        </Grow>
        </Link>
      </Grid>




    </Grid>

          <Grid item sm={4} style={{ height: "600px", padding: "0px", paddingLeft: "0px", marginLeft:"-65px" }}>
            
            <Grow in={true}>
              <BCard
                className={"mt-5 mb-5"}
                style={{
                  color: "white",
                  height: "55vh",
                  width: "100%",
                  backgroundColor: "#080A0F",
                }}
              >
                
                
                <BCard.Header>
                  <Typography fontFamily="Poppins, sans-serif" style={{ paddingTop: "26px", color: "#EAEAEA", fontSize: "20px", fontWeight: "500px" }}>
                    Historical Metrics
                  </Typography>
                  <Typography
                    variant="body1"
                    fontFamily="Poppins, sans-serif"
                    style={{ paddingBottom: "60px", color: "#8C8C8C", fontSize: "14px", fontWeight: "600px", marginTop: "5px"  }}
                  >
                    See how your hashrate changes over time.
                  </Typography>
                </BCard.Header>
                <BCard.Body style={{ height: "50px" }}>



                  
                <img // DELETE THIS. FOr Demo purposes only
              src="https://i.ibb.co/41kDKBX/Historical-Metrics-3-Month-Card.png"
              alt="Your Image Alt Text"
              style={{
                width: '1000px',
                height: '400px',
                objectFit: 'cover',
                position: 'absolute',
                top: "550px",
                left: "420px",
                zIndex: 3,  // Higher zIndex for the image to be above the second card
              }}
            />








                  <Chart>
                  <img // DELETE THIS. FOr Demo purposes only
              src="https://i.ibb.co/41kDKBX/Historical-Metrics-3-Month-Card.png"
              alt="Your Image Alt Text"
              style={{
                width: '1000px',
                height: '400px',
                objectFit: 'cover',
                position: 'absolute',
                top: "0px",
                left: "0px",
                zIndex: 3,  // Higher zIndex for the image to be above the second card
              }}
            />

                  </Chart>
                  
                  
                  
                </BCard.Body>
              </BCard>
            </Grow>
            
          </Grid>
          <Grid item sm={3} style={{ height: "600px", padding: "0px", marginLeft: "505px" }}>
            <Grow in={true}>
              <div style={{ height: "580px", width: "478px" }}>
                <FriendMenu />
              </div>
            </Grow>
          </Grid>
        </Grid>
      )}
    </MinerConsumer>
  );
};
