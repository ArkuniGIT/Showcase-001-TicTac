import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { AppService } from './app.service';
import { AppwriteModule } from './appwrite/appwrite.module';
import { GameModule } from './game/game.module';
import { MatchModule } from './match/match.module';
import { AccountModule } from './account/account.module';

@Module({
  imports: [ConfigModule.forRoot(), AppwriteModule, AccountModule, GameModule, MatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
