import { TabContext, TabPanel } from "@mui/lab";
import { Card, Grid, Tab, Tabs } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useState } from "react";
import { IHistory } from "renderer/interfaces/pages/dashboard";
import { EnhancedTable } from "./HistoryTable";

const useStyles = makeStyles({
  grid: {
    padding: "16px",
  },
  card: {
    padding: "6px 6px 6px 6px",
  },
});

interface HistoryProps {
  history: IHistory[];
  giftCards?: boolean;
}

export const History = (props: HistoryProps) => {
  const [tab, setTab] = useState("0");
  const classes = useStyles();
  let data;

  if (props.giftCards) {
    data = props.history.filter((entry) => entry.title.includes("Steam"));
  } else {
    data = props.history.filter((entry) => !entry.title.includes("Steam"));
  }

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
            <EnhancedTable data={data.filter((entry) => entry.status != 0)} />
          </TabPanel>
          <TabPanel value={"1"}>
            <EnhancedTable data={data.filter((entry) => entry.status != 1)} />
          </TabPanel>
        </TabContext>
      </Card>
    </Grid>
  );
};
