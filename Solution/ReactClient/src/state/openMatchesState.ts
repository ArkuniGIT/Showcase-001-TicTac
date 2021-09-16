import { atom } from "recoil";
import { MatchModel } from "shared";

export const openMatchesState = atom<MatchModel[]>({
    key: 'openMatchesState', 
    default: [],
  });