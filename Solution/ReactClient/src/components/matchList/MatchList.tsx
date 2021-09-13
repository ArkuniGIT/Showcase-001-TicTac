import { FC } from 'react';
import { MatchModel } from "shared";
import MatchItem from '../matchItem/MatchItem';

export interface MatchListProps 
{
    matches: MatchModel[];
}

const MatchList: FC<MatchListProps> = (props) =>
{
    const { matches } = props;

    return (
        <div>
            {matches.map((match) => (
                <MatchItem
                    key={match.id}
                    model={match}
                />
            ))}
        </div>
    );
}

export default MatchList;
