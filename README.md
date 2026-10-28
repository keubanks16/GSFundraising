# GS Baseball Softball Fundraiser

Public signup page for the GS Baseball slow pitch softball fundraiser. Teams sign up ($200 by default) or people sign up individually ($5 per person by default), then pay with buttons that open Venmo or Cash App with the amount filled in (or pay cash at the field).

Every signup and visit goes straight into the **GS Baseball Hub**: **Team → Softball Fundraiser**. You get a phone notification for each signup.

Address: `https://fundraising.stingerz-baseball.com` (each fundraiser has its own folder)

- `index.html` — landing page listing every fundraiser
- `softball/` — the softball signup page (`softball/config.js`: default title and prices; the Hub's settings replace them)
- To add one (e.g. a raffle): make `raffle/index.html` and add a link to it on the landing page.

## Change the event (in the Hub)
**Team → Softball Fundraiser → Settings**: title, date, time, location, details, team price, per-person price, Venmo username, Cash App $cashtag, and whether signups are open. Also pick who else can see signups.

## One-time setup
1. **GitHub Pages:** this repo → Settings → Pages → Deploy from branch `main`, `/ (root)`.
2. **Firebase:** publish the latest `firestore.rules` from the Hub repo.
3. **Cloudflare:** deploy the latest `worker.js` from the Hub repo (for notifications).
4. **GoDaddy DNS:** CNAME `fundraising` → `keubanks16.github.io` (the `CNAME` file sets the custom domain for GitHub Pages).

## Tracking links
Add `?src=` to the link you share (`fundraising.stingerz-baseball.com/softball/?src=facebook`) and the Hub shows where each signup came from.
