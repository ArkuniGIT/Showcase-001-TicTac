import { Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { GetAllMatchesResponse, MatchModel } from 'shared';
import { MatchService } from './match.service';

@Controller("match")
export class MatchController
{
    constructor(private readonly matchService: MatchService) { }

    @Get("all")
    async all(
        @Body('userId') userId: string
    )
        : Promise<GetAllMatchesResponse>
    {
        const activeMatches = await this.matchService.FindActive(userId);
        const openMatches = await this.matchService.FindOpen(userId);

        const res: GetAllMatchesResponse = 
        {
            activeMatches,
            openMatches
        }

        return res;
    }

    @Post("create")
    async create(
        @Body('userId') userId: string
    )
        : Promise<MatchModel>
    {
        return this.matchService.CreateNew(userId);
    }

    @Post("join")
    async join(
        @Body('userId') userId: string,
        @Body('matchId') matchId: string
    )
        : Promise<MatchModel>
    {
        return this.matchService.Join(matchId, userId);
    }
}
