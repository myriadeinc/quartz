import { Grid } from "@mui/material";
import { Switch } from "react-router-dom";
import { AuthConsumer, ProtectedRoute } from "renderer/layers/AuthLayer";
import { GiftCards } from "./giftcards/GiftCards";
import { Monero } from "./monero/Monero";

export const GameRoom = () => {
  return (
    <AuthConsumer>
      {({ authenticated }) => (
        <Grid container alignItems="left" justifyContent="left">
          <Switch>
            <ProtectedRoute
              path={`/dashboard/gameroom/raffles`}
              component={Monero}
              authenticated={authenticated}
            />
            <ProtectedRoute
              path={`/dashboard/gameroom/grid`}
              component={GiftCards}
              authenticated={authenticated}
            />
          </Switch>
        </Grid>
      )}
    </AuthConsumer>
  );
};
