import { FC } from 'react';
import styles from "./Board.module.css";

export interface BoardProps 
{

}

const MatchList: FC<BoardProps> = (props) =>
{
    const { } = props;

    return (
        <div className={styles.board}>
            <div />
            <div />
            <div />
            
            <div />
            <div />
            <div />
            
            <div />
            <div />
            <div />
        </div>
    );
}

export default MatchList;
