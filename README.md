# Madebyduck

Three pages. Hardcoded HTML and CSS. No framework, no build step, no dependencies.
Netlify serves the repo root as-is.

```
index.html            home: the banner, the case for advertising, why the duck
pricing/index.html    pricing: the three retainers, then all five questions
audit/index.html      the free audit: the pitch and the form
styles.css            the whole design system, shared by all three
favicon.svg           PLACEHOLDER, stands in until the logo files land
fonts/                self-hosted woff2, latin subset only
netlify.toml          publish = "." plus cache headers for the fonts
```

Pages are directories, not `pricing.html`, so the URLs are `/pricing/` and `/audit/`
with no redirect, and they resolve the same way locally as they do on Netlify.

The pages run pitch, then qualify, then convert. Pricing sits one click from every page
so people can rule themselves out on price before they email. The audit is the only
call to action; every page ends pointing at it.

**Header and footer are duplicated in all three files.** That is the cost of no build
step. Styling is still one edit because it all lives in `styles.css`, but changing nav
wording or the footer means the same edit three times.

Preview locally with any static server, e.g. `python3 -m http.server 8000`.

## The idea

The page is built out of the units it sells. Social, display and EDM are not a list of
words, they are the shape of the layout. Every block is an ad unit: chunky border, hard
offset shadow, a slug naming the format and its real size.

One motion idea, in one place. The hero is a display banner on one Mallard Green ground.
Five frames cross over each other and the type changes colour, building in Birch and
landing on Beak Orange for "Get known." Then it holds on the last card and stops. That
card is the whole banner on one: the three beats, the wordmark, the CTA, with the orange
kept on "Get known." Seven seconds, one pass. Under `prefers-reduced-motion` the page
simply opens on that last card, so nothing is lost. Timing is one custom property,
`--banner-run`.

Only Birch and Beak Orange are legible as type on Mallard Green (7.96:1 and 3.12:1).
Speculum Blue reads 1.08:1 there and Chestnut 1.67:1, so neither is usable for text on
that ground.

## Fonts

Figtree (variable, 300-900) and EB Garamond italic 400. Latin subset, 45KB total,
self-hosted so there are no third-party requests at all. Figtree is preloaded.

## Placeholders to replace

| What | Where |
| --- | --- |
| Logo files | `index.html`, the `LOGO PLACEHOLDER` comment in `<header>`. A text wordmark stands in, and the banner's last card signs off in EB Garamond italic. |
| `favicon.svg` | Repo root. Brand mark, not the logo. |
| `og.png` | Does not exist yet. Needs a 1200x630 PNG at the site root. |
| Domain | `madebyduck.com.au` is assumed in the Open Graph tags. |
| ABN | `index.html`, `.legal` in the footer. |
| Privacy policy URL | `index.html`, currently `#privacy-placeholder`. |
| Website terms URL | `index.html`, currently `#terms-placeholder`. |

## Labels not in the supplied copy

Eyebrows: *Advertising*, *The duck*, *The audit*, *Next*. The supplied section labels
were too long for an eyebrow, which is one or two words. *Pricing* and *Contact* are
yours. Page titles and meta descriptions are mine too.
Format slugs: `Social 1080 x 1350`, `Display 300 x 250`, `EDM 600 wide`, plus the meta
description. Change any of them in `index.html`.

## The form

Lives on `/audit/`. Netlify form named `audit`, with `data-netlify`, the hidden
`form-name` input, and a `bot-field` honeypot. Success state is CSS: Netlify
redirects to `/audit/#audit-sent` and
`:target` swaps the form for the confirmation. The small inline script posts the form in
place so the page does not navigate. With JS off, the redirect path does the same job.

## Changing things

Every colour, type size, spacing step and shadow offset is a custom property at the top
of `styles.css`. Buttons are one `.btn` rule. Section grounds are four modifier classes
(`--birch`, `--chestnut`, `--green`, `--blue`) that also carry the correct focus ring
colour for that ground.
