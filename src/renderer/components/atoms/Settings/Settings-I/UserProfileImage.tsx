type Props = {
  src: string;
};
import { Box } from "@mui/material";
const UserProfileImage = ({ src }: Props) => {
  return (
    <Box sx={{ maxWidth: "96px", maxHeight: "96px" }}>
      <img
        src={
          src || "/assets/Illustrations/blank-profile-picture-973460_640 2.svg"
        }
        alt=""
        style={{ maxWidth: "80px", maxHeight: "80px" }}
      />
    </Box>
  );
};

export default UserProfileImage;
