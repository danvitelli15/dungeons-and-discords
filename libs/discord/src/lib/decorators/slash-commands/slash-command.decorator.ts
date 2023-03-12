import { SlashCommandBuilder } from 'discord.js';
import { ISlashCommandOptions } from './slash-command-options.interface';

export const SlashCommand = (options: ISlashCommandOptions) => {
  const builder = new SlashCommandBuilder();
  builder.seName(options.name);
  builder.setDescription(options.description);

  return (target: any) => {};
};
