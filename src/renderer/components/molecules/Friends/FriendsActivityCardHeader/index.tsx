import { Box, IconButton } from "@mui/material";
import { AddFriendIcon } from "renderer/components/atoms/FriendsWorkers/AddFriendIcon";
import Typography from "renderer/components/atoms/TextStyles";

type FriendsActivityCardHeaderProps = {
  friends: number;
};

export const FriendsActivityCardHeader = ({
  friends,
}: FriendsActivityCardHeaderProps) => {
  return (
    <Box sx={{ width: "438px", height: "63px" }}>
      <Typography variant="body" color="#EAEAEA">
        #Friends:{friends}
      </Typography>
      <IconButton
        aria-label="toggle password visibility"
        // onClick={onToggleVisible}
        edge="end"
      >
        <AddFriendIcon rectangleColor={"transparent"} pathColor={"#EAEAEA"} />
      </IconButton>
    </Box>
  );
};
