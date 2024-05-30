import { Analytics } from "renderer/components/dashboard/analytics/Analytics";
import { GameRoom } from "renderer/components/dashboard/gameroom/GameRoom";
import { GiftCards } from "renderer/components/dashboard/giftcards/GiftCards";
import { Mining } from "renderer/components/dashboard/mining/Mining";
import { Friends } from "renderer/components/dashboard/friends/Friends";
import { Workers } from "renderer/components/dashboard/workers/Workers";
import { Withdraw } from "renderer/components/dashboard/withdraw/Withdraw";
import { Referrals } from "renderer/components/dashboard/referrals/Referrals";
import { DashboardRoute } from "renderer/interfaces/pages/dashboard";
import { DashboardIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/DashboardIcon";
import { StartMiningIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/StartMiningIcon";
import { GiftcardIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/GiftcardIcon";
import { GameroomIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/GameroomIcon";
import { FriendsIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/FriendsIcon";
import { WorkersIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/WorkersIcon";
import { WithdrawIcon } from "renderer/components/atoms/Settings/Settings-II/MenuIcons/components/WithdrawIcon";
import { ReferelIcon } from "renderer/components/atoms/Dashboard/DashboardCardIcons/ReferelIcon";

export const dashboardRoutes: DashboardRoute[] = [
  {
    name: "Dashboard",
    alt: "Dashboard Room",
    ref: "",
    component: Analytics,
    visible: true,
    Icon: DashboardIcon,
  },
  {
    name: "Start Mining",
    alt: "Start Mining Room",
    ref: "/mining",
    component: Mining,
    visible: true,
    Icon: StartMiningIcon,
  },
  {
    name: "Gift Cards",
    alt: "Gift Cards Room",
    ref: "/giftcards",
    component: GiftCards,
    visible: true,
    Icon: GiftcardIcon,
  },
  {
    name: "Game Room",
    alt: "Game Rooms",
    ref: "/gameroom",
    component: GameRoom,
    visible: true,
    Icon: GameroomIcon,
  },
  {
    name: "Friends",
    alt: "Friends Room",
    ref: "/friends",
    component: Friends,
    visible: true,
    Icon: FriendsIcon,
  },
  {
    name: "Workers",
    ref: "/workers",
    component: Workers,
    visible: true,
    Icon: WorkersIcon,
  },
  {
    name: "Withdraw",
    alt: "Withdraw Amount",
    ref: "/withdraw",
    component: Withdraw,
    visible: true,
    Icon: WithdrawIcon,
  },
  {
    name: "Referrals",
    ref: "/referrals",
    component: Referrals,
    visible: true,
    Icon: ReferelIcon,
  },
];
