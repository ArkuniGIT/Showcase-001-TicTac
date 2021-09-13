import { Controller, Get } from '@nestjs/common';
import { MatchModel } from 'shared';
import { MatchService } from './match.service';

@Controller("match")
export class MatchController
{
    constructor(private readonly matchService: MatchService) { }

    @Get("all")
    async getAll(): Promise<MatchModel[]>
    {
        return this.matchService.getAllOpen();
    }
}
