import { atom } from "recoil";

export const timerState = atom({
  key: "timerCount",
  default: 0,
});
