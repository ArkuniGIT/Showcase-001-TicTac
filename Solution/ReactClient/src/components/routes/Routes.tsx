import React, { FC } from 'react';
import { Switch, Route } from "react-router-dom";
import GamePage from '../gamePage/GamePage';
import MatchPage from '../matchPage/MatchPage';

const Routes: FC = (props) =>
{
    return (
        <Switch>
            <Route path="/game/:id">
                <GamePage />
            </Route>
            <Route path="/">
                <MatchPage />
            </Route>
        </Switch>
    );
}

export default Routes;
