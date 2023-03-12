export interface IDiscordConfiguration {
  clientID: string;
  guildID: string;
  token: string;
}

export interface IConfiguration {
  discord: IDiscordConfiguration;
}

export const DiscordConfiguration = (): IConfiguration => ({
  discord: {
    clientID: process.env.DISCORD_CLIENT_ID,
    guildID: process.env.DISCORD_GUILD_ID,
    token: process.env.DISCORD_BOT_TOKEN,
  },
});
