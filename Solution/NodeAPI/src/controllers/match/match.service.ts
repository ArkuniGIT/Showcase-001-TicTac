import { Injectable } from '@nestjs/common';
import { AppwriteService } from 'controllers/appwrite/appwrite.service';
import { MatchModel, MatchState } from "shared";

@Injectable()
export class MatchService
{
    constructor(private appwriteService: AppwriteService) { }

    private async getMatch(matchId: string): Promise<MatchModel>
    {
        const { database } = this.appwriteService;

        const matchCollection = await this.appwriteService.getCollectionByName("matches");
        const matchDocument = await database.getDocument<MatchModel>(matchCollection.$id, matchId);
        
        if (!matchDocument)
            throw new Error("Match does not exist.");

        return matchDocument;
    }

    async FindAllOpen(): Promise<MatchModel[]>
    {
        const { database } = this.appwriteService;

        const matchCollection = await this.appwriteService.getCollectionByName("matches");
        const matchList = await database.listDocuments<any>(matchCollection.$id, [`state!=${MatchState.Closed}`], 100, 0);
        const matchDocuments = matchList.documents;
        
        return matchDocuments;
    }

    async CreateNew(userId: string): Promise<MatchModel>
    {
        const { database } = this.appwriteService;

        const match: MatchModel = {
            $id: undefined,
            gameId: null,
            users: [userId],
            state: MatchState.Open,
        };
        const matchCollection = await this.appwriteService.getCollectionByName("matches");
        const matchDocument = await database.createDocument(matchCollection.$id, match, ['*'], []);

        return matchDocument as any;
    }

    async Join(matchId: string, userId: string): Promise<MatchModel | null>
    {
        const { database } = this.appwriteService;

        const matchCollection = await this.appwriteService.getCollectionByName("matches");
        const matchDocument = await this.getMatch(matchId);

        matchDocument.state = MatchState.Active;
        matchDocument.users.push(userId);

        //const readPermissions = matchDocument.users.map(x => `user:${x}`);
        database.updateDocument(matchCollection.$id, matchDocument.$id, matchDocument, ['*'], []);

        return matchDocument as any;
    }
}
