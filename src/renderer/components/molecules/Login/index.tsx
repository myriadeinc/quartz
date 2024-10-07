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
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "10px", 
      }}
  >

    <Paper
      elevation={3}
      style={{
        maxWidth: "400px",
        width: "100%",
        height: "288px",
        borderRadius: "7px",
        backgroundColor: "#0F141F",
        padding: "20px",
       
      }}
    >
      
      <Box
        sx={{

          maxWidth: "360px",
          maxHeight: "28px",
          paddingBottom: "20px",
        }}
      >
        <Typography variant="heading2" color="#EAEAEA">
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
          marginTop: "16px",
          width: "122px",
        }}
      >
        <PrimaryButton onClick={handleLogin} text="Login" />
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
      <div style={{ margin: "56px 0 0 0", textAlign: "center" }}>
        <Typography variant="caption" color="#EAEAEA">
          Don't have an account? Sign up{" "}
          <Link
            style={{
              fontSize: "12px",
              color: "#6C81F5",
              lineHeight: "16px",
            }}
            to={signupRoute}
          >
            HERE
          </Link>
        </Typography>
      </div>
    </Paper>
  </Box>
  );
};

export default LoginMolecule;
