import React from "react";
import { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

import { Redirect, Link } from "react-router-dom";

import * as ROUTES from "../utils/routes";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Alert,
} from "@mui/material";

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

  handleLogin(_e: any) {
    const email = this.state.email;
    const password = this.state.password;
    this.setState({ logging_in: true });
    return this.props.login(email, password).catch((_err: any) => {
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
          style={{ height: "100vh" }}
        >
          <Grid item sm={2}>
            <Paper elevation={3} style={{ padding: "16px" }}>
              <Typography style={tfStyle} variant="h5">
                Login
              </Typography>
              <TextField
                style={tfStyle}
                fullWidth
                label="Email"
                variant="standard"
                onChange={this.emailChange}
              />
              <TextField
                style={tfStyle}
                fullWidth
                label="Password"
                variant="standard"
                onChange={this.passwordChange}
                type="password"
              />
              <Button
                fullWidth
                style={{ backgroundColor: "orange", marginBottom: "12px" }}
                variant="contained"
                onClick={this.handleLogin}
              >
                Login
              </Button>
              <Typography variant="body1">
                Don't have an account? Sign up{" "}
                <Link to={ROUTES.SIGN_UP}>here</Link>
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
}

export default LoginPage;
