import Card from "@mui/material/Card";
import { useState } from "react";
import { LinkHoverCardItem } from "renderer/components/components/Dashboard/CardHoverLinkItem";
import { CardTitle } from "renderer/components/molecules/Dashboard-I/CardTitle";
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
    <Card
      style={{
        backgroundColor: "#0F141F",
        backgroundImage: "none",
        backgroundSize: "cover",
        width: "100%",
        height: "288px",
        padding: "20px 0px 0px 20px",
        boxSizing: "border-box",
        marginTop: "20px",
        zIndex: 2,
        borderRadius: "7px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <CardTitle cardInfo={cardInfo} cardTitle={cardTitle} />
      <Box
        style={{
          maxWidth: "100%",
          height: "220px",
          objectFit: "cover",
          position: "absolute",
          top: "60px",
          right: "-1rem",
        }}
      >
        <img
          src={cardImgSrc}
          alt="Your Image Alt Text"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            zIndex: 3,
          }}
        />
      </Box>
    </Card>
  );
}
