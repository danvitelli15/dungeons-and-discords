import { IRegisteredSubCommand } from '../registered-sub-command.interface';

export interface ISlashCommandPrototype {
  subCommands: IRegisteredSubCommand[];
}
