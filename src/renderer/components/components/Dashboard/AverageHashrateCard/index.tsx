import { DashboardCard } from "renderer/components/atoms/Dashboard/DashboardCard";
import { PlayIcon } from "renderer/components/atoms/Dashboard/DashboardCardIcons/PlayIcon";

type Props = {
  cardPoints: string;
  imgSrc: string;
  cardTitle: string;
  cardPointUnit: string;
};

export const AverageHashrateCard = ({
  cardPoints,
  imgSrc,
  cardTitle,
  cardPointUnit,
}: Props) => {
  return (
    <DashboardCard
      cardTitle={cardTitle}
      cardInfo={`${cardPoints} ${cardPointUnit}`}
      cardImgSrc={imgSrc}
      LinkHoverTitle="Start Mining"
      LinkIcon={PlayIcon}
      LinkPath=""
    />
  );
};
