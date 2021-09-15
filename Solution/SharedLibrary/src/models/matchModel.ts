import { MatchState } from "../enums/matchState";
import { GameModel } from "./gameModel";

export interface MatchModel
{
    $id: string;

    gameId?: string;
    game?: GameModel;
    
    users: string[];
    state: MatchState;
}