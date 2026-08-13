# Madebyduck

The Madebyduck site. Hand-written HTML and CSS, no build step, no framework,
deployed to Netlify from the repo root.

Converted from the Claude Design export `Madebyduck Site.dc.html`.

## Layout

```
index.html      the site
success.html    audit form confirmation (form posts here)
css/site.css    all styles, including @font-face
fonts/          self-hosted woff2 (Figtree variable, EB Garamond italic)
assets/         brand marks, favicon, Open Graph card
netlify.toml    publish root, /success rewrite, font cache headers
```

## Local preview

No tooling required — open `index.html`, or serve the folder so the
root-relative paths resolve:

```
python3 -m http.server 8000
```

The audit form only works once deployed; Netlify handles submissions.

## Fonts

Figtree is a variable font, so one file covers every weight used
(400/700/800/900). EB Garamond is used in italic 400 only. Both are the
latin and latin-ext subsets pulled from Google Fonts and served from
`fonts/`, so the page makes no third-party requests.

## Placeholders

Search for `PLACEHOLDER` in `index.html`:

- the footer ABN
- the privacy policy and website terms links
- the production domain in the canonical and Open Graph URLs
- the contact email address, to confirm

## Known gap

The audit form collects name, business, website and current activity, but no
email address, so a submission arrives with no way to reply to it. Adding a
field changes the design, so it was left as exported — see the conversion
notes.
