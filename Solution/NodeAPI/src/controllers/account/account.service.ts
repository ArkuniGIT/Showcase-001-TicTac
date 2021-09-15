import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { HttpException, HttpStatus, Inject, Injectable, Scope } from '@nestjs/common';
import { Client, Database, Storage, Account } from 'node-appwrite'
import { AppwriteService } from 'controllers/appwrite/appwrite.service';
import { UserModel } from '../../../../SharedLibrary';
import { throwHttpError } from 'utility/throwHttpError';

@Injectable({ scope: Scope.REQUEST })
export class AccountService
{
    constructor(
        @Inject(REQUEST) private readonly request: Request,
        private readonly appwriteService: AppwriteService
    ) { }

    async getAccount()
    {
        const auth = this.request.headers['authorization'];
        if (!auth)
            throw new Error("Request is missing JWT.");

        try
        {
            const jwt = auth.replace("Bearer ", "");

            const accountClient = this.appwriteService.getClient(jwt);
            const account = new Account(accountClient);
            const currentAccount = await account.get<UserModel>();

            return currentAccount;
        }
        catch (error)
        {
            throwHttpError(error);
        }
    }
}
