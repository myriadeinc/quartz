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
            className="ankush"
            style={{
              gap: "20px",
              display: "flex",
            }}
            sx={{
              // display: "flex",
              gap: "20px",
              // paddingRight: "20px",
              borderBottom: "none",
              fontSize: "16px",
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiTabs-flexContainer": {
                gap: "20px",
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
                fontSize: "16px",
                fontFamily: "Poppins",
                "&.Mui-selected": {
                  color: "#EAEAEA",
                  backgroundColor: "#0F141F",
                },
                textTransform: "capitalize",
                width: "180px",
                alignItems: "flex-start",
                padding: "14px 0 14px 20px",
                backgroundColor: "transparent",
              }}
            />
            <Tab
              label="Expired"
              textTransform={"capitalize"}
              value={"1"}
              sx={{
                border:
                  tab === "1" ? "1px solid transparent" : " 1px solid #0F141F",
                borderTopLeftRadius: "7px",
                borderTopRightRadius: "7px",
                fontFamily: "Poppins",
                fontSize: "16px",
                "&.Mui-selected": {
                  color: "#EAEAEA",
                  backgroundColor: "#0F141F",
                },
                textTransform: "capitalize",
                alignItems: "flex-start",
                width: "180px",
                padding: "14px 0 14px 20px",
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
