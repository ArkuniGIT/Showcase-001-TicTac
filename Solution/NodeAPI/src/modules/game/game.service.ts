import { Injectable } from '@nestjs/common';
import { getEnv } from 'utility/env/getEnv';
import { AccountService } from 'modules/account/account.service';
import { AppwriteService } from 'modules/appwrite/appwrite.service';
import { GameModel, GameState, MatchModel, MatchState } from "shared";
import { takeTurn } from "shared/src/actions/game/takeTurn";
import { PointModel } from 'shared/src/models/pointModel';
import { match } from 'assert';

@Injectable()
export class GameService
{
    constructor(
        private appwriteService: AppwriteService,
        private accountService: AccountService,
    ) { }

    async Get(gameId: string): Promise<GameModel>
    {
        const { database } = this.appwriteService;
        const env = getEnv();

        const gameDocument = await database.getDocument<GameModel>(env.databaseGameCollectionId, gameId);
        if (!gameDocument)
            throw new Error("Game does not exist.");

        return gameDocument;
    }

    async TakeTurn(gameId: string, point: PointModel): Promise<GameModel>
    {
        const { database } = this.appwriteService;
        const env = getEnv();

        const gameDocument = await this.Get(gameId);
        const account = await this.accountService.getAccount();

        takeTurn(gameDocument, account.$id, point);

        this.appwriteService.database.updateDocument(env.databaseGameCollectionId, gameDocument.$id, gameDocument);

        const matchDocument = await database.getDocument<MatchModel>(env.databaseMatchCollectionId, gameDocument.matchId);

        if (gameDocument.state === GameState.GameOver)
        {
            matchDocument.winnerUserId = gameDocument.winnerUserId;
            matchDocument.state = MatchState.Closed;
        }
        else
        {
            matchDocument.activeUserId = gameDocument.activeUserId;
        }

        await database.updateDocument(env.databaseMatchCollectionId, matchDocument.$id, matchDocument);

        return gameDocument;
    }
}
