import { DiscordModule } from '@dnd/discord';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [DiscordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
