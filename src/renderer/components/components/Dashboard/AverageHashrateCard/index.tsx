import { DashboardCard } from "renderer/components/atoms/Dashboard/DashboardCard";
import { PlayIcon } from "renderer/components/atoms/Dashboard/DashboardCardIcons/PlayIcon";

type Props = {};

export const AverageHashrateCard = (props: Props) => {
  return (
    <DashboardCard
      cardTitle="Average Hashrate(24h)"
      cardInfo=""
      cardImgSrc="/assets/Illustrations/DM.webp"
      LinkHoverTitle="Start Mining"
      LinkIcon={PlayIcon}
      LinkPath=""
    />
  );
};
