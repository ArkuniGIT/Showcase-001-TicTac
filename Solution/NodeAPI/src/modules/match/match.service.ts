import { Injectable } from '@nestjs/common';
import { AccountService } from 'modules/account/account.service';
import { AppwriteService } from 'modules/appwrite/appwrite.service';
import { databaseConstants, GameModel, GameState, MatchModel, MatchState, UserModel } from "shared";

@Injectable()
export class MatchService
{
    constructor(
        private appwriteService: AppwriteService,
        private accountService: AccountService
    ) { }

    async Get(matchId: string): Promise<MatchModel>
    {
        const { database } = this.appwriteService;

        const matchDocument = await database.getDocument<MatchModel>(databaseConstants.matchCollectionId, matchId);
        if (!matchDocument)
            throw new Error("Match does not exist.");

        return matchDocument;
    }

    async Create(): Promise<MatchModel>
    {
        const { database } = this.appwriteService;

        const account = await this.accountService.getAccount();

        const match: MatchModel = {
            $id: undefined,
            gameId: null,
            users: [account.$id],
            state: MatchState.Open,
        };
        const matchDocument = await database.createDocument(databaseConstants.matchCollectionId, match, ['*'], []);

        return matchDocument as any;
    }

    async Join(matchId: string): Promise<MatchModel | null>
    {
        const { database } = this.appwriteService;

        const account = await this.accountService.getAccount();
        const matchDocument = await this.Get(matchId);

        const userAlreadyJoined = matchDocument.users.includes(account.$id);
        if (userAlreadyJoined)
            throw new Error("User have already joined.");

        matchDocument.users.push(account.$id);

        const gameDocument = await this.CreateGame(account, matchDocument);

        matchDocument.gameId = gameDocument.$id;
        matchDocument.state = MatchState.Active;

        const readPermissions = matchDocument.users.map(x => `user:${x}`);
        database.updateDocument(databaseConstants.matchCollectionId, matchDocument.$id, matchDocument, readPermissions, []);

        return matchDocument;
    }

    async CreateGame(account: UserModel, matchDocument: MatchModel): Promise<GameModel>
    {
        const { database } = this.appwriteService;

        const activeUserIndex = Math.floor(Math.random() * 2);
        const activeUserId = matchDocument.users[activeUserIndex];

        const game: GameModel = {
            matchId: matchDocument.$id,
            users: [...matchDocument.users],
            board: [-1, -1, -1, -1, -1, -1, -1, -1, -1],
            state: GameState.Playing,
            activeUserId,
            winnerUserId: undefined
        }

        const readPermissions = game.users.map(x => `user:${x}`);
        const gameDocument = await database.createDocument<GameModel>(databaseConstants.gameCollectionId, game, readPermissions, []);

        return gameDocument;
    }
}
