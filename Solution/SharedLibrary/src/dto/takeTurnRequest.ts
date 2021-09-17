import { PointModel } from "../models/pointModel";

export interface TakeTurnRequest 
{
    gameId: string;
    point: PointModel;
}