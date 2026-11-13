import { EmbedBuilder, SlashCommandBuilder, type ChatInputCommandInteraction } from 'discord.js';
import { primaryColour, projectName } from '../theme.js';

export type Command = {
  data: SlashCommandBuilder;
  run: (interaction: ChatInputCommandInteraction) => Promise<void>;
};

/** Every slash command the bot has. Add new ones here, then run `npm run register`. */
export const commands: Command[] = [
  {
    data: new SlashCommandBuilder().setName('ping').setDescription('Check the bot is awake'),
    run: async (interaction) => {
      await interaction.reply({ content: 'Pong!', ephemeral: true });
    },
  },
  {
    data: new SlashCommandBuilder().setName('about').setDescription(`What ${projectName} does`),
    run: async (interaction) => {
      const embed = new EmbedBuilder().setColor(primaryColour).setTitle(projectName).setDescription('Made with Universal App Studio.');
      await interaction.reply({ embeds: [embed] });
    },
  },
];

export const byName = new Map(commands.map((c) => [c.data.name, c]));
