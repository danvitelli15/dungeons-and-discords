export class SlashCommandRegistry {
  private static _registry: SlashCommandRegistry;

  public static get registry(): SlashCommandRegistry {
    if (!SlashCommandRegistry._registry) {
      SlashCommandRegistry._registry = new SlashCommandRegistry();
    }
    return SlashCommandRegistry._registry;
  }

  private _commands: object[];

  private constructor() {
    this._commands = [];
  }

  public 
}
