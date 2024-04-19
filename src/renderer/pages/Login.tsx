import React, { Component } from "react";
import WAVES from "vanta/dist/vanta.waves.min";
import { Redirect, Link } from "react-router-dom";
import * as ROUTES from "../utils/routes";
import { Grid } from "@mui/material";
import { userLogin } from "services/api.service";
import LoginMolecule from "renderer/components/molecules/Login";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      showPassword: false,
      hover: false,
      error: null,
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.togglePasswordVisibility = this.togglePasswordVisibility.bind(this);
    this.hoverChange = this.hoverChangeHandle.bind(this);
    this.vantaRef = React.createRef();
    this.handleUpdate = this.handleUpdate.bind(this);
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
  validateEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  async handleLogin(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (!this.validateEmail(email)) {
      this.setState({ error: "Invalid email format" });
      return;
    }
    this.setState({ logging_in: true });
    const authenticated = await userLogin(email, password);
    if (authenticated.accessToken) {
      this.setState({
        logging_in: true,
      });
    } else {
      this.setState({
        error: authenticated.errorMessage,
      });
    }
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

  handleUpdate(error) {
    this.setState({ error });
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
            <LoginMolecule
              onEmailChange={this.emailChange}
              onPasswordChange={this.passwordChange}
              onToggleVisible={this.togglePasswordVisibility}
              state={this.state}
              handleLogin={this.handleLogin}
              handleUpdate={this.handleUpdate}
              signupRoute={ROUTES.SIGN_UP}
            />
          </Grid>
        </Grid>
      );
    }
  }
}

export default LoginPage;
