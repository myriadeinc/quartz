import { Grid } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Switch } from "react-router-dom";
import { Analytics } from "renderer/components/dashboard/Analytics";
import { Sidebar } from "renderer/components/dashboard/Sidebar";
import { AuthConsumer, ProtectedRoute } from "renderer/layers/AuthLayer";
import WAVES from "vanta/dist/vanta.waves.min";

export const Dashboard = (props: any) => {
  const [vantaEffect, setVantaEffect] = useState(0);
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
  return (
    <AuthConsumer>
      {({ authenticated, logout }) => (
        <Grid ref={myRef} style={{ height: "100vh" }}>
          <Sidebar />
          <Switch>
            <ProtectedRoute
              exact
              path={`${props.match.path}`}
              component={Analytics}
              authenticated={authenticated}
            />
          </Switch>
        </Grid>
      )}
    </AuthConsumer>
  );
};
