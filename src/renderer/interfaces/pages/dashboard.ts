import { FC } from "react";

export interface DashboardRoute {
  name: string;
  ref: string;
  component: FC;
  visible: boolean;
}
