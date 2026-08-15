# Logo

The supplied artwork, plus one recolour. All SVG, all flat, all in the brand
colours. No PNG or JPG version is kept here: SVG is what the site loads and it
stays sharp at every size.

```
madebyduck-lockup-green-duck-orange-wordmark.svg   duck + wordmark, as supplied
madebyduck-lockup-orange-duck-green-wordmark.svg   duck + wordmark, as supplied
madebyduck-wordmark-green.svg                      wordmark only, as supplied
madebyduck-wordmark-orange.svg                     wordmark only, as supplied
madebyduck-wordmark-birch.svg                      wordmark only, RECOLOUR (see below)
```

All five share `viewBox="0 0 500 262.48"`. The two lockups are one drawing with
the two fills assigned the opposite way round. The three wordmarks are a second,
different drawing: the wordmark is not simply the lockup with the duck deleted,
it repositions, so the two sets are not interchangeable.

## The Birch recolour

Only Birch and Beak Orange are legible on Mallard Green. The masthead is Mallard
Green, and orange is reserved for CTAs, so the supplied green and orange
wordmarks could not be used there. `madebyduck-wordmark-birch.svg` is the
supplied green wordmark with `#1b5533` replaced by `#fff3d6`. Nothing else
changed: same paths, same viewBox, same texture. To regenerate it:

```sh
sed 's/#1b5533/#fff3d6/' madebyduck-wordmark-green.svg > madebyduck-wordmark-birch.svg
```

## Where each one is used

| File | Where |
| --- | --- |
| `madebyduck-wordmark-birch.svg` | Masthead on all four pages, and the banner's resting card |
| `madebyduck-lockup-green-duck-orange-wordmark.svg` | `/og.png`, the social share card |
| the other three | Not used on the site. Kept for decks, invoices, anything on a light ground |

Neither supplied lockup works on the site's two dark grounds. On Mallard Green
the green half disappears; on Chestnut both halves go muddy. Making a lockup for
those grounds means recolouring one half of a two-colour mark, which is a design
decision, not a technical one. That is why the site signs off with the wordmark
and the full lockup lives on the Birch share card. Say the word if you want a
Birch or orange-on-green lockup and it takes one line, same as above.

## Clear space

Every file carries its own clear space. The artwork is 57% of the file's height
and starts 11.5% in from the left edge. Two consequences:

1. A `height` in the CSS is the height of the **file**. The wordmark itself
   renders at about 57% of it. `--wm-h` in `styles.css` is set accordingly.
2. Flush-left placements pull the file back by `calc(var(--wm-h) * -0.2195)` so
   the artwork lines up with the type below it. The file is not trimmed and the
   artwork is not cropped. Do not "fix" this by editing the SVG.

## Still outstanding

**A standalone duck mark, square.** `favicon.svg` at the repo root is a
placeholder: a flat brand tile, not the logo. A favicon needs a square mark that
reads at 16px, and neither supplied file is square or legible that small. The
duck could be lifted out of the lockup, but that would be cropping the logo, so
it has deliberately not been done. Export the duck on its own, roughly square,
save it as `favicon.svg`, and it drops straight in with no code change.

## Regenerating og.png

`/og.png` is 1200x630: the green-duck lockup at 880px wide, centred on Birch,
with a 10px Beak Orange rule top and bottom. Rebuild it from any HTML-to-image
tool with that recipe, or re-export from the design file at the same size.
