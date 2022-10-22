import { Component, ComponentType, createContext } from "react";
import { Redirect, Route } from "react-router-dom";
import decode from "jwt-decode";
import axios from "axios";
import config from "../utils/config";
import * as ROUTES from "../utils/routes";

const ACCESS_TOKEN = "access_token";
const authContext = createContext({} as AuthLayerState);

interface AuthLayerState {
  authenticated: boolean;
  logout: () => void;
  login: (email: string, password: string) => void;
}

class AuthLayer extends Component<{}, AuthLayerState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      authenticated: false,
      logout: this.logout,
      login: this.login,
    };

    this.updateAuth = this.updateAuth.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  componentDidMount() {
    if (localStorage.hasOwnProperty(ACCESS_TOKEN)) {
      let decodedToken = decode(localStorage.getItem(ACCESS_TOKEN)!) as any;
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
        const { accessToken } = data;
        localStorage.setItem(ACCESS_TOKEN, accessToken);

        this.setState({
          authenticated: true,
        });
      });
  }

  logout() {
    localStorage.removeItem(ACCESS_TOKEN);
    this.setState({
      authenticated: false,
    });
  }

  updateAuth(accessToken: string) {
    localStorage.setItem(ACCESS_TOKEN, accessToken);
    this.setState({
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

interface ProtectedRouteProps {
  path: string;
  component: ComponentType;
  authenticated: boolean;
  exact?: boolean;
}

export const ProtectedRoute = (props: ProtectedRouteProps) => {
  return props.authenticated ? (
    <Route path={props.path} component={props.component} exact={props.exact} />
  ) : (
    <Redirect to={ROUTES.LOGIN} />
  );
};

export const AuthConsumer = authContext.Consumer;

export default AuthLayer;
