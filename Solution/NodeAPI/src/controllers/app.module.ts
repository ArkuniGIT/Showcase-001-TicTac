import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GameModule } from './game/game.module';
import { MatchModule } from './match/match.module';

@Module({
  imports: [GameModule, MatchModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
