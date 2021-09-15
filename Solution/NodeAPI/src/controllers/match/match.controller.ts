import { Headers, Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { GetAllMatchesResponse, MatchModel } from 'shared';
import { MatchService } from './match.service';

@Controller("match")
export class MatchController
{
    constructor(private readonly matchService: MatchService) { }

    @Get("all")
    async all() : Promise<GetAllMatchesResponse>
    {
        const activeMatches = await this.matchService.FindActive();
        const openMatches = await this.matchService.FindOpen();

        return {
            activeMatches,
            openMatches
        };
    }

    @Post("create")
    async create() : Promise<MatchModel>
    {
        return this.matchService.CreateNew();
    }

    @Post("join")
    async join(
        @Body('matchId') matchId: string
    )
        : Promise<MatchModel>
    {
        return this.matchService.Join(matchId);
    }
}
