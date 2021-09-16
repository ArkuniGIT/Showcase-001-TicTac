import { Injectable } from '@nestjs/common';
import { AppwriteService } from 'modules/appwrite/appwrite.service';
import { GameModel } from "shared";

@Injectable()
export class GameService
{
    constructor(private appwriteService: AppwriteService) { }
}
