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

  async onModuleInit() {
    this.client = new Client({ intents: [GatewayIntentBits.Guilds] });

    if (SlashCommandRegistry.registry.commandCount > 0) {
      await this.registerSlashCommands();
    }

    this.client.once(Events.ClientReady, () =>
      this.logger.log('Discord client ready')
    );
    this.client.login(this.config.token);
  }

  private async registerSlashCommands() {
    this.logger.log('Registering slash commands');
    const data = await this.rest.put(
      Routes.applicationGuildCommands(
        this.config.clientID,
        this.config.guildID
      ),
      { body: SlashCommandRegistry.registry.commandMetadata }
    );
    this.logger.log(`Registered ${(data as []).length} slash commands`);

    this.client.on(Events.InteractionCreate, async (interaction) => {
      this.logger.log('Received interaction');
      SlashCommandRegistry.registry.executeCommand(interaction);
    });
  }
}
