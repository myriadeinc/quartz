import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { LinkHoverCardItem } from "renderer/components/components/Dashboard/CardHoverLinkItem";
import { CardTitle } from "renderer/components/molecules/Dashboard-I/CardTitle";
import Typography from "../TextStyles";
import { Box } from "@mui/material";
interface dashboardCardProps {
  cardTitle: string;
  cardInfo: string;
  cardImgSrc: string;
  LinkIcon: React.ElementType;
  LinkHoverTitle: string;
  LinkPath: string;
}
export function DashboardCard({
  cardInfo,
  cardTitle,
  cardImgSrc,
  LinkIcon,
  LinkHoverTitle,
  LinkPath,
}: dashboardCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  console.log("isHovered", isHovered);
  return (
    // <Card
    //   sx={{
    //     maxWidth: 478,
    //     maxHeight: 288,
    //     backgroundColor: "#0F141F",
    //     position: "relative",
    //     borderRadius: "7px",
    //     overflow: "hidden",
    //     opacity: isHovered ? 0 : 1,
    //   }}
    //   onMouseEnter={() => setIsHovered(true)}
    //   onMouseLeave={() => setIsHovered(false)}
    // >
    //   <CardTitle cardInfo={cardInfo} cardTitle={cardTitle} />
    //   <CardMedia
    //     sx={{ height: 220, width: "100%", alignSelf: "end" }}
    //     alt
    //     title="green iguana"
    //     image={cardImgSrc}
    //   />
    //   {true && (
    //     <LinkHoverCardItem
    //       LinkIcon={LinkIcon}
    //       linkItemName={LinkHoverTitle}
    //       linkPath={LinkPath}
    //       isHovered={isHovered}
    //     />
    //   )}
    // </Card>
    <Card
      style={{
        backgroundColor: "#0F141F",
        backgroundImage: "none",
        backgroundSize: "cover",
        width: "100%", // Set card width to 100% to make it responsive
        height: "288px",
        padding: "0px",
        marginTop: "20px",
        marginRight: "10px",
        zIndex: 2,
        borderRadius: "7px",
        display: "flex",
        flexDirection: "column", // Ensure child elements stack vertically
        justifyContent: "space-between", // Distribute space evenly between child elements
        position: "relative",
      }}
    >
      <Typography variant="body">Average Hashrate (1hr)</Typography>
      <Typography variant="heading6" color="#EAEAEA">
        {cardInfo} H/sec
      </Typography>
      <Box
        style={{
          maxWidth: "100%",
          height: "220px",
          objectFit: "cover",
          position: "absolute",
          top: "60px",
          right: "1rem",
        }}
      >
        <img
          src="/assets/img/DM.webp"
          alt="Your Image Alt Text"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 3,
          }}
        />
      </Box>
    </Card>
  );
}
