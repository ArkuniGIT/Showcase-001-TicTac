import { Body, Controller, Get, Post } from '@nestjs/common';
import { GameModel, MatchModel, TakeTurnRequest } from 'shared';
import { GameService } from './game.service';

@Controller("game")
export class GameController
{
    constructor(private readonly gameService: GameService) { }

    @Post("take-turn")
    async create(@Body() request: TakeTurnRequest) : Promise<GameModel>
    {
        return this.gameService.TakeTurn(request.gameId, request.point);
    }
}
