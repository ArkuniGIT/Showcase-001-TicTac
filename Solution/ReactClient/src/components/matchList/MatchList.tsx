import { Divider, ListItem } from '@material-ui/core';
import { List } from '@material-ui/core';
import { FC, Fragment } from 'react';
import { MatchModel } from "shared";
import MatchItem from '../matchItem/MatchItem';

export interface MatchListProps 
{
    matches: MatchModel[];
    emptyLabel: string;
}

const MatchList: FC<MatchListProps> = (props) =>
{
    const { matches } = props;

    return (
        <List disablePadding>
            {matches.length == 0 &&
                <ListItem>
                    {props.emptyLabel}
                </ListItem>
            }
            {matches.map((match, i) => (
                <Fragment key={match.$id}>
                    {i > 0 && <Divider />}
                    <MatchItem
                        model={match}
                    />
                </Fragment>
            ))}
        </List>
    );
}

export default MatchList;
