# lustresystems.com

The public site for Lustre: the landing page, the privacy policy, and (later)
the try-it demo embedded from `demo.lustresystems.com`.

Built with [Astro](https://docs.astro.build) and deployed as static files.

```sh
bun install
bun run dev      # http://localhost:4321
bun run build    # static output in dist/
```

## Pages

| Route      | Source                     | Notes                                                         |
| ---------- | -------------------------- | ------------------------------------------------------------- |
| `/`        | `src/pages/index.astro`    | The landing page. Began as `drafts/opus-5-5/i-mine.html`; edit it here now. |
| `/privacy` | `src/pages/privacy.astro`  | Linked from the Google OAuth consent screen. Keep it reachable. |

The app itself lives in [lustre-systems/lustre-clinic](https://github.com/lustre-systems/lustre-clinic).
