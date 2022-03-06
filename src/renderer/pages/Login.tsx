import React from "react";
import { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

import { Redirect, Link } from "react-router-dom";

import * as ROUTES from "../utils/routes";
import { Grid, Paper, TextField, Typography, Button } from "@mui/material";

import logo from "../../assets/login/logo.svg";

class LoginPage extends Component<any, any> {
  vantaRef: any;
  vantaEffect: any;
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.dismissError = this.dismissError.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.vantaRef = React.createRef();
  }

  componentDidMount() {
    this.vantaEffect = WAVES({
      el: this.vantaRef.current,
      color: 0x50f,
      waveSpeed: 0.45,
      mouseControls: false,
      waveHeight: 19.00
    });
  }

  componentWillUnmount() {
    if (this.vantaEffect) this.vantaEffect.destroy();
  }

  emailChange(e: any) {
    this.setState({ email: e.target.value });
  }

  passwordChange(e: any) {
    this.setState({ password: e.target.value });
  }

  handleLogin(e: any) {
    const email = this.state.email;
    const password = this.state.password;
    this.setState({ logging_in: true });
    return this.props.login(email, password).catch((err: any) => {
      this.setState({ loggin_in: false, error: true });
    });
  }

  dismissError() {
    this.setState({ error: false });
  }

  displayError() {
    return <Alert>Login failed. Try again</Alert>;
  }

  render() {
    let tfStyle = {
      marginBottom: "16px",
    };

    if (this.props.authenticated) {
      return (
        <div ref={this.vantaRef}>
          <Redirect to={ROUTES.DASHBOARD} />
        </div>
      );
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
            <Paper elevation={3} style={{ padding: "16px", width: "25vw", height: "40vh", marginLeft: "-20vw", backgroundColor: "#222428",  }}>
            <Typography style={{fontSize: "1.1vw", marginLeft: "7.7vw", color: "#6A6C70", marginTop: "-1vh", fontWeight: 600}} >
                WELCOME BACK!
              </Typography>
              <Typography style={{fontSize: "1.5vw", marginLeft: "4.5vw", fontWeight: 600}} >
                Log into your account
              </Typography>
              <TextField
                style={{marginTop: "5vh"}}
                fullWidth
                label="Email"
                variant="standard"
                onChange={this.emailChange}
              />
              <TextField
                style={{marginTop: "1vh"}}
                fullWidth
                label="Password"
                variant="standard"
                onChange={this.passwordChange}
                type="password"
              />
              <Button
                fullWidth
                style={{ marginTop: "3vh", width: "12vw", marginLeft: "6.5vw", fontSize: "1vw", color: "#FFFFFF", backgroundColor: "#1F28FF" }}
                variant="contained"
                onClick={this.handleLogin}
              >
                Login
              </Button>
              <Typography variant="body1" style={{fontSize: "1vw", marginBottom: "0.5vh", marginTop: "3vh"}}>
                Don't have an account? Sign up{" "}
                <Link to={ROUTES.SIGN_UP} style={{color: "#5CE2FF", fontSize: "1vw"}}>here</Link>
              </Typography>{" "}
              <Typography variant="body1" style={{fontSize: "1vw", marginBottom: "1vh", marginTop: "0vh"}}>
                {" "}
                <Link to={ROUTES.SIGN_UP} style={{color: "#5CE2FF", fontSize: "1vw"}}>Forgot your password?</Link>
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
}

export default LoginPage;
