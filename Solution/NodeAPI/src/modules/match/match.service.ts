import { Injectable } from '@nestjs/common';
import { AccountService } from 'modules/account/account.service';
import { AppwriteService } from 'modules/appwrite/appwrite.service';
import { MatchModel, MatchState } from "shared";

@Injectable()
export class MatchService
{
    constructor(
        private appwriteService: AppwriteService,
        private accountService: AccountService,
    ) { }
    
    async CreateNew(): Promise<MatchModel>
    {
        const { database } = this.appwriteService;

        const account = await this.accountService.getAccount();

        const match: MatchModel = {
            $id: undefined,
            gameId: null,
            users: [account.$id],
            state: MatchState.Open,
        };
        const matchCollection = await this.appwriteService.getCollectionByName("matches");
        const matchDocument = await database.createDocument(matchCollection.$id, match, ['*'], []);

        return matchDocument as any;
    }

    async Join(matchId: string): Promise<MatchModel | null>
    {
        const { database } = this.appwriteService;

        const account = await this.accountService.getAccount();

        const matchCollection = await this.appwriteService.getCollectionByName("matches");
        const matchDocument = await database.getDocument<MatchModel>(matchCollection.$id, matchId);
        
        if (!matchDocument)
            throw new Error("Match does not exist.");

        matchDocument.state = MatchState.Active;
        matchDocument.users.push(account.$id);

        const readPermissions = matchDocument.users.map(x => `user:${x}`);
        database.updateDocument(matchCollection.$id, matchDocument.$id, matchDocument, readPermissions, []);

        console.log(readPermissions);

        return matchDocument as any;
    }
}
