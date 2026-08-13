# Madebyduck

Four pages, one section each. Hardcoded HTML and CSS. No framework, no build step,
no dependencies. Netlify serves the repo root as-is.

```
index.html                  home: the banner, then the philosophy
why-the-duck/index.html     the three beliefs, set in the three formats
pricing/index.html          the three retainers, then all five questions
audit/index.html            the free audit, the form, and contact
styles.css                  the whole design system, shared by all four
favicon.svg                 PLACEHOLDER, stands in until the logo files land
fonts/                      self-hosted woff2, latin subset only
netlify.toml                publish = "." plus cache headers for the fonts
```

Pages are directories, not `pricing.html`, so the URLs are clean with no redirect and
resolve the same way locally as they do on Netlify.

Every page ends on a small get in touch: the email address and the legal line. The
exception is `/audit/`, where the full contact block already sits directly above the
footer, so the footer there drops to the legal line rather than repeating the address
twice on one screen.

The audit is the only call to action. Home carries it in the banner itself; why the duck
and pricing end on a Next band that points at it, and at the next page along.

**Header and footer are duplicated in all four files.** That is the cost of no build
step. Styling is still one edit because it all lives in `styles.css`, but changing nav
wording or the footer means the same edit four times.

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

Highlighted words use `--hi`, which is Beak Orange by default. On Speculum Blue that
would be 2.90:1, under the 3:1 large-text bar, so `.section--blue` redefines `--hi` to
Birch. Move a section between grounds and its highlight follows the ground.

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

Eyebrows: *Philosophy*, *The duck*, *The audit*, *Next*. The supplied section labels
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
