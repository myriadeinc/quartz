import React, { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import { Redirect, Link } from "react-router-dom";
import * as ROUTES from "../utils/routes";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Box,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Typography from "renderer/components/common/typography";
import VisibilityOn from "assets/icons/VisibilityOn";
import VisibilityOff from "assets/icons/VisibilityOff";
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      hover: false,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.hoverChange = this.hoverChangeHandle.bind(this);
    this.vantaRef = React.createRef();
    // this.classes = useStyles();
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

  emailChange(e) {
    this.setState({ email: e.target.value });
  }

  passwordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    this.setState({ logging_in: true });
    this.props
      .login(email, password)
      .then(() => this.setState({ logging_in: false }))
      .catch(() => this.setState({ logging_in: false, error: true }));
  }

  togglePasswordVisibility() {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }));
  }
  hoverChangeHandle() {
    this.setState((prevState) => ({
      hover: !prevState.hover,
    }));
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
              <Box
                sx={{
                  maxWidth: "360px",
                  maxHeight: "28px",
                  position: "relative",
                  left: "20px",
                  top: "20px",
                }}
              >
                <Typography variant="heading2" fontWeight="500px">
                  Login
                </Typography>
              </Box>
              <Box
                sx={{
                  maxWidth: "360px",
                  maxHeight: "32px",
                  paddingTop: "20px",
                  margin: "auto",
                }}
              >
                <TextField
                  variant="standard"
                  id="outlined-basic"
                  InputProps={{
                    disableUnderline: true,
                  }}
                  style={{
                    maxWidth: "360px",
                    maxHeight: "32px",
                    paddingTop: "20px",
                    fontSize: "14px",
                  }}
                  size="small"
                  fullWidth
                  placeholder="Email"
                  sx={{
                    border: "1px solid #414E66",
                    borderRadius: "3px",
                    "& input:focus": {
                      borderBottom: "2px solid #FA6F15",
                      outline: "none",
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          border: "none",
                        },
                        "&.Mui-focused fieldset": {
                          border: "none",
                        },
                        "&:hover fieldset": {
                          border: "none",
                        },
                      },
                    },
                    "&:focus": {
                      outline: "none",
                      border: "0",
                    },
                  }}
                  onChange={this.emailChange}
                />
              </Box>
              <Box
                sx={{
                  maxWidth: "360px",
                  maxHeight: "32px",
                  paddingTop: "20px",
                  margin: "auto",
                }}
              >
                <TextField
                  id="outlined-adornment-password"
                  style={{
                    maxWidth: "360px",
                    maxHeight: "32px",
                    paddingTop: "20px",
                    fontSize: "14px",
                  }}
                  size="small"
                  fullWidth
                  placeholder="Password"
                  variant="outlined"
                  type={this.state.showPassword ? "text" : "password"}
                  value={this.state.password}
                  onChange={this.passwordChange}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end" sx={{ ":hover": "none" }}>
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={this.togglePasswordVisibility}
                          edge="end"
                          style={{ hover: "none" }}
                        >
                          {this.state.showPassword ? (
                            <VisibilityOn />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
              <div
                style={{
                  margin: "auto",
                  textAlign: "center",
                  paddingTop: "16px",
                }}
              >
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
