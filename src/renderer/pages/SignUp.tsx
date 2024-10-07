import React from "react";
import { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import { Redirect, Link } from "react-router-dom";
import * as ROUTES from "../utils/routes";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
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
    if (this.props.authenticated) {
      return <Redirect to={ROUTES.DASHBOARD} />;
    } else {
      return (
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          
          
          ref={this.vantaRef}
          style={{ height: "100vh",                  
                  display: "flex"
                  
           }}
          
        >
          <Grid item xs ={12} sm={6} md = {6} lg = {4}>
            <Paper
              elevation={3}
              style={{

                maxWidth: "600px",
                width: "90%",
                height: "250px",
                backgroundColor: "#0F141F",
                
                
                
                margin: "auto",

                
                
                
                
                
                
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
                Sign Up
              </Typography>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <TextField
                  style={{
                    width: "90%",
                    height: "32px",
                    marginTop: "20px",
                  }}
                  size="small"
                  fullWidth
                  label="Email"
                  variant="outlined"
                />
              </div>
              <div style={{ margin: "auto", textAlign: "center" }}>
                <Button
                  fullWidth
                  style={{
                    backgroundColor: "#FA6F15",
                    marginTop: "25px",
                    width: "120px",
                    height: "32px",
                    fontSize: "14px",
                    fontWeight: "600",
                    color: "#0F141F",
                  }}
                  variant="contained"
                  onClick={this.handleLogin}
                >
                  Sign Up
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
                  Already have an account? Log in{" "}
                  <Link
                    style={{
                      fontSize: "12px",
                      color: "#6C81F5",
                    }}
                    to={ROUTES.LOGIN}
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

export default SignUpPage;
