import { Box } from "@mui/material";
import { MinerStatusIcon } from "renderer/components/atoms/FriendsWorkers/MinersStatus";
import CopperLeftIcon from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperLeftIcon";
import { CopperRightIcon } from "renderer/components/atoms/Settings/Settings-I/LevelIcons/CopperRightIcon";
import { SecondaryButton } from "renderer/components/atoms/Settings/Settings-II/SecondaryButton";
import Typography from "renderer/components/atoms/TextStyles";

type FriendsProps = {
  friendName: string;
  isMetrics: boolean;
  mining: string;
};

export const FriendsMolecule = ({
  friendName,
  isMetrics,
  mining,
}: FriendsProps) => {
  return (
    <Box
      sx={{
        padding: "20px",
        width: { md: "100%", xl: "80%" },
        height: "48px",
        display: "flex",
        gap: "12px",
        alignItems: "center",
        whiteSpace: "nowrap",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <MinerStatusIcon src="" />
        <Box className="sdafasdfsadf" sx={{ display: "flex", gap: "4px" }}>
          <CopperLeftIcon />
          <Typography color="#EAEAEA">{friendName}</Typography>
          <CopperRightIcon />
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {isMetrics ? (
          <SecondaryButton variant="medium" text="View Metrics" />
        ) : (
          <Typography color="#8C8C8C">Mining for {mining}</Typography>
        )}
      </Box>
    </Box>
  );
};
