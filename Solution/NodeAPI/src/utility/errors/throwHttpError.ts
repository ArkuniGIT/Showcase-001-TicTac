import { HttpException, HttpStatus } from "@nestjs/common";

export const throwHttpError = (err: any) =>
{
    throw new HttpException(err.response.message, err.code);
}