import { SlashCommandSubcommandBuilder } from 'discord.js';
import { ISlashCommandPrototype } from './slash-command-prototype.interface';
import { ISubCommandOptions } from './sub-command-options.interface';

export const SlashCommand = (options: ISubCommandOptions) => {
  const subCommandBuilder = (builder: SlashCommandSubcommandBuilder) =>
    builder.setName(options.name).setDescription(options.description);

  return (
    target: ISlashCommandPrototype,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) => {
    console.log('attached to a method');
    console.log(typeof target, target);
    console.log(propertyKey);
    console.log(descriptor.value);
    target.subCommands.push({
      metadata: subCommandBuilder,
      execute: descriptor.value,
    });
  };
};
