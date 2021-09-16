import { FC } from 'react';
import { GameModel } from 'shared';
import Game from 'components/game/Game';
import { useParams } from 'react-router-dom';
import { useAppwriteRealtime } from 'hooks/useAppwriteRealtime';
import useSWR from 'swr';
import { gameFetcher } from 'utility/fetchers/gameFetcher';
import { CircularProgress } from '@material-ui/core';

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
            {!matchReq.data &&
                <CircularProgress />
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
