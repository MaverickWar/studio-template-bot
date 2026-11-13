import { REST, Routes } from 'discord.js';
import { commands } from './commands/index.js';

// Tells Discord about the slash commands. Run it after adding or changing a command.
const token = process.env.DISCORD_TOKEN;
const appId = process.env.DISCORD_APP_ID;
const guildId = process.env.DISCORD_GUILD_ID;
if (!token || !appId) throw new Error('DISCORD_TOKEN and DISCORD_APP_ID are needed. See .env.example.');

const rest = new REST().setToken(token);
const body = commands.map((c) => c.data.toJSON());
// With a test server set, commands appear there instantly; without one, everywhere within an hour.
await rest.put(guildId ? Routes.applicationGuildCommands(appId, guildId) : Routes.applicationCommands(appId), { body });
console.log(`Registered ${body.length} commands${guildId ? ' on the test server' : ''}.`);
