import { FC, useEffect, useState } from 'react';
import Layout from 'components/layout/Layout';
import Routes from 'components/routes/Routes';
import { useRecoilState } from 'recoil';
import { userState } from 'state/accountState';
import { createSavedAccount } from 'utility/cookies/createSavedAccount';
import axios from 'axios';
import { createAppwrite } from 'utility/appwrite/createAppwrite';
import { getSavedAccount } from 'utility/cookies/getSavedAccount';
import { createName } from 'utility/values/createName';
import { UserModel } from '../../../../SharedLibrary';
import Cookies from 'js-cookie';

const Startup: FC = () =>
{
    const [user, setUser] = useRecoilState(userState);
    const [started, setStarted] = useState(false);

    useEffect(() =>
    {
        const asyncEffect = async () =>
        {
            const appwrite = createAppwrite();
            var account: UserModel;

            try 
            {
                account = await appwrite.account.get<UserModel>();
            }
            catch (error) 
            {
                var savedAccount = getSavedAccount() ?? createSavedAccount();

                try
                {
                    await appwrite.account.createSession(savedAccount.email, savedAccount.password);
                    account = await appwrite.account.get<UserModel>();
                }
                catch (error) 
                {
                    savedAccount = createSavedAccount();

                    const name = createName();
                    await appwrite.account.create(savedAccount.email, savedAccount.password, name);
                    await appwrite.account.createSession(savedAccount.email, savedAccount.password);
                    account = await appwrite.account.get<UserModel>();
                }

            }

            var token = Cookies.get("jwt");
            if (!token)
            {
                token = await appwrite.account.createJWT();
                token = (token as any).jwt as string;
                Cookies.set("jwt", token);
            }

            axios.defaults.headers = {
                Authorization: "Bearer " + token
            };

            setUser(account);
            setStarted(true);
        }

        asyncEffect();
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
