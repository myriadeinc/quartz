import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import makeStyles from "@mui/styles/makeStyles";
import { useState } from "react";
import { IHistory } from "renderer/interfaces/pages/dashboard";
import { EnhancedTable } from "./HistoryTable";

const useStyles = makeStyles({
  grid: {
    padding: "16px",
  },
  card: {
    padding: "16px",
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
            onChange={(e, newTab) => {
              setTab(newTab);
            }}
          >
            <Tab label="Active" value={"0"} />
            <Tab label="Expired" value={"1"} />
          </Tabs>
          <TabPanel value={"0"}>
            <EnhancedTable
              data={props.history.filter(
                (entry) => !entry.title.includes("Steam")
              )}
            />
          </TabPanel>
          <TabPanel value={"1"}>
            <EnhancedTable data={[]} />
          </TabPanel>
        </TabContext>
      </Card>
    </Grid>
  );
};
