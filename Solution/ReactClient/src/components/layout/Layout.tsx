import { Container, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import styles from "./Layout.module.css";

const Layout: FC = (props) =>
{
    return (
        <div className={styles.layout}>
            <Typography variant="h1" gutterBottom>
                Tic-Tac-Toe
            </Typography>
            {props.children}
        </div>
    );
}

export default Layout;
