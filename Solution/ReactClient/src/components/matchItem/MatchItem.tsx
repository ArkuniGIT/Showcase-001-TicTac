import { ListItem, ListItemIcon, ListItemText } from '@mui/material';
import axios from 'axios';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { MatchModel, MatchState } from "shared";
import { userState } from 'state/accountState';
import styles from "./MatchItem.module.css";
import ArrowIcon from "@mui/icons-material/ArrowForward";
import HourGlassIcon from "@mui/icons-material/HourglassFull";
import { useApiStatic } from 'hooks/useApiStatic';

export interface MatchItemProps 
{
    model: MatchModel;
}

const MatchItem: FC<MatchItemProps> = (props) =>
{
    const { model } = props;


    const [user] = useRecoilState(userState);
    const joinMatchReq = useApiStatic(() =>
    {
        return axios
            .post("/match/join", { matchId: model.$id });
    });

    if (model.users.indexOf(user.$id) === -1)
    {
        return (
            <ListItem button className={styles.matchItem} onClick={joinMatchReq.invoke} disabled={joinMatchReq.loading}>
                <ListItemIcon>
                    <ArrowIcon />
                </ListItemIcon>
                <ListItemText primary={`Join game with player ${model.users[0]}.`} />
            </ListItem>
        );
    }

    if (model.state === MatchState.Open)
    {
        return (
            <ListItem className={styles.matchItem}>
                <ListItemIcon>
                    <HourGlassIcon />
                </ListItemIcon>
                <ListItemText primary="Waiting for other player to join." />
            </ListItem>
        );
    }

    const otherPlayerIndex = model.users[0] === user.$id ? 1 : 0;
    const otherPlayer = model.users[otherPlayerIndex];

    return (
        <Link to={`/game/${model.gameId}`}>
            <ListItem button className={styles.matchItem}>
                <ListItemIcon>
                    <ArrowIcon />
                </ListItemIcon>
                <ListItemText
                    primary={
                        model.state === MatchState.Active && model.activeUserId === user.$id ? `Your turn against ${otherPlayer}!` :
                        model.state === MatchState.Active && model.activeUserId !== user.$id ? `Waiting for ${otherPlayer}.` :
                        model.winnerUserId === user.$id ? "Check won game." :
                        "Check lost game."
                    }
                />
            </ListItem>
        </Link>
    );

}

export default MatchItem;
