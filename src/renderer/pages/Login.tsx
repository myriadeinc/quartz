import React from "react";
import { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import { Redirect, Link } from "react-router-dom";
import * as ROUTES from "../utils/routes";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

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
      waveHeight: 16.0,
      waveSpeed: 0.45,
      shininess: 25.0,
      mouseControls: false,
      touchControls: false,
      gyroControls: false,
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
          <Grid>
            <Paper
              elevation={3}
              style={{
                width: "400px",
                height: "288px",
                backgroundColor: "#0F141F",
              }}
            >
              <Typography
                fontFamily="Poppins, sans-serif"
                style={{
                  paddingTop: "25px",
                  paddingLeft: "20px",
                  color: "#EAEAEA",
                  fontSize: "20px",
                }}
              >
                Login
              </Typography>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <TextField
                  id="outlined-basic"
                  style={{
                    width: "360px",
                    height: "32px",
                    marginTop: "20px",
                  }}
                  size="small"
                  fullWidth
                  label="Email"
                  variant="outlined"
                  onChange={this.emailChange}
                />
              </div>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <TextField
                  id="outlined-basic"
                  style={{
                    width: "360px",
                    height: "32px",
                    marginTop: "23px",
                  }}
                  size="small"
                  fullWidth
                  label="Password"
                  variant="outlined"
                  onChange={this.passwordChange}
                  type="password"
                />
              </div>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Button
                  fullWidth
                  style={{
                    backgroundColor: "#FA6F15",
                    marginTop: "20px",
                    width: "120px",
                    height: "32px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#0F141F",
                  }}
                  variant="contained"
                  onClick={this.handleLogin}
                >
                  Login
                </Button>
              </div>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Typography
                  fontFamily="Poppins, sans-serif"
                  style={{
                    marginTop: "50px",
                    fontSize: "12px",
                    color: "#EAEAEA",
                  }}
                >
                  Don't have an account? Sign up{" "}
                  <Link
                    style={{
                      fontSize: "12px",
                      color: "#6C81F5",
                    }}
                    to={ROUTES.SIGN_UP}
                  >
                    HERE
                  </Link>
                </Typography>{" "}
              </div>
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
}

export default LoginPage;
