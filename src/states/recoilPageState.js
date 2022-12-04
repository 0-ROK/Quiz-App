import { atom } from "recoil";
import { PageNumber } from "../enum/PageNumber";

export const pageState = atom({
  key: "pageNumber",
  default: PageNumber.START_PAGE,
});
