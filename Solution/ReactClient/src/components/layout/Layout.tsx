import { Container, Typography } from '@material-ui/core';
import { FC } from 'react';
import { useRecoilState } from 'recoil';
import { userState } from 'state/accountState';
import styles from "./Layout.module.css";

const Layout: FC = (props) =>
{
    const [user] = useRecoilState(userState);

    return (

        <div className={styles.layout}>
            <Container disableGutters>
                <div className={styles.titleContainer}>
                    <Typography variant="h1">
                        Tic-Tac-Toe
                    </Typography>
                    <Typography>
                        Playing as {user.$id}
                    </Typography>
                </div>
                {props.children}
            </Container>
        </div>
    );
}

export default Layout;
