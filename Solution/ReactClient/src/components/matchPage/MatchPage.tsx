import { FC, useEffect } from 'react';
import { MatchModel } from 'shared';
import MatchList from '../matchList/MatchList';
import { Card, CardContent, CardHeader, CircularProgress, Divider, IconButton } from '@mui/material';
import { LoadingButton } from "@mui/lab";
import useSWR from 'swr';
import useSWRImmutable from 'swr/immutable';
import AddIcon from '@mui/icons-material/Add';
import { openMatchesFetcher } from 'utility/fetchers/openMatchesFetcher';
import { activeMatchesFetcher } from 'utility/fetchers/activeMatchesFetcher';
import { useAppwriteRealtime } from 'hooks/useAppwriteRealtime';
import { useApiStatic } from 'hooks/useApiStatic';
import axios from 'axios';
import { getEnv } from 'constants/getEnv';

const MatchPage: FC = () =>
{
    const activeMatchesReq = useSWRImmutable<MatchModel[]>('activeMatches', activeMatchesFetcher);
    const openMatchesReq = useSWRImmutable<MatchModel[]>('openMatches', openMatchesFetcher);
    const createMatchReq = useApiStatic(() =>
    {
        return axios.post("/match/create", null);
    });

    const env = getEnv();
    useAppwriteRealtime<MatchModel>(`collections.${env.databaseMatchCollectionId}.documents`, (res) =>
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
                    <LoadingButton 
                        variant="contained" 
                        color="inherit" 
                        loading={createMatchReq.loading} 
                        loadingPosition="end"
                        endIcon={<AddIcon />}
                        onClick={createMatchReq.invoke} 
                    >
                        Create new game
                    </LoadingButton>
                </CardContent>
            </Card>
        </>
    );
}

export default MatchPage;

