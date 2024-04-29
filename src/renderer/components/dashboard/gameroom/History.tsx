import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { IHistory } from "renderer/interfaces/pages/dashboard";
import { EnhancedTable } from "./HistoryTable";
import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
interface HistoryProps {
  history: IHistory[];
}

export const History = (props: HistoryProps) => {
  const [tab, setTab] = useState("0");

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
        gap: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Typography variant="heading2" color="#EAEAEA">
          History
        </Typography>
      </Box>
      <Box>
        <TabContext value={tab}>
          <Tabs
            value={tab}
            onChange={(e, newTab) => {
              setTab(newTab);
            }}
            sx={{
              display: "flex",
              paddingRight: "20px",
              borderBottom: "none",
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab
              label="Upcoming"
              value={"0"}
              sx={{
                border:
                  tab === "0" ? "1px solid transparent" : " 1px solid #0F141F",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
                marginRight: "1vw",
                "&.Mui-selected": {
                  color: "#EAEAEA",
                  backgroundColor: "#0F141F",
                },
                backgroundColor: "transparent",
              }}
            />
            <Tab
              label="Expired"
              value={"1"}
              sx={{
                border:
                  tab === "1" ? "1px solid transparent" : " 1px solid #0F141F",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
                marginRight: "1vw",
                "&.Mui-selected": {
                  color: "#EAEAEA",
                  backgroundColor: "#0F141F",
                },
                backgroundColor: "transparent",
              }}
            />
          </Tabs>
          <TabPanel value={"0"} sx={{ padding: "0px" }}>
            <EnhancedTable
              data={props.history.filter(
                (entry) => !entry.title.includes("Steam")
              )}
            />
          </TabPanel>
          <TabPanel value={"1"} sx={{ padding: "0px" }}>
            <EnhancedTable data={[]} />
          </TabPanel>
        </TabContext>
      </Box>
    </Box>
  );
};
