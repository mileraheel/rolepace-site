# RolePace — marketing site starter pack

A static, no-build-step marketing site for RolePace. Three files, no framework:

```
index.html
styles.css
script.js
```

## View it locally

Just open `index.html` in a browser, or serve it so relative paths behave
exactly like production:

```bash
python -m http.server 8000
# then visit http://localhost:8000
```

## Put it on GitHub

This is a separate, small repo from your `ai_recruiter_agent` app repo —
recommended, since a marketing site and a product codebase have different
release cadences and don't need to ship together.

```bash
cd rolepace-site
git init
git add .
git commit -m "Initial RolePace marketing site"
git branch -M main
git remote add origin https://github.com/<your-username>/rolepace-site.git
git push -u origin main
```

## Deploy it (pick one, all free for a static site)

**GitHub Pages** (simplest, same repo as above):
1. Push the repo as shown above.
2. On GitHub: Settings → Pages → Source → "Deploy from a branch" → `main` / `/root`.
3. Your site is live at `https://<your-username>.github.io/rolepace-site/`.
4. Add a custom domain later under the same Pages settings once you've bought one.

**Netlify or Vercel** (better if you want a custom domain fast, still free tier):
- Connect the GitHub repo, leave build command empty, publish directory `/`.

## Things to update before this goes live

1. **Domain and emails.** The footer and nav currently use `rolepace.ai`
   as a placeholder domain:
   - `hello@rolepace.ai` — general inquiries
   - `support@rolepace.ai` — product support
   - `careers@rolepace.ai` — HR / hiring

   Once you've registered a domain, do a find-and-replace of `rolepace.ai`
   across `index.html`. `.ai` reads well for an AI product and was likely
   free; `.com`/`.io` are the more conventional fallback if you'd rather
   match those. Whatever you land on, set up those three mailboxes (or
   forwarding rules to one inbox) before publishing, since the links are
   live `mailto:` links.

2. **Early access form.** `script.js` currently just shows a confirmation
   message and logs to the console — it doesn't send anywhere yet. Wire
   the `earlyForm` submit handler to either:
   - a new endpoint on your FastAPI backend (e.g. `POST /api/waitlist`)
     that stores the email, or
   - a third-party form service (Formspree, Basin, etc.) if you'd rather
     not touch the backend yet.

3. **Legal pages.** There's no privacy policy or terms page yet — add
   those before collecting real emails at scale, since the form promises
   "no resale of your information."

4. **Favicon.** None is included. Drop a `favicon.ico` or `favicon.svg`
   in this folder and add a `<link rel="icon" ...>` tag in `index.html`.

## Design notes

Visual identity is built around the product name: a runner's pace/split
watch face, using a scoreboard-style condensed display face (Big Shoulders
Display) against a calm navy-and-paper palette with a single teal accent.
The "four laps" section (Match / Tailor / Apply / Track) mirrors the real
product pipeline rather than being a generic numbered list.

Copy avoids fabricated stats — the scoreboard strip states product
commitments ("0 fabricated skills, ever") rather than invented market
numbers, consistent with the platform's own no-fabrication principle.
