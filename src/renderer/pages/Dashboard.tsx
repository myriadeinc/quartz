import { Grid } from "@mui/material";
import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { Switch } from "react-router-dom";
import { Sidebar } from "renderer/components/dashboard/Sidebar";
import { AuthConsumer, ProtectedRoute } from "renderer/layers/AuthLayer";
import { dashboardRoutes } from "renderer/utils/dashboard";
import WAVES from "vanta/dist/vanta.waves.min";

const minerContext = createContext({});

export const Dashboard = (props: any) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [miner, setMiner] = useState({});
  const myRef = useRef(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        WAVES({
          el: myRef.current,
          color: 0x202225,
          waveSpeed: 0.3,
          mouseControls: false,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    axios;
  });

  return (
    <AuthConsumer>
      {({ authenticated, logout }) => (
        <minerContext.Provider value={miner}>
          <Grid ref={myRef} style={{ height: "100vh" }}>
            <Sidebar />
            <Switch>
              {dashboardRoutes.map((view) => (
                <ProtectedRoute
                  path={view.ref}
                  component={view.component}
                  authenticated={authenticated}
                />
              ))}
            </Switch>
          </Grid>
        </minerContext.Provider>
      )}
    </AuthConsumer>
  );
};

export const MinerConsumer = minerContext.Consumer;
