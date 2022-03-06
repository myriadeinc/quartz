import React from "react";
import { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

import { Redirect, Link } from "react-router-dom";

import * as ROUTES from "../utils/routes";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";

import logo from "../../assets/login/logo.svg";

class SignUpPage extends Component<any, any> {
  vantaRef: any;
  vantaEffect: any;
  constructor(props: any) {
    super(props);
    this.state = {
      loggin_in: false,
      error: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      color: 0x50f,
      waveSpeed: 0.45,
      mouseControls: false,
      
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  handleLogin(e: any) {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    this.setState({ logging_in: true });
    return this.props.login(email, password).catch((err: any) => {
      this.setState({ loggin_in: false, error: true });
    });
  }

  render() {
    let tfStyle = {
      marginBottom: "16px",
    };

    if (this.props.authenticated) {
      return <Redirect to={ROUTES.DASHBOARD} />;
    } else {
      return (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          ref={this.vantaRef}
          style={{ height: "100vh", width: "100vw" }}
        >

          <Grid>
          <a>
              <img src={logo} height="35" style={{marginBottom: "85vh", marginLeft: "20vw"}} />
            </a>
            </Grid>


          <Grid item sm={2}>
            <Paper elevation={3} style={{ padding: "16px", width: "25vw", height: "29vh", marginLeft: "-20vw", backgroundColor: "#222428", }}>
            <Typography style={{fontSize: "1.1vw", marginLeft: "6vw", color: "#6A6C70", marginTop: "-1vh", fontWeight: 600}} >
                WELCOME TO MYRIADE!
              </Typography>
              <Typography style={{fontSize: "1.5vw", marginLeft: "10vw"}} variant="h5">
                Sign Up
              </Typography>
              <TextField
                style={{marginTop: "3vh"}}
                fullWidth
                label="Email"
                variant="standard"
              />
              <Button
                fullWidth
                style={{ marginTop: "3vh", width: "10vw", marginLeft: "8vw", color: "#FFFFFF", fontSize: "1vw", backgroundColor: "#1F28FF" }}
                variant="contained"
              >
                Sign Up
              </Button>
              <Typography variant="body1" style={{fontSize: "1vw", marginBottom: "1vh", marginTop: "3.2vh"}}>
                Already have an account? Log in{" "}
                <Link to={ROUTES.LOGIN} style={{color: "#5CE2FF", fontSize: "1vw"}}>here</Link>
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
}

export default SignUpPage;
