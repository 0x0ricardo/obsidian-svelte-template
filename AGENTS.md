# Obsidian Svelte Template

## Purpose

This repository is a starter template for building Obsidian community plugins with:

- TypeScript
- Svelte 5
- Vite
- Bun
- Tailwind CSS CLI

The goal is to keep the template small, easy to understand, and aligned with how Obsidian plugins are actually shipped:

- `main.js` at the plugin root
- `manifest.json` at the plugin root
- `styles.css` at the plugin root

## Current stack

- Package manager: `bun`
- Bundler: `vite`
- UI framework: `svelte`
- CSS pipeline: `tailwindcss` CLI
- Type checking: `tsc` and `svelte-check`
- Linting: `eslint`

Do not reintroduce `npm`, `package-lock.json`, or `esbuild` unless the user explicitly asks for that migration.

## Important project facts

- Plugin ID: `obsidian-svelte-template`
- Entry source: `src/main.ts`
- Bundled output: `main.js`
- Tailwind source: `src/tailwind.css`
- Generated CSS output: `styles.css`
- Intermediate build directory: `dist/`

`main.js` and `styles.css` are generated artifacts. Do not hand-edit them unless the user explicitly asks you to modify generated output.

## Working rules

- Keep `src/main.ts` minimal. It should primarily load settings, register commands, register views/modals, and wire plugin lifecycle.
- Put UI logic in `src/ui/`.
- Put settings definitions and settings tab logic in `src/settings.ts` or split further if it grows.
- Prefer adding new modules over growing one large file.
- Use Obsidian theme variables for colors unless the user explicitly wants a custom visual theme.
- Prefer local/offline behavior. Do not add network calls without a clear product reason.
- Preserve mobile compatibility unless the user asks for desktop-only behavior and `manifest.json` is updated accordingly.
- Keep command IDs stable once introduced.

## Commands

Install dependencies:

```bash
bun install
```

Run JS and Tailwind watchers:

```bash
bun run dev
```

Run only the Vite watcher:

```bash
bun run dev:js
```

Run only the Tailwind watcher:

```bash
bun run dev:css
```

Run a production build:

```bash
bun run build
```

Run lint:

```bash
bun run lint
```

Run Svelte diagnostics:

```bash
bun run svelte-check
```

## Code conventions

- TypeScript should stay strict.
- Prefer `type` imports when a symbol is only used as a type.
- Prefer `async/await`.
- Avoid hidden side effects during plugin startup.
- Clean up mounted UI and registered listeners on unload or modal/view close.
- Keep Svelte components presentational when possible; move plugin or vault logic out of the component when it starts growing.

## Svelte and Tailwind guidance

- Tailwind classes in `.svelte` files are the default styling approach in this template.
- Do not add `<style>` blocks to Svelte components unless the user explicitly requests component-scoped CSS.
- Prefer Obsidian CSS variables in Tailwind arbitrary values, for example:
  - `bg-[var(--background-primary)]`
  - `text-[var(--text-normal)]`
  - `border-[var(--background-modifier-border)]`
- When using Tailwind arbitrary values with CSS variables, wrap them in `var(...)`. Do not use raw `--token` values.
- Keep styling consistent with the active Obsidian theme rather than hardcoding a separate product palette unless requested.

## Manifest and release rules

- Keep `manifest.json` aligned with the actual template identity and capabilities.
- Do not casually change `id`; treat it as stable.
- If Obsidian API usage requires a newer version, update both:
  - `manifest.json` → `minAppVersion`
  - `versions.json`
- Release artifacts for a real plugin remain:
  - `main.js`
  - `manifest.json`
  - `styles.css`

## Cleanup expectations

When making changes, clean up outdated template remnants if they are clearly obsolete, especially:

- sample-plugin naming
- npm-specific instructions
- esbuild-specific instructions
- dead files or comments left over from previous tooling

Do not remove working project files just because they are minimal. Only remove files that are clearly obsolete or replaced.

## What good changes look like here

Good changes:

- Add a new Obsidian command and wire it from `src/main.ts`
- Add a Svelte modal, setting tab, or custom view
- Extend `src/tailwind.css` when shared utility layers are genuinely needed
- Split large files into focused modules
- Improve template docs to match the current toolchain

Bad changes:

- Reintroducing old sample-plugin branding
- Adding a second competing CSS pipeline
- Hardcoding colors that fight the user’s Obsidian theme without a clear reason
- Moving lots of plugin logic directly into one Svelte component
- Editing generated artifacts as the source of truth

## Verification

After meaningful changes, prefer to run:

```bash
bun run build
```

And when appropriate:

```bash
bun run lint
```

If the change affects Svelte typing or component syntax, also run:

```bash
bun run svelte-check
```

## References

- Obsidian developer docs: https://docs.obsidian.md
- Obsidian plugin guidelines: https://docs.obsidian.md/Plugins/Releasing/Plugin+guidelines
- Obsidian developer policies: https://docs.obsidian.md/Developer+policies
- Svelte docs: https://svelte.dev/docs/svelte/overview
- Tailwind docs: https://tailwindcss.com/docs
