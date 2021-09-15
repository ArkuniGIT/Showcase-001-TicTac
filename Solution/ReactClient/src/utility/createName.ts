import { createGUID } from "./createGUID"

export const createName = () =>
{
    return createGUID().slice(0, 8);
}