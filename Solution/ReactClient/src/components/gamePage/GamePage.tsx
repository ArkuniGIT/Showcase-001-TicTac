import React, { FC } from 'react';
import { GameModel, GameState } from 'shared';
import Game from 'components/game/Game';

const GamePage: FC = () =>
{
    const model: GameModel = {
        $id: "Game-ID",
        matchId: "Match-ID",
        state: GameState.Playing,
        board: new Array(9).fill(-1),
        activeUserIndex: 0,
        users: ["userA", "userB"]
    }

    return (
        <Game
            model={model}
        />
    );
}

export default GamePage;
