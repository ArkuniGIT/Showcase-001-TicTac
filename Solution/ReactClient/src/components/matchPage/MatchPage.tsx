import { FC } from 'react';
import { MatchModel } from 'shared';
import MatchList from '../matchList/MatchList';
import { Button, Card, CardContent, CardHeader, CircularProgress, Divider, IconButton } from '@material-ui/core';
import useSWR from 'swr'
import axios from 'axios';
import AddIcon from '@material-ui/icons/Add';
import { openMatchesFetcher } from 'utility/fetchers/openMatchesFetcher';
import { activeMatchesFetcher } from 'utility/fetchers/activeMatchesFetcher';
import { useApiCreateMatch } from 'hooks/useApiCreateMatch';

const MatchPage: FC = () =>
{
    const activeMatchesRequest = useSWR<MatchModel[]>('activeMatches', activeMatchesFetcher);
    const openMatchesRequest = useSWR<MatchModel[]>('openMatches', openMatchesFetcher);
    const createMatch = useApiCreateMatch(() =>
    {
        openMatchesRequest.mutate();
    });

    return (
        <>
            <Card>
                <CardHeader
                    title="Active games"
                />
                <Divider />
                {activeMatchesRequest.data &&
                    <MatchList
                        matches={activeMatchesRequest.data}
                        emptyLabel={"You don't have any active games."}
                    />
                }
                {activeMatchesRequest.isValidating && !activeMatchesRequest.data &&
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
                {openMatchesRequest.data &&
                    <MatchList
                        matches={openMatchesRequest.data}
                        emptyLabel={"There are no open games."}
                    />
                }
                {openMatchesRequest.isValidating && !openMatchesRequest.data &&
                    <CardContent>
                        <CircularProgress />
                    </CardContent>
                }
                <Divider />
                <CardContent>
                    <Button variant="contained" color="primary" onClick={createMatch.invoke} disabled={createMatch.loading}>
                        Create new game
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}

export default MatchPage;

