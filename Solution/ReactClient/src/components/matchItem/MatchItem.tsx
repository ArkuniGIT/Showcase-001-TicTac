import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import axios from 'axios';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { MatchModel, MatchState } from "shared";
import { userState } from 'state/userState';
import styles from "./MatchItem.module.css";
import ArrowIcon from "@material-ui/icons/ArrowForward";
import HourGlassIcon from "@material-ui/icons/HourglassFull";

export interface MatchItemProps 
{
    model: MatchModel;
}

const MatchItem: FC<MatchItemProps> = (props) =>
{
    const { model } = props;

    const [user] = useRecoilState(userState);

    if (model.users.indexOf(user.id) === -1)
    {
        const onJoinClick = async () => 
        {
            const joinResult = await axios.post<MatchModel>("/match/join", {
                userId: user.id,
                matchId: model.$id
            });
        }

        return (
            <ListItem button className={styles.matchItem}>
                <ListItemIcon>
                    <ArrowIcon />
                </ListItemIcon>
                <ListItemText primary="Join game." />
            </ListItem>
        );
    }
    else
    {
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
        else
        {     
            return (
                <Link to={`/game/${model.$id}`}>
                    <ListItem button className={styles.matchItem}>
                    <ListItemIcon>
                        <ArrowIcon />
                    </ListItemIcon>
                        <ListItemText primary="Continue game." />
                    </ListItem>
                </Link>          
            ); 
        }
    }
}

export default MatchItem;
