import { SlashCommandSubcommandBuilder } from 'discord.js';

export type SubCommandBuilderFunction = (
  subcommandGroup: SlashCommandSubcommandBuilder
) => SlashCommandSubcommandBuilder;

export interface IRegisteredSubCommand {
  metadata: SubCommandBuilderFunction;
  execute: (interaction: any) => Promise<void>;
}
