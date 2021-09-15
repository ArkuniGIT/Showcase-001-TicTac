import { MatchState } from "enums/matchState";
import { GameModel } from "index";

export interface MatchModel
{
    $id: string;

    gameId?: string;
    game?: GameModel;
    
    users: string[];
    state: MatchState;
}