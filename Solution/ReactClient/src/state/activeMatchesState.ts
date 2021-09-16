import { atom } from "recoil";
import { MatchModel } from "shared";

export const activeMatchesState = atom<MatchModel[]>({
    key: 'activeMatchesState', 
    default: [],
  });