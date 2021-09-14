import { Injectable } from '@nestjs/common';
import { AppwriteService } from 'controllers/appwrite/appwrite.service';
import { GameModel } from "shared";

@Injectable()
export class GameService
{
    constructor(private appwriteService: AppwriteService) { }
}
