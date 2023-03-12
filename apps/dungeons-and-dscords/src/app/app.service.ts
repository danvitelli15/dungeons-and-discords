import { SlashCommand } from '@dnd/discord';
import { Injectable, Logger } from '@nestjs/common';
import { ChatInputCommandInteraction } from 'discord.js';

@Injectable()
export class AppService {
  private readonly logger: Logger = new Logger(AppService.name);

  @SlashCommand({
    name: 'dnd-ping',
    description: 'This is a test command that returns pong',
  })
  async getData(interaction: ChatInputCommandInteraction) {
    // this.logger.log('Received ping command');
    interaction.reply('Pong!');
    return 0;
  }
}
