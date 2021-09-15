import { MatchModel } from "index";

export interface GetAllMatchesResponse 
{
    activeMatches: MatchModel[];
    openMatches: MatchModel[];
}