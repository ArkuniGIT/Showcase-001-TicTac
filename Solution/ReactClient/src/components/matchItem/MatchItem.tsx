import React, { FC } from 'react';
import { MatchModel } from "shared";

export interface MatchItemProps 
{
    model: MatchModel;
}

const MatchItem: FC<MatchItemProps> = (props) =>
{
    const { model } = props;

    return (
        <div>
            {model.id}
        </div>
    );
}

export default MatchItem;
