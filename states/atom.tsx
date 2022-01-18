import { atom } from "recoil";

export const defaultState = atom<any>({
  key: "defaultState",
  default: ""
})