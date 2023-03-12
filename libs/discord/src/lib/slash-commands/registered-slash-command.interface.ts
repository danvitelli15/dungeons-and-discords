import { SlashCommandBuilder } from 'discord.js';

export interface IRegisteredSlashCommand {
  metadata: SlashCommandBuilder;
  execute: (interaction: any) => Promise<void>;
}
