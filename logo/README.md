# Logo files

Drop the exported files in this folder using the names below. The site is already
sized and positioned for them; swapping the text wordmark for the real logo is one
edit per page (four pages), marked `LOGO PLACEHOLDER` in each HTML file.

## Format

**SVG.** It is a logo: vector, sharp at every size, and a few KB. Export from the
vector source with text converted to outlines so it never depends on a font being
present. The speckled texture will come out as vector shapes, which is fine.

The one thing to watch is file size. That texture can explode the path count. If any
export lands over about 60KB, use a transparent PNG at 3x instead
(`madebyduck-wordmark-birch@3x.png`, roughly 500px wide) and tell me, and I will
switch that one reference to an `<img srcset>`.

No JPG anywhere. It cannot do transparency and it will smear the edges.

## Files, and where each is used

| File | What it is | Used on |
| --- | --- | --- |
| `madebyduck-wordmark-birch.svg` | wordmark only, single colour `#FFF3D6` | the masthead, every page |
| `madebyduck-wordmark-orange.svg` | wordmark only, orange | supplied; fallback for dark grounds |
| `madebyduck-wordmark-green.svg` | wordmark only, green | any Birch ground |
| `madebyduck-lockup-green-orange.svg` | duck green, wordmark orange | Birch grounds, larger sizes |
| `madebyduck-lockup-orange-green.svg` | duck orange, wordmark green | Birch grounds, larger sizes |
| `duck-mark.svg` | the duck on its own, square artboard | favicon, app icon |

## Two files that were not supplied and are needed

1. **A Birch wordmark** (`#FFF3D6`, single colour). The masthead is Mallard Green, so
   the green wordmark disappears on it. The orange one works, but orange is doing CTA
   duty everywhere else on the site, so the mark would read as another button. A cream
   mono version is the one this site really wants.

2. **A standalone duck mark** on a square artboard, for the favicon and app icon. Not
   a crop of the lockup, an export of the duck on its own. At 16px a wide lockup is
   an unreadable smudge, and the favicon is currently a placeholder.

If you would rather not make a Birch version, say so and I will use
`madebyduck-wordmark-orange.svg` on both grounds.

## Where the logo does not go

Not as a background pattern, not scaled up as decoration, not as a bullet, not
cropped. It appears once per page, in the masthead. The footer is deliberately small,
just an email address and the legal line, so a mark there would bulk it up. The
banner's end frame
signs off in EB Garamond italic, by your call, though the logo lockup is the more
conventional choice there. Say the word and I will swap it.
