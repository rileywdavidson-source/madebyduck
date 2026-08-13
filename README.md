# Madebyduck

Single page. Hardcoded HTML and CSS. No framework, no build step, no dependencies.
Netlify serves the repo root as-is.

```
index.html      the whole page
styles.css      the whole design system
favicon.svg     PLACEHOLDER, stands in until the logo files land
fonts/          self-hosted woff2, latin subset only
netlify.toml    publish = "." plus cache headers for the fonts
```

Preview locally with any static server, e.g. `python3 -m http.server 8000`.

## The idea

The page is built out of the units it sells. Social, display and EDM are not a list of
words, they are the shape of the layout. Every block is an ad unit: chunky border, hard
offset shadow, a slug naming the format and its real size.

One motion idea, in one place. The hero is a display banner. It plays three frames,
lands on the end frame with the CTA, and stops. Under `prefers-reduced-motion` it shows
all four frames stacked, which is what a banner's frames are anyway.

## Fonts

Figtree (variable, 300-900) and EB Garamond italic 400. Latin subset, 45KB total,
self-hosted so there are no third-party requests at all. Figtree is preloaded.

## Placeholders to replace

| What | Where |
| --- | --- |
| Logo files | `index.html`, the `LOGO PLACEHOLDER` comment in `<header>`. A text wordmark stands in. |
| `favicon.svg` | Repo root. Brand mark, not the logo. |
| `og.png` | Does not exist yet. Needs a 1200x630 PNG at the site root. |
| Domain | `madebyduck.com.au` is assumed in the Open Graph tags. |
| ABN | `index.html`, `.legal` in the footer. |
| Privacy policy URL | `index.html`, currently `#privacy-placeholder`. |
| Website terms URL | `index.html`, currently `#terms-placeholder`. |

## Labels not in the supplied copy

Eyebrows: *Advertising*, *The duck*, *The audit*. The supplied section labels were too
long for an eyebrow, which is one or two words. *Pricing* and *Contact* are yours.
Format slugs: `Social 1080 x 1350`, `Display 300 x 250`, `EDM 600 wide`, plus the meta
description. Change any of them in `index.html`.

## The form

Netlify form named `audit`, with `data-netlify`, the hidden `form-name` input, and a
`bot-field` honeypot. Success state is CSS: Netlify redirects to `/#audit-sent` and
`:target` swaps the form for the confirmation. The small inline script posts the form in
place so the page does not navigate. With JS off, the redirect path does the same job.

## Changing things

Every colour, type size, spacing step and shadow offset is a custom property at the top
of `styles.css`. Buttons are one `.btn` rule. Section grounds are four modifier classes
(`--birch`, `--chestnut`, `--green`, `--blue`) that also carry the correct focus ring
colour for that ground.
