import { SlashCommandBuilder } from 'discord.js';
import { ISlashCommandOptions } from './slash-command-options.interface';

export const SlashCommand = (options: ISlashCommandOptions) => {
  const builder = new SlashCommandBuilder();
  builder.setName(options.name);
  builder.setDescription(options.description);

  return (
    target: any,
    propertyKey?: string,
    descriptor?: PropertyDescriptor
  ) => {
    if (typeof target === 'function') {
      console.log('attached to a class');
      console.log(typeof target, target);
      console.log(target.prototype);
    } else if (typeof target === 'object' && target !== null) {
      console.log('attached to a method');
      console.log(typeof target, target);
      console.log(propertyKey);
      console.log(descriptor.value);
    }
  };
};
