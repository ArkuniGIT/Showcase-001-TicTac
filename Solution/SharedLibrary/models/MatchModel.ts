import { MatchState } from "enums/MatchState";

export interface MatchModel
{
    id: string;
    gameId: string;
    state: MatchState;
}