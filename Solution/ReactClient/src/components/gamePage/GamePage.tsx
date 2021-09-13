import React, { FC } from 'react';
import { GameModel } from 'Shared';
import Game from 'components/game/Game';

const GamePage: FC = () =>
{
    const model: GameModel = {
        id: ""
    }

    return (
        <Game
            model={model}
        />
    );
}

export default GamePage;
