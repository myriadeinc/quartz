import { Button, Grid } from "@mui/material";

declare global {
  interface Window {
    electronAPI: any;
  }
}

export const Mining = () => {
  return (
    <Grid
      container
      item
      style={{ width: "calc(100% - 360px)", marginLeft: "360px" }}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Button onClick={window.electronAPI.test}>Test IPC</Button>
    </Grid>
  );
};
