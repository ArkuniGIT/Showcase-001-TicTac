import { FC, useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import Routes from 'components/routes/Routes';
import { useRecoilState } from 'recoil';
import { userState } from 'state/userState';
import { getUser } from 'utility/getUser';

const Startup: FC = () =>
{
    const [user, setUser] = useRecoilState(userState);
    const [started, setStarted] = useState(false);

    useEffect(() =>
    {
        var user = getUser();
        setUser(user);
        setStarted(true);
    }, []);

    if (!started)
        return <></>;

    if (!user)
        return <></>;

    return (
        <Layout>
            <Routes />
        </Layout>
    );
}

export default Startup;
