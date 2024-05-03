import { Box } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";
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

const useStyles = makeStyles({
  itemsBorderBottom: {
    "&:nth-last-child(1)": {
      borderRight: "none",
      borderBottom: "none",
    },
  },
});
export const FriendsMolecule = ({
  friendName,
  isMetrics,
  mining,
}: FriendsProps) => {
  const classes = useStyles();
  return (
    <Box
      sx={{
        padding: "20px",
        width: { md: "94%", lg: "95%", xl: "90%" },
        height: "48px",
        display: "flex",
        gap: "12px",
        alignItems: "center",
        whiteSpace: "nowrap",
        borderBottom: "1px solid #293040",
      }}
      className={classes.itemsBorderBottom}
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
        <Box sx={{ display: "flex", gap: "4px" }}>
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
