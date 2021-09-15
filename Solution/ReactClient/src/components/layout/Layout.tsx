import { Typography } from '@material-ui/core';
import ScreenLoader from 'components/screenLoader/ScreenLoader';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { loaderState } from 'state/loaderState';
import styles from "./Layout.module.css";

const Layout: FC = (props) =>
{
    const [loader] = useRecoilState(loaderState);

    return (
        <div className={styles.layout}>
            {loader && <ScreenLoader /> }
            <Typography variant="h1" gutterBottom>
                Tic-Tac-Toe
            </Typography>
            {props.children}
        </div>
    );
}

export default Layout;
