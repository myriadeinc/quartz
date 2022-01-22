import React from "react";
import { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";

import { Redirect } from "react-router-dom";

import * as ROUTES from "../utils/routes";
import {
  Grid,
  Paper,
  TextField,
  Typography,
  Button,
  Link,
} from "@mui/material";

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
    this.dismissError = this.dismissError.bind(this);
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
              />
              <Button
                fullWidth
                style={{ backgroundColor: "orange", marginBottom: "12px" }}
                variant="contained"
              >
                Login
              </Button>
              <Typography variant="body1">
                Don't have an account? Sign up{" "}
                <Link underline="none" href={ROUTES.SIGN_UP}>
                  here
                </Link>
              </Typography>{" "}
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
}

export default SignUpPage;
