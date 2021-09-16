import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import axios from 'axios';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { MatchModel, MatchState } from "shared";
import { userState } from 'state/accountState';
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

    if (model.users.indexOf(user.$id) === -1)
    {
        const onJoinClick = async () => 
        {
            try 
            {
                const joinResult = await axios.post<MatchModel>("/match/join", {
                    matchId: model.$id
                });
            }
            catch (err)
            {
                console.log(err);
            }
            finally
            {

            }
        }

        return (
            <ListItem button className={styles.matchItem} onClick={onJoinClick}>
                <ListItemIcon>
                    <ArrowIcon />
                </ListItemIcon>
                <ListItemText primary={`Play game with ${model.users[0]}.`} />
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
        <Link to={`/game/${model.$id}`}>
            <ListItem button className={styles.matchItem}>
                <ListItemIcon>
                    <ArrowIcon />
                </ListItemIcon>
                <ListItemText primary={`Continue game with ${otherPlayer}.`} />
            </ListItem>
        </Link>
    );

}

export default MatchItem;
