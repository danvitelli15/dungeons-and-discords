import { IRegisteredSlashCommand } from './registered-slash-command.interface';

export class SlashCommandRegistry {
  private static _registry: SlashCommandRegistry;

  public static get registry(): SlashCommandRegistry {
    if (!SlashCommandRegistry._registry) {
      SlashCommandRegistry._registry = new SlashCommandRegistry();
    }
    return SlashCommandRegistry._registry;
  }

  private _commands: IRegisteredSlashCommand[];

  private constructor() {
    this._commands = [];
  }

  public get commandCount(): number {
    return this._commands.length;
  }

  public registerCommand(command: IRegisteredSlashCommand): void {
    this._commands.push(command);
  }
}
