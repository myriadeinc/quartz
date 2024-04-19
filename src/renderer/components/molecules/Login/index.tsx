import Typography from "renderer/components/atoms/TextStyles";
import {
  Box,
  Snackbar,
  Typography as MuiTypography,
  Paper,
} from "@mui/material";
import { Link } from "react-router-dom";
import Form from "renderer/components/atoms/Login/Form";
import PrimaryButton from "renderer/components/atoms/Login/PrimaryButtons";
type LoginMoleculeProps = {
  onEmailChange: (e: any) => void;
  onPasswordChange: (e: any) => void;
  state: Object;
  setState: any;
  signupRoute: string;
  handleLogin: (e: any) => Promise<void>;
  onToggleVisible: VoidFunction;
  handleUpdate: VoidFunction;
};

const LoginMolecule = ({
  onEmailChange,
  onPasswordChange,
  onToggleVisible,
  state,
  setState,
  handleUpdate,
  handleLogin,
  signupRoute,
}: LoginMoleculeProps) => {
  return (
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
      <Form
        onEmailChange={onEmailChange}
        onPasswordChange={onPasswordChange}
        onToggleVisible={onToggleVisible}
        state={state}
      />
      <div
        style={{
          margin: "auto",
          textAlign: "center",
          paddingTop: "16px",
        }}
      >
        <PrimaryButton onClick={handleLogin} />
        {state.error && (
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            color="#FFFFFF"
            open={!!state.error}
            onClose={() => handleUpdate(null)}
            message={state.error}
            autoHideDuration={3000}
          />
        )}
      </div>
      <div style={{ margin: "auto", textAlign: "center" }}>
        <MuiTypography
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
            to={signupRoute}
          >
            HERE
          </Link>
        </MuiTypography>{" "}
      </div>
    </Paper>
  );
};

export default LoginMolecule;
