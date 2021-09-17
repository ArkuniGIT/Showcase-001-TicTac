import { CircularProgress } from '@mui/material';
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
