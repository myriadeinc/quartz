import { Grid } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import config from "renderer/utils/config";

export const GiftCards = () => {
  const [raffles, setRaffles] = useState([]);

  useEffect(() => {
    axios
      .get(`${config.miner_metrics_url}/v1/eventContent/active`)
      .then(({ data }) => {
        setRaffles(data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        // return this.setState({
        //   error:
        //     "Unable to fetch your data, please check your connection, your login and try again later",
        // });
      });
  }, []);

  return (
    <Grid
      container
      item
      style={{ width: "calc(100% - 360px)", marginLeft: "360px" }}
      alignItems={"center"}
      justifyContent={"center"}
    ></Grid>
  );
};
