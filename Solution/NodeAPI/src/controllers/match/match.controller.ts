import { Param } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { MatchModel } from 'shared';
import { MatchService } from './match.service';

@Controller("match")
export class MatchController
{
    constructor(private readonly matchService: MatchService) { }

    @Get("all")
    async getAll(): Promise<MatchModel[]>
    {
        return this.matchService.FindAllOpen();
    }

    @Post("")
    async postNew(
        @Param('userId') userId: string
    )
        : Promise<MatchModel>
    {
        return this.matchService.CreateNew(userId);
    }
}
