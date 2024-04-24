import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useState } from "react";
import { LinkHoverCardItem } from "renderer/components/components/Dashboard/CardHoverLinkItem";
import { CardTitle } from "renderer/components/molecules/Dashboard-I/CardTitle";
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

  return (
    <Card
      sx={{
        maxWidth: 478,
        maxHeight: 288,
        backgroundColor: "#0F141F",
        position: "relative",
        borderRadius: "7px",
        opacity: isHovered ? 0 : 1,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardTitle cardInfo={cardInfo} cardTitle={cardTitle} />
      <CardMedia
        sx={{ height: 220, width: "100%", alignSelf: "end" }}
        alt
        title="green iguana"
        image={cardImgSrc}
      />
      {isHovered && (
        <LinkHoverCardItem
          LinkIcon={LinkIcon}
          linkItemName={LinkHoverTitle}
          linkPath={LinkPath}
        />
      )}
    </Card>
  );
}
