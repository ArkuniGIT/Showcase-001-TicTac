import { Button } from '@material-ui/core';
import { FC } from 'react';
import styles from "./BoardSpace.module.css";
import O from "images/O.png";
import X from "images/X.png";

export enum BoardSpaceState
{
    Clear,
    Player,
    Opponent
}

export interface BoardSpaceProps 
{
    x: number;
    y: number;
    state: BoardSpaceState;
    disabled: boolean;

    onClick?: (x: number, y: number) => void;
}

const BoardSpace: FC<BoardSpaceProps> = (props) =>
{
    const { x, y, state, disabled } = props;

    const onClick = () => 
    {
        if (props.onClick)
            props.onClick(x, y);
    }

    return (
        <div className={styles.boardSpace}>
            {state === BoardSpaceState.Clear &&
                <Button
                    className={styles.button}
                    onClick={onClick}
                    disabled={disabled}
                />
            }
            {state === BoardSpaceState.Player && <img src={O} /> }
            {state === BoardSpaceState.Opponent && <img src={X} /> }
        </div>
    );
}

export default BoardSpace;
