import { readFileSync } from 'node:fs';

// The project's colours come from design/tokens.json (Universal App Studio writes it).
// Discord shows the primary colour down the side of the bot's messages (embeds).
const tokens = JSON.parse(readFileSync(new URL('../design/tokens.json', import.meta.url), 'utf8')) as {
  name?: string;
  color: Record<string, string>;
};

export const projectName = tokens.name || 'Bot';
export const primaryColour = parseInt(tokens.color.primary.replace('#', ''), 16);
