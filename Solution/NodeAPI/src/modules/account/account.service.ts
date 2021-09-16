import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { Account } from 'node-appwrite'
import { AppwriteService } from 'modules/appwrite/appwrite.service';
import { UserModel } from 'shared';
import { throwHttpError } from 'utility/errors/throwHttpError';

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
