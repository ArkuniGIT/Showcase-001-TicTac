import { FC } from 'react';
import { MatchModel } from 'shared';
import MatchList from '../matchList/MatchList';
import { Button, Card, CardContent } from '@material-ui/core';
import useSWR from 'swr'
import axios, { AxiosError } from 'axios';

const MatchPage: FC = () =>
{
    const openMatchesRequest = useSWR<MatchModel[]>('/match/all');

    const onCreateClick = async () =>
    {
        try 
        {
            const createResult = await axios.post<MatchModel>("/match");
        } 
        catch (err)
        {
            console.log(err);
        }
    }

    return (
        <Card>
            <CardContent>
                <Button variant="contained" color="primary" onClick={onCreateClick}>
                    Create game
                </Button>
            </CardContent>
            {openMatchesRequest.data &&
                <MatchList
                    matches={openMatchesRequest.data}
                />
            }
        </Card>
    );
}

export default MatchPage;
