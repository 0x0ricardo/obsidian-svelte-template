# Obsidian Svelte Template

This repository is a starter template for building Obsidian plugins with Svelte 5, Vite, Bun, and Tailwind CSS.

## Tooling

- Package manager: `bun`
- Bundler: `vite`
- UI framework: `svelte`
- CSS pipeline: `tailwindcss` CLI
- Type checking: `tsc` + `svelte-check`

## Development

Install dependencies:

```bash
bun install
```

Start watch mode:

```bash
bun run dev
```

Run only the Tailwind watcher:

```bash
bun run dev:css
```

Create a production build:

```bash
bun run build
```

Run linting:

```bash
bun run lint
```

Run Svelte diagnostics:

```bash
bun run svelte-check
```

## Template defaults

- Plugin ID: `obsidian-svelte-template`
- Build output: `main.js` and `styles.css` at the plugin root
- Source CSS entry: `src/tailwind.css`
- Example UI: a Svelte modal counter wired into an Obsidian command

## What changed

- The old `esbuild` pipeline has been replaced with `vite build`.
- Svelte components are bundled into the Obsidian entry file at `main.js`.
- Tailwind is compiled from `src/tailwind.css` to the release artifact `styles.css`.
- The example command opens a modal powered by a Svelte component.
- The example component now uses inline Tailwind utility classes instead of `<style>` blocks.
- Plugin settings control the initial value rendered by the Svelte counter.

## Output

The build still generates Obsidian's required top-level artifacts:

- `main.js`
- `manifest.json`
- `styles.css`
