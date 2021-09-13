import { FC } from 'react';
import { MatchModel } from 'shared';
import MatchList from '../matchList/MatchList';
import { Button, Card, CardContent } from '@material-ui/core';
import useSWR from 'swr'

const MatchPage: FC = () =>
{
    const openMatchesRequest = useSWR<MatchModel[]>('/match/all');

    return (
        <Card>
            <CardContent>
                <Button variant="contained" color="primary">
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
