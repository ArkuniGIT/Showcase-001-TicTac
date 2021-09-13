import React, { FC } from 'react';
import { GameModel } from 'shared';

export interface GameProps
{
    model: GameModel;
}

const Game: FC<GameProps> = () =>
{
    return (
        <div>
            Game
        </div>
    );
}

export default Game;