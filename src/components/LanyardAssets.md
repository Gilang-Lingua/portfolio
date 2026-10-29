# Lanyard artwork

The card and strap artwork are image files in `public/`:

- `lanyard-front.png`: front of the card, 640 × 900 px.
- `lanyard-back.png`: back of the card, 640 × 900 px.
- `lanyard-strap.png`: strap artwork, 1254 × 72 px.

Keep the 640:900 ratio for card artwork and 1254:72 ratio for the strap when replacing the PNGs. Replace the files in place, or change `frontImage`, `backImage`, and `strapImage` in `Hero.tsx`. The 3D portrait card is 1.6 × 2.25 units to match the supplied artwork; `size` controls its on-screen scale. The visible strap width is set by `strapWidth` in the same component.
