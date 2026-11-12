# Personal site

Plain HTML + CSS + a tiny bit of JS. No framework, no build step, no database.

- `index.html`: all your content. Search for `[brackets]` to find placeholders.
- `style.css`: colors, fonts, and spacing live in the `:root` block at the top.
- `script.js`: scroll fade-in, project filters, nav highlight.

Preview locally: double-click `index.html`, or run `python3 -m http.server` in this folder and open http://localhost:8000.

## Deploy: GitHub Pages (free)

1. Create a repo named `<your-username>.github.io` (this gives you a clean URL with no subpath).
2. Put these files in the repo root and push.
3. Repo Settings → Pages → Source: "Deploy from a branch" → `main` / root.
4. Visit `https://<your-username>.github.io` in a minute or two.

Alternatives: Netlify Drop (drag the folder onto app.netlify.com/drop, live in seconds) or Cloudflare Pages / Vercel (connect the repo, no build command).

## Custom domain

Buy one (Namecheap, Cloudflare, Porkbun, roughly $10-15/yr), then add it under Pages settings (GitHub) or Domains (Netlify/Vercel) and follow the DNS instructions they show.
