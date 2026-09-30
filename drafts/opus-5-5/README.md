# Landing page drafts (Opus 5.5)

Marketing page directions for selling Lustre to other clinics. Not deployed anywhere.
Moved from the `landing/opus-5-5` branch of lustre-clinic (5317343).

Serve `drafts/` so the screenshot paths resolve, then open `/opus-5-5/`:

```sh
python3 -m http.server 4322 --bind 127.0.0.1 --directory drafts
```

- `d-showcase.html`: light, scroll-driven. Paper book rewritten into the app, sticky phone tour, tap-through visit.
- `e-live.html`: dark-first. Every tile is a working piece of the app; paper-vs-app drag slider.
- `f-day.html`: morning-to-night. Dawn hero, 3D carousel of the real screens, night-time contact.
- `a-book.html`, `b-desk.html`: first-round directions.

Open before shipping any of them: the WhatsApp number is a placeholder, the setup and
training steps are assumptions, and the Arabic in `e-live.html` needs a native check.
