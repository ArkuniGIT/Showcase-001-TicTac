import { Injectable } from '@nestjs/common';
import { MatchModel } from "shared";

@Injectable()
export class MatchService
{
    async getAllOpen(): Promise<MatchModel[]>
    {
        return [];
    }
}
