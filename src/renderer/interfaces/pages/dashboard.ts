import { FC } from "react";

export interface DashboardRoute {
  name: string;
  ref: string;
  component: FC;
  visible: boolean;
}

export interface Miner {
  id: string;
  email: string;
  name: string;
  shortId: string;
  mcBalance: number;
  xmrBalance: number;
  hashrates: number[];
  avgHashrate: string;
}

export interface IRaffle {
  id: number;
  public: {
    description: string;
    endTime: string;
    entryPrice: number;
    expiry: number;
    numTickets: number;
    oneWinner: boolean;
    participants: number;
    prizeAmount: number;
    title: string;
    totalTickets: number;
    type?: string;
  };
}

export interface IRawHistory {
  amount: number;
  contentId: number;
  purchased: number;
  status: number;
  tickets: number;
  title: string;
  winner: string;
}

export interface IHistory {
  title: string;
  tickets: number;
  amount: number;
  status: number;
  purchased: number;
  winner: string;
}

export interface IWithdrawHistory {
  date: string;
  type: string;
  amount: number;
  status: number;
  address: string;
}

export interface IFriend {
  id: number;
  name: string;
  status: string;
  avatar: string;
}
