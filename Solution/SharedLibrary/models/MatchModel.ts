import { MatchState } from "enums/MatchState";
import { GameModel } from "index";

export interface MatchModel
{
    $id: string;

    gameId?: string;
    game?: GameModel;
    
    users: string[];
    state: MatchState;
}