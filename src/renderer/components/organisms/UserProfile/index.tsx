import { Box } from "@mui/material";
import { CustomAvatar } from "renderer/components/atoms/Settings/Settings-III/Avatar";
import { UserProfileInfo } from "renderer/components/molecules/Settings-I/UserProfileInfo";

type Props = {
  minerName: string;
  minerEmail: string;
  minerLevel: string;
};

export const UserProfile = ({ minerName, minerEmail, minerLevel }: Props) => {
  return (
    <Box sx={{ display: "flex", padding: "24px 0 0 0", width: "100%" }}>
      <Box sx={{ display: "flex", width: "100%", gap: "20px" }}>
        <CustomAvatar />
        <UserProfileInfo
          userName={minerName}
          userEmail={minerEmail}
          level={minerLevel}
        />
      </Box>
    </Box>
  );
};
