import { IFriend, IMiner } from "renderer/interfaces/pages/dashboard";

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

export { DUMMY_FRIENDS_DATA, MINER_ARRAY, MINER_STATS_ARRAY };
