import React, { FC } from 'react';
import MatchList from '../matchList/MatchList';

const MatchPage: FC = () =>
{
    const matches: any[] = [];

    return (
        <div>
            <MatchList 
                matches={matches}
            />
        </div>
    );
}

export default MatchPage;
