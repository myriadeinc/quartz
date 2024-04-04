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
    ref: "",
    component: Analytics,
    visible: true,
    icon: "https://i.ibb.co/BnTszWP/Dashboard-Icon.png",
  },
  {
    name: "Start Mining",
    ref: "/mining",
    component: Mining,
    visible: true,
    icon: "https://i.ibb.co/0tTkK3v/Start-Mining-Icon.png",
  },
  {
    name: "Gift Cards",
    ref: "/giftcards",
    component: GiftCards,
    visible: false,
    icon: "https://i.ibb.co/4PzR36K/Gift-Cards-Icon.png",
  },
  {
    name: "Game Room",
    ref: "/gameroom",
    component: GameRoom,
    visible: true,
    icon: "https://i.ibb.co/4jhmL45/Game-Room-Icon.png",
  },
  {
    name: "Friends",
    ref: "/friends",
    component: Friends,
    visible: false,
    icon: "https://i.ibb.co/fqKHb99/Friends-Icon.png",
  },
  {
    name: "Workers",
    ref: "/workers",
    component: Workers,
    visible: false,
    icon: "https://i.ibb.co/TcGwjm0/Workers-Icon.png",
  },
  {
    name: "Withdraw",
    ref: "/withdraw",
    component: Withdraw,
    visible: true,
    icon: "https://i.ibb.co/vLj04dJ/Withdraw-Icon.png",
  },
  {
    name: "Referrals",
    ref: "/referrals",
    component: Referrals,
    visible: false,
    icon: "https://i.ibb.co/z2ztMYg/Referrals-Icon.png",
  },
];
