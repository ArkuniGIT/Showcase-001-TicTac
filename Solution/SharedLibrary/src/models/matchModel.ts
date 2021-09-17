import { MatchState } from "../enums/matchState";

export interface MatchModel
{
    $id: string;

    gameId?: string;
    
    winnerUserId?: string;
    
    users: string[];
    state: MatchState;
}