import { Button, Card, CardContent, Divider, Typography } from '@mui/material';
import Board from 'components/board/Board';
import { FC, Fragment } from 'react';
import { GameModel, GameState, MatchModel } from 'shared';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import styles from "./Game.module.css";
import BoardSpace, { BoardSpaceState } from 'components/boardSpace/BoardSpace';
import { useApi } from 'hooks/useApi';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from 'state/accountState';
import { getUserIndex } from 'shared/src/actions/game/getUserIndex';

export interface GameProps
{
    model: GameModel;
}

const Game: FC<GameProps> = (props) =>
{
    const { model } = props;

    const [user] = useRecoilState(userState);
    const takeTurnRequest = useApi();

    const onClick = (x: number, y: number) => 
    {
        takeTurnRequest.start(() =>
        {
            return axios
                .post<MatchModel>("/game/take-turn", { gameId: model.$id, point: { x, y } })
                .then(() =>
                {

                });
        })
    }
    
    const getBoardSpaceState = (index: number) =>
    {
        if (index === -1)
            return BoardSpaceState.Clear;

        let userGameIndex = getUserIndex(model, user.$id);

        return userGameIndex === index ? BoardSpaceState.Player : BoardSpaceState.Opponent; 
    }

    let label = "";
    let disabled = true;

    if (model.state === GameState.Playing)
    {
        if (model.activeUserId === user.$id)
        {
            label = "It is your turn!"
            disabled = false;
        }
        else
        {
            label = "Waiting for your turn."
        }
    }
    else if (model.state === GameState.GameOver)
    {
        if (!model.winnerUserId)
        {
            label = "Game ended in a draw."
        }
        else if (model.winnerUserId === user.$id)
        {
            label = "You won the game!"
        }
        else
        {
            label = "You lost the game."
        }
    }

    return (
        <Card>
            <CardContent>
                <Typography variant="h4" align="center" gutterBottom>
                    {label}
                </Typography>
                <div className={styles.boardContainer}>
                    <Board>
                        {model.board.map((value, i) => (
                            <Fragment key={i}>
                                <BoardSpace 
                                    x={i % 3} 
                                    y={Math.floor(i / 3)} 
                                    state={getBoardSpaceState(value)} 
                                    disabled={disabled}
                                    onClick={onClick} 
                                />
                            </Fragment>
                        ))}
                    </Board>
                </div>
            </CardContent>
            <Divider />
            <CardContent>
                <Link to="/">
                    <Button variant="contained" color="inherit" startIcon={<ArrowBack />}>
                        Back to game list
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
}

export default Game;