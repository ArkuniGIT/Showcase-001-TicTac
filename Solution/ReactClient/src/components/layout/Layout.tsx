import { Container } from '@material-ui/core';
import React, { FC } from 'react';
import styles from "./Layout.module.css";

const Layout: FC = (props) =>
{
    return (
        <div className={styles.layout}>
            {props.children}
        </div>
    );
}

export default Layout;
