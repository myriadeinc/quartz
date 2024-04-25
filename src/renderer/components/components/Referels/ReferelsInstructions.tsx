import { Box } from "@mui/material";
import Typography from "renderer/components/atoms/TextStyles";
import { MinerConsumer } from "renderer/pages/Dashboard";

type Props = {};

export const ReferelsInstructions = () => {
  return (
    <Box
      display={"grid"}
      sx={{
        backgroundColor: "#080A0F",
        borderRadius: "0 0 7px 7px",
        gridTemplateColumns: { sm: "1fr", md: "1fr 1fr", lg: "1fr 1fr 1fr" },
      }}
    >
      <Box
        style={{
          flex: 1,
          border: "1px solid rgba(234, 234, 234, 0.2)",
          padding: "26px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          maxHeight: "172px",
        }}
      >
        <img
          src="/assets/svg/Referrals-Icon.svg"
          alt="referels icons"
          style={{ objectFit: "contain", maxHeight: "44px" }}
        />
        <Typography variant="bodyLarge" color="#EAEAEA" centered>
          1. Send your Referral Code
        </Typography>
        <Typography variant="bodySmall" color="#EAEAEA" centered>
          Copy your Referral Code Below and send it to your friends
        </Typography>
      </Box>

      <div
        style={{
          flex: 1,
          border: "1px solid rgba(234, 234, 234, 0.2)",
          padding: "26px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          maxHeight: "172px",
        }}
      >
        <img
          src="/assets/svg/Workers-Icon.svg"
          alt="workers icons"
          style={{ objectFit: "contain", maxHeight: "44px" }}
        />
        <Typography variant="bodyLarge" color="#EAEAEA" centered>
          1. 2. Mine With your Friends
        </Typography>
        <Typography variant="bodySmall" color="#EAEAEA" centered>
          Teach your friends to set up their Myriade accounts and start mining
        </Typography>
      </div>

      <div
        style={{
          flex: 1,
          border: "1px solid rgba(234, 234, 234, 0.2)",
          padding: "26px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "4px",
          maxHeight: "172px",
        }}
      >
        <img
          src="/assets/svg/Withdraw-Icon.svg"
          alt="withdraw icons"
          style={{ objectFit: "contain", maxHeight: "44px" }}
        />
        <Typography variant="bodyLarge" color="#EAEAEA" centered>
          3. Collect your Comission
        </Typography>
        <Typography variant="bodySmall" color="#EAEAEA" centered>
          The higher your friends’ level, the more comission you earn off their
          MC Mining
        </Typography>
      </div>
    </Box>
  );
};
