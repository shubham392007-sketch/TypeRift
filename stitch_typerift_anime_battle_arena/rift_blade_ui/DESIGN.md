---
name: Rift Blade UI
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#393939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1b1b1b'
  surface-container: '#1f1f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353535'
  on-surface: '#e2e2e2'
  on-surface-variant: '#cbc3d7'
  inverse-surface: '#e2e2e2'
  inverse-on-surface: '#303030'
  outline: '#958ea0'
  outline-variant: '#494454'
  surface-tint: '#d0bcff'
  primary: '#d0bcff'
  on-primary: '#3c0091'
  primary-container: '#a078ff'
  on-primary-container: '#340080'
  inverse-primary: '#6d3bd7'
  secondary: '#ffb3ad'
  on-secondary: '#68000a'
  secondary-container: '#a40217'
  on-secondary-container: '#ffaea8'
  tertiary: '#4cd7f6'
  on-tertiary: '#003640'
  tertiary-container: '#009eb9'
  on-tertiary-container: '#002f38'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e9ddff'
  primary-fixed-dim: '#d0bcff'
  on-primary-fixed: '#23005c'
  on-primary-fixed-variant: '#5516be'
  secondary-fixed: '#ffdad7'
  secondary-fixed-dim: '#ffb3ad'
  on-secondary-fixed: '#410004'
  on-secondary-fixed-variant: '#930013'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#131313'
  on-background: '#e2e2e2'
  surface-variant: '#353535'
typography:
  headline-xl:
    fontFamily: Anybody
    fontSize: 64px
    fontWeight: '900'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Anybody
    fontSize: 32px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Anybody
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  typing-area:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.5'
    letterSpacing: 0.2em
  hud-stat:
    fontFamily: JetBrains Mono
    fontSize: 18px
    fontWeight: '700'
    lineHeight: '1.0'
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 40px
  panel-gap: 24px
---

## Brand & Style

The design system establishes a high-octane, **Dark Anime Cyberpunk** aesthetic. It is engineered to evoke the tension of a competitive battle arena, combining the gritty textures of futuristic metal with the vibrant energy of neon soul-magic. 

The visual language draws heavily from **Modern Cyberpunk** and **Manga Framing**, utilizing sharp diagonals, glitch effects, and high-contrast color pairings. Every interface element is treated as part of an in-universe Head-Up Display (HUD), making the player feel like a pilot or a digital warrior. The atmosphere is aggressive, cinematic, and precise, prioritizing "combat-readiness" in every pixel.

## Colors

The palette is anchored in absolute darkness, utilizing `#000000` for deep space and `#0F0F1A` for container surfaces to maintain depth. 

- **Electric Purple (#8B5CF6):** The primary energy source. Used for active states, player XP, and primary HUD elements.
- **Crimson Red (#EF4444):** Reserved for danger, rival health bars, and "critical strike" feedback.
- **Neon Cyan (#06B6D4):** Utilized for technological accents, secondary stats, and holographic scanlines.
- **Magenta Highlights (#EC4899):** Applied to "Ultimate" abilities and victory state flourishes to create a vibrant visual vibration against the purple.

All colors should be applied with an outer glow (bloom) effect to simulate neon light reflecting off metallic surfaces.

## Typography

The typography system is split between **Aggressive Expression** and **Technical Precision**.

- **Headlines:** Use *Anybody* with maximum weight and condensed width. These should often be italicized to imply forward motion and speed.
- **Typing & Data:** *JetBrains Mono* provides the clinical, "hacker" feel required for the core game mechanic. It ensures every character is distinct during high-speed typing battles.
- **UI Labels:** *Space Grotesk* bridges the gap, offering a futuristic but highly legible sans-serif for settings and small labels.

**Styling Note:** Text often features a "glitch" shadow (a 1px offset red/cyan drop shadow) or a subtle "flicker" animation on key headings.

## Layout & Spacing

This design system utilizes a **Fixed Cinematic Grid** that mirrors a 16:9 aspect ratio, ensuring the battle remains the focal point. 

- **The Arena:** A central stage for character sprites, framed by "manga gutters" (thick black borders with diagonal cuts).
- **HUD Layers:** Elements are positioned at the screen edges to mimic a cockpit view. 
- **The Typing Zone:** Anchored to the lower-third, utilizing maximum horizontal width to allow for long word strings.
- **Breakpoints:** On mobile, the layout shifts to a vertical stack where the "Battle View" occupies the top 40% and the keyboard/typing area takes the remaining 60%.

Spacing follows a strict 4px base unit to maintain the mathematical precision of a computer interface.

## Elevation & Depth

Depth is created through **Holographic Tiering** rather than traditional shadows:

1.  **Level 0 (Background):** Deep black with subtle animated scanlines and occasional "matrix" rain or dust particles.
2.  **Level 1 (Panels):** Semi-transparent surfaces (20-40% opacity) with 1px solid borders in primary colors.
3.  **Level 2 (Active HUD):** Elements with 100% opacity, featuring heavy neon glows (bloom) and "chromatic aberration" on the edges.
4.  **Level 3 (Overlays):** Modal windows use a "Heavy Glass" effect with a background blur (20px) and a magenta-tinted border to indicate focus.

**Texture:** Use metallic "brush" overlays and subtle grain to give the UI a tactile, worn-in cyber-armor feel.

## Shapes

The shape language is dominated by **Aggressive Geometries**. 

- **Base Corner:** A subtle 0.25rem (4px) radius to prevent the UI from feeling too "sharp" to touch, but maintaining a crisp edge.
- **The "Slash" Cut:** Many containers should feature a 45-degree chamfered corner (clipped corner) instead of a round one, particularly on the top-right and bottom-left.
- **Borders:** Double-line borders are used to denote "Elite" or "Ultimate" components, mimicking circuit board traces.

## Components

- **Arcade Buttons:** High-contrast blocks with a "Slash" hover effect where a bright light streak passes through the button diagonally. Active states use a "pressed-in" look with a heavy inner glow.
- **Energy Meters:** Horizontal bars that don't fill smoothly but in "segments" or "cells," giving a digital battery feel.
- **Combat Panels:** Containers for character stats featuring animated scanlines and a 1px border that pulses in sync with the player's heart rate/combo.
- **Typing Field:** A focused horizontal bar with a blinking "block" cursor. Correct characters turn Neon Cyan; errors flash Crimson Red and shake the entire panel.
- **Combo Counter:** Floating large-scale typography that scales up and "vibrates" as the multiplier increases.
- **Slash Dividers:** Instead of horizontal lines, use thin 45-degree diagonal slashes to separate content sections.