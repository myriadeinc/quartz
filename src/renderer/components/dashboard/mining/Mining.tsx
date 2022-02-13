import { Button, Grid } from "@mui/material";
import { useState } from "react";

declare global {
  interface Window {
    electronAPI: any;
  }
}

export const Mining = () => {
  const [mining, setMining] = useState(false);

  const handleMine = () => {
    if (mining) {
      window.electronAPI.stopMiner();
    } else {
      window.electronAPI.startMiner();
    }
    setMining(!mining);
  };

  return (
    <Grid
      container
      item
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Button onClick={handleMine}>
        {mining ? "Stop Mining" : "Start Mining"}
      </Button>
    </Grid>
  );
};
