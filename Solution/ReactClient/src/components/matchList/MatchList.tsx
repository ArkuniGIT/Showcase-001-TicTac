import { Divider } from '@material-ui/core';
import { List, ListItem } from '@material-ui/core';
import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
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
                <Fragment key={match.id}>
                    <Divider />
                    <Link to={`/game/${match.id}`}>
                        <ListItem button>
                            <MatchItem
                                model={match}
                            />
                        </ListItem>
                    </Link>
                </Fragment>
            ))}
        </List>
    );
}

export default MatchList;
