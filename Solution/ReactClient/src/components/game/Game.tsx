import Board from 'components/board/Board';
import React, { FC } from 'react';
import { GameModel } from 'shared';

export interface GameProps
{
    model: GameModel;
}

const Game: FC<GameProps> = () =>
{
    return (
        <Board />
    );
}

export default Game;