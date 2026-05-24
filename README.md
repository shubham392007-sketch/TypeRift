# TypeRift

TypeRift is a Phase 1 prototype for an anime-inspired competitive typing battle game.

It is designed as a dark cyberpunk arcade combat experience where typing short attack phrases triggers strikes, combos, energy gain, damage, and battle feedback.

This prototype is fully local and single-player. It does not include accounts, authentication, backend services, multiplayer, leaderboards, matchmaking, payments, chat, or databases.

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP-ready architecture
- Howler.js sound system
- React hooks
- Modular game systems

## Getting Started

Install dependencies:

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

Open the app:

```text
http://localhost:3000
```

Create a production build:

```bash
npm run build
```

## Gameplay

The current prototype includes:

- Cinematic landing screen
- Character selection with 3 warriors
- Real-time typing battle
- Player and enemy HP
- Timer
- Energy meter
- Combo counter
- Combo multiplier
- WPM tracking
- Accuracy tracking
- Rank display
- Slash and impact effects
- Victory and defeat states

## Characters

- Blaze Mage: fire-themed aggressive caster
- Shadow Assassin: purple/black speed-focused duelist
- Thunder Samurai: blue lightning heavy striker

## Project Structure

```text
src/
├── app/
├── components/
│   ├── battle/
│   ├── characters/
│   ├── effects/
│   ├── screens/
│   └── ui/
├── data/
├── hooks/
├── systems/
├── types/
└── utils/
```

## Core Systems

- `src/systems/typingEngine.ts`: validates typed input and calculates typing metrics
- `src/systems/combatSystem.ts`: calculates damage and enemy pressure
- `src/systems/comboSystem.ts`: handles combo multipliers and rank logic
- `src/systems/wordGenerator.ts`: generates anime combat attack phrases
- `src/hooks/useBattleGame.ts`: owns the main battle loop and game state
- `src/hooks/useAudio.ts`: prepares Howler.js sound playback

## Assets

Reference images from the original visual direction are stored in:

```text
public/assets/images/
```

Sound paths are prepared under:

```text
public/assets/sounds/
```

The sound system is wired for Phase 1, but sound files are currently placeholders and can be added later without changing the battle logic.

## Phase 1 Scope

This phase focuses on the local playable experience:

- Stylish anime cyberpunk presentation
- Responsive typing combat
- Maintainable frontend architecture
- Expandable game systems

Future phases can add deeper enemy AI, real character art, more skills, progression, sound assets, settings, and multiplayer systems.
