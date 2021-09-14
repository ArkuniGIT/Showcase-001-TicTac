import { Divider } from '@material-ui/core';
import { List } from '@material-ui/core';
import { FC, Fragment } from 'react';
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
        <List disablePadding>
            {matches.map((match) => (
                <Fragment key={match.$id}>
                    <Divider />
                    
                            <MatchItem
                                model={match}
                            />
                </Fragment>
            ))}
        </List>
    );
}

export default MatchList;
