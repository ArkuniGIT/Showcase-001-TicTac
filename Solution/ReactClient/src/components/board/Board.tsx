import BoardSpace from 'components/boardSpace/BoardSpace';
import { FC } from 'react';
import styles from "./Board.module.css";

export interface BoardProps 
{
}

const Board: FC<BoardProps> = (props) =>
{
    return (
        <div className={styles.board}>
                {props.children}
        </div>
    );
}

export default Board;
