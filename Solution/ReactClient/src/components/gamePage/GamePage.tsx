import { FC } from 'react';
import { GameModel } from 'shared';
import Game from 'components/game/Game';
import { useParams } from 'react-router-dom';
import { useAppwriteRealtime } from 'hooks/useAppwriteRealtime';
import useSWR from 'swr';
import { gameFetcher } from 'utility/fetchers/gameFetcher';
import { CircularProgress } from '@mui/material';
import { Alert } from '@mui/lab';

const GamePage: FC = () =>
{
    const params = useParams<{ id: string }>();
    const matchReq = useSWR<GameModel>(`game/${params.id}`, gameFetcher);

    useAppwriteRealtime<GameModel>(`documents.${params.id}`, (res) =>
    {
        matchReq.mutate();
    });

    return (
        <>
            {!matchReq.data && !matchReq.error &&
                <CircularProgress />
            }
            {matchReq.error &&
                <Alert severity="error">
                    An error happened.
                </Alert>
            }
            {matchReq.data &&
                <Game
                    model={matchReq.data}
                />
            }
        </>
    );
}

export default GamePage;
