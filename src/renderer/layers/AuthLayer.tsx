import { Component, createContext } from "react";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";
import axios from "axios";
import config from "../utils/config";
import * as ROUTES from "../utils/routes";

const ACCESS_TOKEN = "access_token";
const authContext = createContext({});

interface AuthLayerProps {}
interface AuthLayerState {
  miner: any;
  authenticated: boolean;
  logout: any;
  login: any;
  jwtToken: any;
  accessToken: string;
}

class AuthLayer extends Component<AuthLayerProps, AuthLayerState> {
  constructor(props: AuthLayerProps) {
    super(props);

    this.state = {
      miner: null,
      authenticated: false,
      logout: this.logout,
      login: this.login,
      jwtToken: null,
      accessToken: "",
    };

    this.updateAuth = this.updateAuth.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty(ACCESS_TOKEN)) {
      let decodedToken = decode(localStorage.getItem(ACCESS_TOKEN)!);
      let expired = Date.now() > decodedToken.exp;
      this.setState({ authenticated: !expired });
    }
  }

  login(email: string, password: string) {
    return axios
      .post(`${config.identity_service_url}/v1/account/login`, {
        email,
        password,
      })
      .then(({ data }) => {
        return this.updateAuth(data.accessToken);
      });
  }

  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
      accessToken: "",
      miner: null,
    });
  }

  updateAuth(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    let decodedToken = decode(accessToken);
    this.setState({
      miner: {
        id: decodedToken.sub,
        address: decodedToken.account.address,
        name: decodedToken.account.name,
      },
      jwtToken: accessToken,
      authenticated: true,
    });
  }

  render() {
    return (
      <authContext.Provider value={this.state}>
        {this.props.children}
      </authContext.Provider>
    );
  }
}

export class ProtectedRoute extends Component {
  render() {
    return this.props.authenticated ? (
      <Route path={this.props.path} component={this.props.component} />
    ) : (
      <Redirect to={ROUTES.LOGIN} />
    );
  }
}

export const AuthConsumer = authContext.Consumer;

export default AuthLayer;
