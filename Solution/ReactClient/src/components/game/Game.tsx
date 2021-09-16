import { Button, Card, CardContent, Divider } from '@material-ui/core';
import Board from 'components/board/Board';
import { FC } from 'react';
import { GameModel } from 'shared';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import styles from "./Game.module.css";

export interface GameProps
{
    model: GameModel;
}

const Game: FC<GameProps> = () =>
{
    return (
        <Card>
            <CardContent>
                <div className={styles.boardContainer}>
                    <Board />
                </div>
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