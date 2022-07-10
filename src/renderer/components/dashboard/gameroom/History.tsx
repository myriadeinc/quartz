import { TabContext, TabPanel } from "@mui/lab";
import { Card, Grid, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { IHistory } from "renderer/interfaces/pages/dashboard";
import { EnhancedTable } from "./HistoryTable";

const useStyles = makeStyles({
  grid: {
    padding: "5vh",
    margin: "1vh 2.5vw 3vh 2.5vw",
    justifyContent: "center",
  },
  card: {
    padding: "6px 6px 6px 6px",
  },
});

interface HistoryProps {
  history: IHistory[];
}

export const History = (props: HistoryProps) => {
  const [tab, setTab] = useState("0");
  const classes = useStyles();

  console.log(props.history);

  return (
    <Grid item sm={12} className={classes.grid}>
      <Card className={classes.card}>
        <TabContext value={tab}>
          <Tabs
            value={tab}
            onChange={(_e, newTab) => {
              setTab(newTab);
            }}
          >
            <Tab label="Active" value={"0"} />
            <Tab label="Expired" value={"1"} />
          </Tabs>
          <TabPanel value={"0"}>
            <EnhancedTable
              data={props.history.filter((entry) => entry.status != 0)}
            />
          </TabPanel>
          <TabPanel value={"1"}>
            <EnhancedTable
              data={props.history.filter((entry) => entry.status != 1)}
            />
          </TabPanel>
        </TabContext>
      </Card>
    </Grid>
  );
};
