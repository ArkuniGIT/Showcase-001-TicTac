import { Button, Card, CardActions, CardContent, Divider, IconButton } from '@material-ui/core';
import Board from 'components/board/Board';
import React, { FC } from 'react';
import { GameModel } from 'shared';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';

export interface GameProps
{
    model: GameModel;
}

const Game: FC<GameProps> = () =>
{
    return (
        <Card>
            <CardContent>
                <Board />
            </CardContent>
            <Divider />
            <CardContent>
                <Link to="/">
                    <Button variant="contained" color="primary" startIcon={<ArrowBack />}>
                        Back to game list
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}

export default Game;