import { Analytics } from "renderer/components/dashboard/analytics/Analytics";
import { GameRoom } from "renderer/components/dashboard/gameroom/Gameroom";
import { GiftCards } from "renderer/components/dashboard/giftcards/GiftCards";
import { Mining } from "renderer/components/dashboard/mining/Mining";
import { Friends } from "renderer/components/dashboard/friends/Friends";
import { Workers } from "renderer/components/dashboard/workers/Workers";
import { Withdraw } from "renderer/components/dashboard/withdraw/Withdraw";
import { Referrals } from "renderer/components/dashboard/referrals/Referrals";
import { DashboardRoute } from "renderer/interfaces/pages/dashboard";

export const dashboardRoutes: DashboardRoute[] = [
  { name: "Dashboard", ref: "", component: Analytics, visible: true },
  { name: "Start Mining", ref: "/mining", component: Mining, visible: true },
  {
    name: "Gift Cards",
    ref: "/giftcards",
    component: GiftCards,
    visible: false,
  },
  { name: "Game Room", ref: "/gameroom", component: GameRoom, visible: true },
  { name: "Friends", ref: "/friends", component: Friends, visible: true },
  { name: "Workers", ref: "/workers", component: Workers, visible: false },
  { name: "Withdraw", ref: "/withdraw", component: Withdraw, visible: true },
  {
    name: "Referrals",
    ref: "/referrals",
    component: Referrals,
    visible: true,
  },
];
