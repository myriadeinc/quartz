import { Box, CardHeader, Divider } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "renderer/components/atoms/TextStyles";
import { FriendsMolecule } from "renderer/components/molecules/Friends/Friends";
import { FriendsActivityCardHeader } from "renderer/components/molecules/Friends/FriendsActivityCardHeader";
import PrimaryButton from "renderer/components/atoms/Login/PrimaryButtons";

type Props = {
  isDashboard: boolean;
  isAnalytics?: boolean;
  padding: string;
};

export function FriendsActivityCard({ isDashboard }: Props) {
  return (
    <Card
      sx={{
        // maxWidth: 345,
        background: "transparent",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* <CardHeader
        title="Friends Activity"
        sx={{
          padding: "20px 28px 20px 20px",
        }}
      /> */}
      <Box sx={{ padding: "20px 28px 20px 20px" }}>
        <Typography variant="heading2" color="#EAEAEA">
          Friends Activity
        </Typography>
      </Box>
      <CardContent
        sx={{
          overflowY: "auto",
          padding: "0",
          paddingBottom: "20px",
        }}
      >
        <Box sx={{ borderRadius: "7px" }}>
          {!isDashboard && <FriendsActivityCardHeader />}
          {Array(13)
            .fill(0)
            .map((_, index) => (
              <>
                <FriendsMolecule
                  key={index}
                  isMetrics={false}
                  friendName="Salt.Mine#69"
                  mining="53:22"
                />
                {index !== 12 && <Divider />}
              </>
            ))}
        </Box>
      </CardContent>
      <CardActions
        sx={{ justifyContent: "center", width: "120px", alignSelf: "center" }}
      >
        <PrimaryButton
          text="View All"
          onClick={() => console.log("view all")}
        />
      </CardActions>
    </Card>
  );
}
