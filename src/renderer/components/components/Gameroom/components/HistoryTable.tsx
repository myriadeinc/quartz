import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { DrawingHistory } from "renderer/components/molecules/Gameroom-II/DrawingHistory";

const TABS_LABEL = ["Upcoming", "Expired"];

export const HistoryTabs = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

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
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              display: "flex",
              paddingRight: "20px",
              borderBottom: "none",
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            {TABS_LABEL.map((element, index) => (
              <Tab
                key={index}
                label={element}
                value={index + 1}
                sx={{
                  border:
                    value === (index + 1).toString()
                      ? "1px solid transparent"
                      : " 1px solid #0F141F",
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
            ))}
          </TabList>
          {TABS_LABEL.map((_, index) => (
            <TabPanel
              className="ahsfljslfjsajflsdjl"
              key={index}
              sx={{ padding: "0px" }}
              value={value}
            >
              <DrawingHistory />
            </TabPanel>
          ))}
        </TabContext>
      </Box>
    </Box>
  );
};
