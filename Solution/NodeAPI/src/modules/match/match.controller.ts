import { Headers, Param } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { Controller, Get, Post } from '@nestjs/common';
import { MatchModel } from 'shared';
import { MatchService } from './match.service';

@Controller("match")
export class MatchController
{
    constructor(private readonly matchService: MatchService) { }

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
