import { FC } from 'react';
import { MatchModel } from 'shared';
import MatchList from '../matchList/MatchList';
import { Button, Card, CardContent  } from '@material-ui/core';


const MatchPage: FC = () =>
{
    const matches: MatchModel[] = [
        {
            id: "Match-ID",
            gameId: "Game-ID"
        }
    ];

    return (
        <Card>
            <CardContent>
                <Button variant="contained" color="primary">
                    Create game
                </Button>
            </CardContent>
            <MatchList
                matches={matches}
            />
        </Card>
    );
}

export default MatchPage;
