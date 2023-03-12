import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Client, Events, GatewayIntentBits, REST, Routes } from 'discord.js';
import { IDiscordConfiguration } from './config';
import { SlashCommandRegistry } from './slash-commands';

@Injectable()
export class DiscordService implements OnModuleInit {
  private readonly logger: Logger = new Logger(DiscordService.name);
  private readonly config: IDiscordConfiguration;
  private client: Client;
  private readonly rest: REST;

  constructor(config: ConfigService) {
    this.config = config.get('discord');
    this.rest = new REST({ version: '10' }).setToken(this.config.token);
  }

  onModuleInit() {
    if (SlashCommandRegistry.registry.commandCount > 0) {
      this.registerSlashCommands();
    }

    this.client = new Client({ intents: [GatewayIntentBits.Guilds] });
    this.client.once(Events.ClientReady, () =>
      this.logger.log('Discord client ready')
    );
    this.client.login(this.config.token);
  }

  private async registerSlashCommands() {
    this.logger.log('Registering slash commands');
    // const data = await this.rest.put(
    //   Routes.applicationGuildCommands(
    //     this.config.clientID,
    //     this.config.guildID
    //   ),
    //   { body: [] }
    // );
    // this.logger.log(`Registered ${(data as []).length} slash commands`);
  }
}
