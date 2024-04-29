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
    <Box
      sx={{
        width: { md: "90%", xl: "90%" },
        margin: "0px 15px 0 15px",
        height: "63px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
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
