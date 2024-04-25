import { MiningInstructionsIcon } from "renderer/components/atoms/StartMining-I/MiningIcons";
import { IFriend, IMiner, IMiner2 } from "renderer/interfaces/pages/dashboard";
import { MenuIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons";
// import { GameroomInstructionsIcon } from "renderer/components/atoms/GameRoom-I/GameRoomIcons";
import { StartMiningIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components";
import {
  MCSpendIcon,
  ProgressIcon,
  TrophyIcon,
} from "renderer/components/atoms/GameRoom-I/GameRoomIcons/components";
const MINER_ARRAY: IMiner[] = [
  {
    src: "https://i.ibb.co/TmDbVbK/Referrals-Icon-Start-mining-Page.png",
    title:
      "Refer your friends to Myriade and get them to mine at the same as you",
    alt: "refer image",
  },
  {
    src: "https://i.ibb.co/TBRNg3H/Mining-Allocation-Icon.png",
    title: "Choose your custom mining allocation below",
    alt: "custom mining",
  },
  {
    src: "https://i.ibb.co/q1kGQ85/Start-Mining-Icon-smpage.png",
    title: " Press play to start mining",
    alt: "start mining",
  },
  {
    src: "https://i.ibb.co/DfvgBCC/Bonus-Icon.png",
    title: "Earn a bonus at every level",
    alt: "bonus image",
  },
];
const GAME_INSTRUCTIONS_DATA = [
  {
    InstructionIcon: (
      <StartMiningIcon rectangleColor="transparent" pathColor="#EAEAEA" />
    ),
    title: "Earn MC from mining",
    alt: "earn mc icon",
  },
  {
    InstructionIcon: <MCSpendIcon />,
    title: "Spend MC by buying tickets for drawings",
    alt: "spend mc",
  },
  {
    InstructionIcon: <ProgressIcon />,
    title: "Wait for the drawing to fill up for the countdown to begin",
    alt: "drawing icon",
  },
  {
    InstructionIcon: <TrophyIcon />,
    title: "A winner will be selected upon completion of the countdown",
    alt: "winner icon",
  },
];
const MINER_INSTRUCTIONS_ARRAY: IMiner2[] = [
  {
    InstructionIcon: <MiningInstructionsIcon name="ReferelsIcon" />,
    title:
      "Refer your friends to Myriade and get them to mine at the same as you",
    alt: "refer image",
  },
  {
    InstructionIcon: <MiningInstructionsIcon name="MiningAllocation" />,
    title: "Choose your custom mining allocation below",
    alt: "custom mining",
  },
  {
    InstructionIcon: <StartMiningIcon />,
    title: " Press play to start mining",
    alt: "start mining",
  },
  {
    InstructionIcon: <MiningInstructionsIcon name="BonusIcon" />,
    title: "Earn a bonus at every level",
    alt: "bonus image",
  },
];
const MINER_STATS_ARRAY = [
  { heading: "Current Hashrate", isDivider: true },
  {
    heading: "Total Mining Time",
    time: "11:22:51:00",
  },
  {
    heading: "Mining Bonus from friends",
    time: "0.8%",
  },
  {
    heading: "MC Earned from Referels",
    time: "923,415MC",
  },
  {
    heading: "Total MC Earned",
    time: "473,581MC",
  },
  { heading: "Accepted Share (XP)", time: "3,023,414,823" },
];

const DUMMY_FRIENDS_DATA: readonly IFriend[] = [
  {
    name: "sfd",
    status: "mining",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "mining",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "offline",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "offline",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "offline",
    avatar: "A",
  },
  {
    name: "sfd",
    status: "offline",
    avatar: "A",
  },
];
const MINING_ALLOCATION_WIDGET_BOX = [
  {
    label: "Unsused Points",
    points: "00",
  },
  {
    label: "MC",
    points: "20",
  },
  {
    label: "Gift Card",
    points: "50",
  },
  {
    label: "XMR",
    points: "10",
  },
];
export {
  DUMMY_FRIENDS_DATA,
  MINER_ARRAY,
  MINER_STATS_ARRAY,
  MINER_INSTRUCTIONS_ARRAY,
  MINING_ALLOCATION_WIDGET_BOX,
  GAME_INSTRUCTIONS_DATA,
};
