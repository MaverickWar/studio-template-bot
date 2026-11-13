# Studio template: Bot (Discord)

The starter Universal App Studio copies when someone picks **Bot (Discord)** while setting up a new project.

A small Discord bot built with discord.js v14 and TypeScript, with two slash commands (/ping and /about) and a test. It has one change: **the look comes from `design/tokens.json`**.

- `design/tokens.json` holds the colours, fonts, corners and spacing. Studio replaces it with the project's own design straight after copying this template.
- `design/adapters/` reads those tokens in this stack's own language. See `design/adapters/README.md` once Studio has added it, or the comments at the top of each adapter.
- Style everything from the tokens. Change the look in Studio, never by typing colours into the code.

## Running it

```
cp .env.example .env   # add your bot token and app ID
npm install
npm run register
npm run dev
```

Open Discord and type /ping in your server.

## Checks

```
npm run typecheck
npm test
npm run build
```

The same checks run on GitHub for every push and pull request (`.github/workflows/checks.yml`).
