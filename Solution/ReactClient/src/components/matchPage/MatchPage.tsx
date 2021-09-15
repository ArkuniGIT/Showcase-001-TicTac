import { FC } from 'react';
import { GetAllMatchesResponse, MatchModel, MatchState } from 'shared';
import MatchList from '../matchList/MatchList';
import { Button, Card, CardContent, CardHeader, Divider, IconButton, Typography } from '@material-ui/core';
import useSWR from 'swr'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { userState } from 'state/userState';
import AddIcon from '@material-ui/icons/Add';

const MatchPage: FC = () =>
{
    const [user] = useRecoilState(userState);
    const matchesRequest = useSWR<GetAllMatchesResponse>('/match/all');

    if (!matchesRequest.data)
        return <></>;
        
    const { activeMatches, openMatches } = matchesRequest.data;

    const onCreateClick = async () =>
    {
        try 
        {
            const createResult = await axios.post<MatchModel>("/match/create", {
                userId: user.id,
            });

            matchesRequest.mutate();
        }
        catch (err)
        {
            console.log(err);
        }
    }

    return (
        <>
            {activeMatches.length > 0 &&
                <>
                    <Card>
                        <CardHeader
                            title="Your games"
                        />
                        <MatchList
                            matches={activeMatches}
                        />
                    </Card>
                    <br />
                </>
            }
            <Card>
                <CardHeader
                    title="Open games"
                    action={
                        <IconButton >
                            <AddIcon />
                        </IconButton>
                    }
                />
                <MatchList
                    matches={openMatches}
                />
                <Divider />
                <CardContent>
                    <Button variant="contained" color="primary" onClick={onCreateClick}>
                        Create new game
                    </Button>
                </CardContent>
            </Card>
        </>
    );
}

export default MatchPage;
