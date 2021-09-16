import { FC } from 'react';
import { MatchModel, databaseConstants } from 'shared';
import MatchList from '../matchList/MatchList';
import { Button, Card, CardContent, CardHeader, CircularProgress, Divider, IconButton } from '@material-ui/core';
import useSWR from 'swr'
import AddIcon from '@material-ui/icons/Add';
import { openMatchesFetcher } from 'utility/fetchers/openMatchesFetcher';
import { activeMatchesFetcher } from 'utility/fetchers/activeMatchesFetcher';
import { useAppwriteRealtime } from 'hooks/useAppwriteRealtime';
import { useApiPost } from 'hooks/useApiPost';

const MatchPage: FC = () =>
{
    const activeMatchesReq = useSWR<MatchModel[]>('activeMatches', activeMatchesFetcher);
    const openMatchesReq = useSWR<MatchModel[]>('openMatches', openMatchesFetcher);
    const createMatchReq = useApiPost("/match/create", null, () =>
    {
        openMatchesReq.mutate();
    });

    useAppwriteRealtime<MatchModel>(`collections.${databaseConstants.matchCollectionId}.documents`, (res) =>
    {
        activeMatchesReq.mutate();
        openMatchesReq.mutate();
    });

    return (
        <>
            <Card>
                <CardHeader
                    title="Active games"
                />
                <Divider />
                {activeMatchesReq.data &&
                    <MatchList
                        matches={activeMatchesReq.data}
                        emptyLabel={"You don't have any active games."}
                    />
                }
                {activeMatchesReq.isValidating && !activeMatchesReq.data &&
                    <CardContent>
                        <CircularProgress />
                    </CardContent>
                }
            </Card>
            <br />
            <Card>
                <CardHeader
                    title="Open games"
                    action={
                        <IconButton >
                            <AddIcon />
                        </IconButton>
                    }
                />
                <Divider />
                {openMatchesReq.data &&
                    <MatchList
                        matches={openMatchesReq.data}
                        emptyLabel={"There are no open games."}
                    />
                }
                {openMatchesReq.isValidating && !openMatchesReq.data &&
                    <CardContent>
                        <CircularProgress />
                    </CardContent>
                }
                <Divider />
                <CardContent>
                    <Button variant="contained" color="primary" onClick={createMatchReq.invoke} disabled={createMatchReq.loading}>
                        Create new game
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}

export default MatchPage;

