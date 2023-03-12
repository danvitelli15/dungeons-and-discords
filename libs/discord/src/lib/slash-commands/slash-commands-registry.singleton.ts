import {
  Interaction,
  RESTPostAPIChatInputApplicationCommandsJSONBody,
} from 'discord.js';
import { IRegisteredSlashCommand } from './registered-slash-command.interface';

export class SlashCommandRegistry {
  private static _registry: SlashCommandRegistry;

  public static get registry(): SlashCommandRegistry {
    if (!SlashCommandRegistry._registry) {
      SlashCommandRegistry._registry = new SlashCommandRegistry();
    }
    return SlashCommandRegistry._registry;
  }

  private _commands: { [name: string]: IRegisteredSlashCommand };

  private constructor() {
    this._commands = {};
  }

  public get commandCount(): number {
    return Object.keys(this._commands).length;
  }

  public get commandMetadata(): RESTPostAPIChatInputApplicationCommandsJSONBody[] {
    return Object.keys(this._commands).map((key) => {
      return this._commands[key].metadata.toJSON();
    });
  }

  public registerCommand(command: IRegisteredSlashCommand): void {
    console.log('registering command');
    this._commands[command.metadata.name] = command;
  }

  public async executeCommand(interaction: Interaction): Promise<void> {
    if (!interaction.isCommand()) return;
    const command = this._commands[interaction.commandName];
    if (command) {
      command.execute(interaction);
    }
  }
}
