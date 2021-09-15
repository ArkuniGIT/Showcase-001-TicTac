import { CircularProgress } from '@material-ui/core';
import { FC } from 'react';
import styles from "./ScreenLoader.module.css";

const ScreenLoader: FC = (props) =>
{
    return (
        <div className={styles.screenLoader}>
            <CircularProgress 
                size={5}
            />
        </div>
    );
}

export default ScreenLoader;
