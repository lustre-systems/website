# Lustre website

The public site at lustresystems.com: landing page, privacy policy, and later the try-it demo. Astro, static output.
Full docs on Notion: https://app.notion.com/p/3eb541c6b44181df9348ca56b21cb40f

The app lives in `lustre-systems/lustre-clinic` (Notion: https://app.notion.com/p/3b7541c6b44181d8a6aee73ec9b34dcc).
Its `PRODUCT.md` is the product truth: read it before writing any claim about what Lustre does.

## Always

- Use `bun` only. Never npm, yarn or pnpm.
- Before calling a task done, run `bun run build` and make sure it passes.
- `/privacy` is linked from Google's OAuth consent screen. Keep it reachable, and don't change what it says about Google account data without saying so.
- `drafts/` is reference only. Nothing there is built or deployed.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

Full Astro documentation: https://docs.astro.build
