import { FC } from 'react';
import { MatchModel, MatchState } from 'shared';
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
    const matchesRequest = useSWR<MatchModel[]>('/match/all');

    if (!matchesRequest.data)
        return <></>;

    const userMatches = matchesRequest.data.filter(x => x.state === MatchState.Active);
    const openMatches = matchesRequest.data.filter(x => x.state === MatchState.Open);

    const onCreateClick = async () =>
    {
        try 
        {
            const createResult = await axios.post<MatchModel>("/match/create", {
                userId: user.id,
            });

            matchesRequest.mutate((oldData) => 
            {
                if (!oldData)
                    return [createResult.data];

                return [...oldData, createResult.data];
            }, false);
        }
        catch (err)
        {
            console.log(err);
        }
    }

    return (
        <>
            {userMatches.length > 0 &&
                <>
                    <Card>
                        <CardHeader
                            title="Your games"
                        />
                        <MatchList
                            matches={userMatches}
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
