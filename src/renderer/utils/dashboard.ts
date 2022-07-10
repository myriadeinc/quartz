import { Analytics } from "renderer/components/dashboard/analytics/Analytics";
import { Mining } from "renderer/components/dashboard/mining/Mining";
import { Friends } from "renderer/components/dashboard/friends/Friends";
import { Workers } from "renderer/components/dashboard/workers/Workers";
import { Withdraw } from "renderer/components/dashboard/withdraw/Withdraw";
import { Referrals } from "renderer/components/dashboard/referrals/Referrals";
import { DashboardRoute } from "renderer/interfaces/pages/dashboard";
import { Monero } from "renderer/components/dashboard/gameroom/monero/Monero";
import { GiftCards } from "renderer/components/dashboard/gameroom/giftcards/GiftCards";

export const dashboardRoutes: DashboardRoute[] = [
  { name: "Dashboard", ref: "/", component: Analytics, visible: true },
  { name: "Mining", ref: "/mining", component: Mining, visible: true },
  { name: "Game Room", ref: "/gameroom", component: Monero, visible: true },
  {
    name: "Gift Cards",
    ref: "/giftcards",
    component: GiftCards,
    visible: true,
  },
  { name: "Friends", ref: "/friends", component: Friends, visible: false },
  { name: "Workers", ref: "/workers", component: Workers, visible: false },
  { name: "Withdraw", ref: "/withdraw", component: Withdraw, visible: true },
  {
    name: "Referrals",
    ref: "/referrals",
    component: Referrals,
    visible: false,
  },
];
