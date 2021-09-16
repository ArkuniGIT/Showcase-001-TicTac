import { Global, Module } from '@nestjs/common';
import { AppwriteService } from './appwrite.service';

@Global()
@Module({
    imports: [],
    controllers: [],
    providers: [AppwriteService],
    exports: [AppwriteService]
})
export class AppwriteModule { }
