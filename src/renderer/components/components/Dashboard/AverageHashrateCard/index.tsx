import { DashboardCard } from "renderer/components/atoms/Dashboard/DashboardCard";
import { PlayIcon } from "renderer/components/atoms/Dashboard/DashboardCardIcons/PlayIcon";

type Props = {
  cardPoints: string;
};

export const AverageHashrateCard = ({ cardPoints }: Props) => {
  return (
    <DashboardCard
      cardTitle="Average Hashrate(24h)"
      cardInfo={`${cardPoints} H/sec`}
      cardImgSrc="/assets/Illustrations/DM.webp"
      LinkHoverTitle="Start Mining"
      LinkIcon={PlayIcon}
      LinkPath=""
    />
  );
};
