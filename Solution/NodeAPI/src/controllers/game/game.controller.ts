import { Controller, Get } from '@nestjs/common';
import { MatchModel } from 'shared';
import { GameService } from './game.service';

@Controller("game")
export class GameController
{
    constructor(private readonly gameService: GameService) { }

}
