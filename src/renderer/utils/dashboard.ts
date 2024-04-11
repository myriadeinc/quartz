import { Analytics } from "renderer/components/dashboard/analytics/Analytics";
import { GameRoom } from "renderer/components/dashboard/gameroom/GameRoom";
import { GiftCards } from "renderer/components/dashboard/giftcards/GiftCards";
import { Mining } from "renderer/components/dashboard/mining/Mining";
import { Friends } from "renderer/components/dashboard/friends/Friends";
import { Workers } from "renderer/components/dashboard/workers/Workers";
import { Withdraw } from "renderer/components/dashboard/withdraw/Withdraw";
import { Referrals } from "renderer/components/dashboard/referrals/Referrals";
import { DashboardRoute } from "renderer/interfaces/pages/dashboard";

export const dashboardRoutes: DashboardRoute[] = [
  {
    name: "Dashboard",
    alt: "Dashboard Room",
    ref: "",
    component: Analytics,
    visible: true,
    icon: "/assets/svg/Dashboard-Icon.svg",
  },
  {
    name: "Start Mining",
    alt: "Start Mining Room",
    ref: "/mining",
    component: Mining,
    visible: true,
    icon: "/assets/svg/Start-Mining-Icon.svg",
  },
  {
    name: "Gift Cards",
    alt: "Gift Cards Room",
    ref: "/giftcards",
    component: GiftCards,
    visible: false,
    icon: "/assets/svg/Gift-Cards-Icon.svg",
  },
  {
    name: "Game",
    alt: "Game Rooms",
    ref: "/gameroom",
    component: GameRoom,
    visible: true,
    icon: "/assets/svg/Game-Room-Icon.svg",
  },
  {
    name: "Friends",
    alt: "Friends Room",
    ref: "/friends",
    component: Friends,
    visible: false,
    icon: "/assets/svg/Friends-Icon.svg",
  },
  {
    name: "Workers",
    ref: "/workers",
    component: Workers,
    visible: false,
    icon: "/",
  },
  {
    name: "Withdraw",
    alt: "Withdraw Amount",
    ref: "/withdraw",
    component: Withdraw,
    visible: true,
    icon: "/assets/svg/Withdraw-Icon.svg",
  },
  {
    name: "Referrals",
    ref: "/referrals",
    component: Referrals,
    visible: false,
    icon: "/assets/svg/Referrals-Icon.svg",
  },
];
