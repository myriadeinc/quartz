import { Box, IconButton } from "@mui/material";
import { CancelButtonIcon } from "renderer/components/atoms/StartMining-I/CancelButton";
import Typography from "renderer/components/atoms/TextStyles";
import { Friends } from "renderer/components/molecules/Friends/Friends";
interface ReferelFriendsProps {
  onClick: VoidFunction;
}
export const ReferedFriends = ({ onClick }: ReferelFriendsProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#0F141F",
        padding: "20px",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography color="#EAEAEA" variant="heading2">
            Refered Friends
          </Typography>
          <IconButton
            aria-label="toggle password visibility"
            onClick={onClick}
            edge="end"
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
              right: 0,
            }}
          >
            <CancelButtonIcon />
          </IconButton>
        </Box>
      </Box>
      {Array(13)
        .fill(0)
        .map(() => {
          return (
            <Friends
              isMetrics={false}
              friendName="Salt.Mine#69"
              mining="Mining for 53:22"
            />
          );
        })}
    </Box>
  );
};
