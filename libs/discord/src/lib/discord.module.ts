import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DiscordConfiguration, validationSchema } from './config';
import { DiscordService } from './discord.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [DiscordConfiguration],
      validationSchema,
    }),
  ],
  providers: [DiscordService],
  exports: [DiscordService],
})
export class DiscordModule {}
