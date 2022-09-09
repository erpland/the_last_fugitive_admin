import { AlertColor } from "@mui/material";
import React, { SetStateAction } from "react";

export interface AlertType {
  isOpen: boolean;
  type: "error" | "success";
}
export interface UtilsContextType {
  setIsLoader: React.Dispatch<SetStateAction<boolean>>;
  setAlert: React.Dispatch<SetStateAction<AlertType>>;
  children?: React.ReactNode;
}
export interface AdminDetailsType {
  email: string;
  password: string;
}
export interface useAuthType {
  authed: any;
  login: (details: AdminDetailsType) => any;
  logout: () => void;
}
export interface AdminContextType {
  token: string | null;
  login: (details: AdminDetailsType) => void;
  logout: () => void;
  children?: React.ReactNode;
}
export interface PlayerType {
  start_position: number[];
  startDirection: string;
}
export interface EnimiesType {
  code: number;
  start_position: number[];
  startDirection: string;
}
export interface StepCapType {
  code: number;
  step: number;
}
export interface LevelType {
  _id?: string;
  code: number;
  map: number[][];
  player: PlayerType;
  enemies: EnimiesType[];
  step_cap: StepCapType[];
  diffculty: number;
  end_point: number[];
}

export const emptyLevel = {
  code: 0,
  map: [...Array(4).fill([...Array(8).fill(0)])],
  player: {
    start_position: [0, 0],
    startDirection: "RIGHT",
  },
  enemies: [
    {
      code: 0,
      start_position: [0, 7],
      startDirection: "LEFT",
    },
  ],
  step_cap: [
    {
      code: 3,
      step: 10,
    },
    {
      code: 3,
      step: 15,
    },
  ],
  diffculty: 1,
  end_point: [2, 7],
};
