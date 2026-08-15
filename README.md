# Madebyduck

Four pages, one section each. Hardcoded HTML and CSS. No framework, no build step,
no dependencies. Netlify serves the repo root as-is.

```
index.html                  home: the banner, then the philosophy
why-the-duck/index.html     the three beliefs, set in the three formats
pricing/index.html          the three retainers, then the questions
contact/index.html          get in touch: the form, then the audit line
styles.css                  the whole design system, shared by all four
favicon.svg                 PLACEHOLDER, stands in until the logo files land
fonts/                      self-hosted woff2, latin subset only
netlify.toml                publish = "." plus cache headers for the fonts
```

Pages are directories, not `pricing.html`, so the URLs are clean with no redirect and
resolve the same way locally as they do on Netlify.

Every page ends on a small get in touch: the email address and the legal line. The
exception is `/contact/`, which carries the address in the audit line above the footer,
so its footer drops to the legal line rather than repeating it twice on one screen.

Get in touch is the call to action. The banner ends on it, and it sits in the nav on
every page. The free creative audit is a smaller offer at the foot of `/contact/`,
taken up by email rather than through the form.

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

Highlighted words use `--hi`, which is Beak Orange. Note that Beak Orange on Speculum
Blue is 2.90:1, under the 3:1 bar for large text, so "long game." on the home page sits
below that threshold by choice. Redefining `--hi` on `.section--blue` is the one-line
fix if that ever needs changing.

## Fonts

Figtree (variable, 300-900) and EB Garamond italic 400. Latin subset, 45KB total,
self-hosted so there are no third-party requests at all. Figtree is preloaded.

## Placeholders to replace

| What | Where |
| --- | --- |
| Logo files | See `logo/README.md`. A text wordmark stands in on all four pages; the banner's last card signs off in EB Garamond italic. |
| `favicon.svg` | Repo root. Brand mark, not the logo. |
| `og.png` | Does not exist yet. Needs a 1200x630 PNG at the site root. |
| Domain | `madebyduck.com.au` is assumed in the Open Graph tags and canonicals. The email is `@madebyduck.com`, so this may want to be `.com` too. |
| ABN | `index.html`, `.legal` in the footer. |
| Privacy policy URL | `index.html`, currently `#privacy-placeholder`. |
| Website terms URL | `index.html`, currently `#terms-placeholder`. |

## Labels not in the supplied copy

Eyebrows: *Philosophy*, *The duck*, *The audit*. Plus the *Find out more* label on
the home page. The supplied section labels were too long for an
eyebrow, which is one or two words. *Pricing* and *Contact* are yours. The contact
form's button says **Send**, since the supplied "Get my audit" no longer matches a
general enquiry form. Page titles and meta descriptions are mine too.
Format slugs: `Social 1080 x 1350`, `Display 300 x 250`, `EDM 600 wide`, plus the meta
description. Change any of them in `index.html`.

## The form

Lives on `/contact/`. Netlify form named `contact`, with `data-netlify`, the hidden
`form-name` input, and a `bot-field` honeypot. Fields are Name, Business, Why you
reaching out, Message. Success state is CSS: Netlify redirects to
`/contact/#contact-sent` and
`:target` swaps the form for the confirmation. The small inline script posts the form in
place so the page does not navigate. With JS off, the redirect path does the same job.

## Changing things

Every colour, type size, spacing step and shadow offset is a custom property at the top
of `styles.css`. Buttons are one `.btn` rule, and every CTA on the site uses it
unchanged: orange fill, chestnut text, and the outline and the offset shadow both
chestnut so the two read as one form.

The logo is not in the repo yet. `logo/README.md` says which files to export, in what
format, and where each one goes. Each page carries a `LOGO PLACEHOLDER` comment with
the exact line to paste once the files land. Section grounds are four modifier classes
(`--birch`, `--chestnut`, `--green`, `--blue`) that also carry the correct focus ring
colour for that ground.
