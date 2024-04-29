import { Box, Stack, Card } from "@mui/material";
import { ActiveMiner } from "../organisms/ActiveMiner";
import { InforContainerII } from "../molecules/StartMining-I/InformationContainer/InfoContainer-II";
import { InformationBox } from "../molecules/StartMining-I/InformationBox";
import { TabNavigationHeader } from "../molecules/Gameroom-I/TabNavigationHeader";
import { RangeSelectorButtonGroup } from "../atoms/Dashboard/RangeSelectors";
import PrimaryButton from "../atoms/Login/PrimaryButtons";
export const PoolStats = () => {
  return (
    <Stack>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { md: "1fr", lg: "2fr 1fr", xl: "2fr 1.1fr" },
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <Box sx={{ whiteSpace: "nowrap" }}>
            <ActiveMiner miningPoints={125} />
          </Box>
          <Box
            alignSelf={"end"}
            sx={{
              maxWidth: "500px",
            }}
          >
            <img
              src="/assets/Illustrations/Pool Stats Illustration.webp"
              style={{
                objectFit: "contain",
                width: "100%",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "20px",
          }}
        >
          <Box sx={{ width: "240px" }}>
            <InforContainerII label="1.141 XMR" title="Last Block Reward" />
          </Box>
          <Box sx={{ width: "240px" }}>
            <InforContainerII label="-" title="Gift Cards Distributed" />
          </Box>
          <Box sx={{ width: "240px" }}>
            <InforContainerII label="-" title="Withdrawn XMR" />
          </Box>
          <Box sx={{ width: "240px" }}>
            <InforContainerII title="Total $ Value of Withdrawals" label="-" />
          </Box>
          <Box sx={{ width: "240px" }}>
            <InforContainerII title="Minimum Payout" label="0.001 XMR" />
          </Box>
          <Box sx={{ width: "240px" }}>
            <InformationBox
              title="Payout Schemes and Fees"
              info="0% PPS"
              unit="5% FRTNE"
            />
          </Box>
        </Box>
      </Box>
      <Box sx={{ maxWidth: "1473px", marginTop: "34px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Box sx={{ display: "flex", gap: "20px", order: { sm: 2, lg: 1 } }}>
            <TabNavigationHeader title="Pool Hashrate" info="337.12 Kh/s" />
            <TabNavigationHeader title="Pool Hashrate" info="337.12 Kh/s" />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"flex-end"}
            sx={{
              marginRight: { md: "33px", xl: "12px" },
              marginBottom: "12px",
              order: { sm: 1, lg: 2 },
            }}
          >
            <RangeSelectorButtonGroup
              firstButtonTitle="Hour"
              SecondButtonTitle="Day"
              ThirdButtonTitle="Week"
              FourthButtonTitle="3 Month"
              FifthButtonTitle="Year"
            />
          </Box>
        </Box>
        <Box>
          <Card
            style={{
              backgroundColor: "#0F141F",
              backgroundImage: "none",
              backgroundSize: "cover",
              marginRight: "10px",
              zIndex: 2,
              WebkitBorderTopLeftRadius: "0",
              borderRadius: "7px",
              position: "relative",
              minWidth: "400px",
            }}
            sx={{
              height: {
                xs: "45vh",
                sm: "45vh",
                md: "45vh",
                lg: "52 vh",
                xl: "48vh",
              },
            }}
          >
            <img
              src="/assets/Illustrations/Historical-Metrics-3-Month-Card.webp"
              alt="Your Image Alt Text"
              style={{
                maxWidth: "-webkit-fill-available",
                height: "100%",
                objectFit: "fill",
                position: "absolute",
                zIndex: 3,
              }}
            />
          </Card>
        </Box>
      </Box>
      <Box sx={{ width: "120px", marginTop: "32px", alignSelf: "center" }}>
        <PrimaryButton text="Back" />
      </Box>
    </Stack>
  );
};
