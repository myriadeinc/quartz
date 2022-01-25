import { HashRouter as Router, Route } from "react-router-dom";
import AuthLayer, { AuthConsumer, ProtectedRoute } from "./layers/AuthLayer";
import LoginPage from "./pages/Login";
import * as ROUTES from "./utils/routes";
import "./styles/app.css";
import SignUpPage from "./pages/SignUp";
import { Dashboard } from "./pages/Dashboard";

export default function App() {
  return (
    <Router hashType="slash">
      <AuthLayer>
        <AuthConsumer>
          {({ authenticated, login }) => (
            <>
              <Route
                exact
                path={ROUTES.LOGIN}
                component={() => (
                  <LoginPage login={login} authenticated={authenticated} />
                )}
              />
              <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
              {/* Protected Routes that need authentication */}
              <ProtectedRoute
                path={ROUTES.DASHBOARD}
                component={Dashboard}
                authenticated={authenticated}
              />
            </>
          )}
        </AuthConsumer>
      </AuthLayer>
    </Router>
  );
}
