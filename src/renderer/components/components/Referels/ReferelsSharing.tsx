import { Box } from "@mui/material";
import { ReferelsInfoContainerI } from "renderer/components/atoms/Referels/ReferelsInfoContainerI";
import { ReferelsInfoContainerII } from "renderer/components/atoms/Referels/ReferelsInfoContainerII";
import { UrlContainer } from "renderer/components/atoms/Referels/UrlContainer";
import Typography from "renderer/components/atoms/TextStyles";

export const ReferelsSharing = () => {
  return (
    <Box
      sx={{
        display: "grid",
        flexDirection: "column",
        padding: "20px",
        backgroundColor: "#0F141F",
        gridTemplateColumns: {
          smm: "1fr",
          md: "1fr",
          lg: "2fr 1fr",
          xl: "2fr 1fr",
        },
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <Typography variant="heading2" color="#EAEAEA">
            Share this code with your friends:
          </Typography>
          <UrlContainer />
        </Box>
        <Box
          sx={{
            height: "-webkit-fill-available",
            paddingTop: "20px",
            alignSelf: "end",
          }}
        >
          <img
            src="/assets/Illustrations/ReferelSharingIllustration.webp"
            alt="referel sharing"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "430px",
            gap: "8px",
            paddingTop: "40px",
          }}
        >
          <Typography variant="bodySmall" color="#EAEAEA">
            Once your friends sign up with your referral code and start mining
            for MC, you will earn a comission that comes out of myriades 10%
            fee. The higher lever your friends get to and the more MC they mine
            for, the more you earn.
          </Typography>
          <Typography variant="caption" color="#8C8C8C">
            E.x. If yout friend is a Silver tier and mines 1000MC, you will earn
            10MC just for referring them
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignSelf: "end",
          gap: "22px",
          flexDirection: "column",
        }}
      >
        <ReferelsInfoContainerII
          title="Total Referral MC Earned"
          points="56412"
        />

        <ReferelsInfoContainerI title="Friends Refered" points={23} />
      </Box>
    </Box>
  );
};
