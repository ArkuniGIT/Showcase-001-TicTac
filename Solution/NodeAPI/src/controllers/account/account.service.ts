import { REQUEST } from '@nestjs/core';
import { Request } from 'express';
import { Inject, Injectable, Scope } from '@nestjs/common';
import { Client, Database, Storage, Account } from 'node-appwrite'
import { AppwriteService } from 'controllers/appwrite/appwrite.service';
import { UserModel } from '../../../../SharedLibrary';

@Injectable({ scope: Scope.REQUEST })
export class AccountService
{
    constructor(
        @Inject(REQUEST) private readonly request: Request,
        private readonly appwriteService: AppwriteService
    ){}

    async getAccount()
    {
        const auth = this.request.headers['authorization'];
        if (!auth)
            throw new Error("Request is missing JWT.");

        const jwt = auth.replace("Bearer ", "");
            
        const accountClient = this.appwriteService.getClient(jwt);
        const account = new Account(accountClient);

        return account.get<UserModel>();
    }
}
