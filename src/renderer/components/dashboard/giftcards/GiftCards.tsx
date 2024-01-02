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

export const GiftCards= () => {
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
                Gift Cards
              </Typography>
          </Grid>
          </div>
          </Grid>

            









          </Grid>
  );
};