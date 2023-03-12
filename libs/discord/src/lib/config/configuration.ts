export interface IDiscordConfiguration {
  token: string;
}

export interface IConfiguration {
  discord: IDiscordConfiguration;
}

export const DiscordConfiguration = (): IConfiguration => ({
  discord: { token: process.env.DISCORD_BOT_TOKEN },
});
