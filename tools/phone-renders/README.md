# Phone renders

Makes the three phone stills in the landing page hero (`public/img/phone-*.webp`): a Galaxy
S25 Ultra model with an app screenshot on each display. Rendering them once keeps three.js and
the model off the page. Not part of the site build.

To re-render, serve this folder on port 4322 (e.g. `bunx serve -l 4322 tools/phone-renders`)
and run `bun tools/phone-renders/bake.mjs`. It needs `playwright` and `sharp`, and points
Playwright at Brave (`/usr/bin/brave`). It overwrites `public/img/phone-*.webp`.

- `index.html`: the three.js scene. A screenshot at the display's own size (1440×3120)
  fills it; a shorter one is split at a quiet row (`split`) and the gap filled with the app
  background. The model has no cover glass, so the scene adds one: a faint fade and a diagonal
  glare, screen-blended so it shows on dark cards and not on white (`sheen` scales it).
- `bake.mjs`: the angle, split and output height of each phone. Renders at 4800 px so the
  screen is drawn above the screenshots' own size (mipmaps are off on the screen texture; they
  blurred it), trims to the phone, scales down with lanczos and writes WebP at quality 92.
- `screenshots/`: the app screens, at the display's size.

## Model

`s25-ultra.glb`: "S amsung Galaxy S25 Ultra Galaxy" by Roberto Domínguez,
https://sketchfab.com/3d-models/9cdcd5cff5e9496e88820d306acf4455, licensed CC BY 4.0
(https://creativecommons.org/licenses/by/4.0/). Changed for the web: the S Pen, the Samsung
logo and the stock wallpaper are removed, textures are WebP at 1024 px, and meshes are
meshopt-compressed (4.1 MB to 670 KB). A site that ships it must credit the author.
