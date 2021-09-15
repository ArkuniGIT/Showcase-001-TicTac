import { MatchModel } from "../models/matchModel";

export interface GetAllMatchesResponse 
{
    activeMatches: MatchModel[];
    openMatches: MatchModel[];
}