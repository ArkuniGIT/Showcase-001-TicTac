import { Injectable } from '@nestjs/common';
import { AppwriteService } from 'controllers/appwrite/appwrite.service';
import { MatchModel, MatchState } from "shared";

@Injectable()
export class MatchService
{
    constructor(private appwriteService: AppwriteService) { }
    
    async FindAllOpen(): Promise<MatchModel[]>
    {
        return [];
    }
    
    async CreateNew(userId: string): Promise<MatchModel>
    {
        return {
            id: "New-Match-ID",
            gameId: "New-Game-ID",
            state: MatchState.Open
        };
    }
}
