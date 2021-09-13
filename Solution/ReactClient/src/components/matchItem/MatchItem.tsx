import React, { FC } from 'react';
import { MatchModel } from "shared";
import styles from "./MatchItem.module.css";

export interface MatchItemProps 
{
    model: MatchModel;
}

const MatchItem: FC<MatchItemProps> = (props) =>
{
    const { model } = props;

    return (
        <div className={styles.matchItem}>
            {model.id}
        </div>
    );
}

export default MatchItem;
