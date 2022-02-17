import { Grid } from "@mui/material";
import axios from "axios";
import { createContext, useEffect, useRef, useState } from "react";
import { Switch } from "react-router-dom";
import { Sidebar } from "renderer/components/dashboard/Sidebar";
import { AuthConsumer, ProtectedRoute } from "renderer/layers/AuthLayer";
import { makeStyles } from "@mui/styles";
import { dashboardRoutes } from "renderer/utils/dashboard";
import config from "renderer/utils/config";
import { Miner } from "renderer/interfaces/pages/dashboard";
// import WAVES from "vanta/dist/vanta.waves.min";

const useStyles = makeStyles({
  wrapper: {
    width: "80vw", 
    marginLeft: "20vw",
    "@media screen and (max-width: 1000px)" : {
      width: "calc(100% - 200)",
      marginLeft: 200
    }
  },
});

const minerContext = createContext({} as Miner);

export const Dashboard = (props: any) => {
  const [vantaEffect, setVantaEffect] = useState(0);
  const [selfFetched, setSelfFetched] = useState(false);
  const [creditsFetched, setCreditsFetched] = useState(false);
  const [miner, setMiner] = useState({
    id: "",
    email: "",
    name: "",
    shortId: "",
    mcBalance: 0,
    xmrBalance: 0,
    hashrates: [],
    avgHashrate: "0",
  } as Miner);
  const myRef = useRef(null);
  const classes = useStyles();

  useEffect(() => {
    if (!vantaEffect) {
      // setVantaEffect(
      //   WAVES({
      //     el: myRef.current,
      //     color: 0x202225,
      //     waveSpeed: 0.3,
      //     mouseControls: false,
      //   })
      // );
    }
    return () => {
      //if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  useEffect(() => {
    axios
      .get(`${config.identity_service_url}/v1/account/self`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`,
        },
      })
      .then(({ data }) => {
        const minerClone = { ...miner };
        minerClone.shortId = data.shortId;
        minerClone.name = data.name;
        minerClone.email = data.email;
        minerClone.id = data.id;
        setMiner(minerClone);
        setSelfFetched(true);
      })
      .catch((error) => {
        console.error("There was an error!", error);
        // return this.setState({
        //   error:
        //     'Unable to fetch your data, please check your connection, your login and try again later',
        // });
      });
  }, []);

  useEffect(() => {
    if (selfFetched) {
      axios
        .get(`${config.miner_metrics_url}/v1/stats/credit`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(({ data }) => {
          const minerClone = { ...miner };
          minerClone.mcBalance = data.credits;
          minerClone.xmrBalance = data.monero_balance / Math.pow(10, 12);
          setMiner(minerClone);
          setCreditsFetched(true);
        })
        .catch((error) => {
          console.error("There was an error!", error);
          // return this.setState({
          //   error:
          //     "Unable to fetch your data, please check your connection, your login and try again later",
          // });
        });
    }
  }, [selfFetched]);

  useEffect(() => {
    if (creditsFetched) {
      axios
        .get(`${config.miner_metrics_url}/v1/stats/hashrates`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("access_token")}`,
          },
        })
        .then(({ data }) => {
          const minerClone = { ...miner };
          let avg = 0;
          let count = 0;

          minerClone.hashrates = data.map((entry: any) => {
            if (count < 30) {
              avg += parseInt(entry.rate);
              count++;
            }

            return {
              time: new Date(entry.time).getTime(),
              rate: entry.rate,
            };
          });

          avg /= count;
          minerClone.avgHashrate = avg.toFixed(2);
          setMiner(minerClone);
        })
        .catch((error) => {
          console.error("There was an error!", error);
          // return this.setState({
          //   error:
          //     "Unable to fetch your data, please check your connection, your login and try again later",
          // });
        });
    }
  }, [creditsFetched]);

  return (
    <AuthConsumer>
      {({ authenticated, logout }) => (
        <minerContext.Provider value={miner}>
          <Grid
            ref={myRef}
            style={{ minHeight: "100vh", backgroundColor: "#1e2124" }}
          >
            <Sidebar path={props.match.path} />
            <Grid
              container
              item
              className={classes.wrapper}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Switch>
                {dashboardRoutes.map(
                  (view) =>
                    view.visible && (
                      <ProtectedRoute
                        exact={view.name == "Dashboard"}
                        path={`${props.match.path}${view.ref}`}
                        component={view.component}
                        authenticated={authenticated}
                      />
                    )
                )}
              </Switch>
            </Grid>
          </Grid>
        </minerContext.Provider>
      )}
    </AuthConsumer>
  );
};

export const MinerConsumer = minerContext.Consumer;
