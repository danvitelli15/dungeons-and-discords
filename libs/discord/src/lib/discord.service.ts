import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Events, GatewayIntentBits } from 'discord.js';
import { IDiscordConfiguration } from './config';

@Injectable()
export class DiscordService implements OnModuleInit {
  private readonly logger: Logger = new Logger(DiscordService.name);
  private readonly config: IDiscordConfiguration;
  private client: Client;

  constructor(config: ConfigService) {
    this.config = config.get('discord');
  }

  onModuleInit() {
    this.client = new Client({ intents: [GatewayIntentBits.Guilds] });
    this.client.once(Events.ClientReady, () =>
      this.logger.log('Discord client ready'),
    );
    this.client.login(this.config.token);
  }
}
