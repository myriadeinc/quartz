import { HashRouter as Router, Route, Switch } from "react-router-dom";
import AuthLayer, { AuthConsumer, ProtectedRoute } from "./layers/AuthLayer";
import LoginPage from "./pages/Login";
import * as ROUTES from "./utils/routes";
import "./styles/app.css";
import SignUpPage from "./pages/SignUp";

export default function App() {
  return (
    <Router>
      <AuthLayer>
        <AuthConsumer>
          {({ authenticated, login }) => (
            <>
              <Switch>
                <Route
                  exact
                  path={ROUTES.LOGIN}
                  component={() => <LoginPage login={login} />}
                />
                <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
                {/* Protected Routes that need authentication */}
                <ProtectedRoute
                  path={ROUTES.DASHBOARD}
                  component={<div>Authed</div>}
                  authenticated={authenticated}
                />
              </Switch>
            </>
          )}
        </AuthConsumer>
      </AuthLayer>
    </Router>
  );
}
