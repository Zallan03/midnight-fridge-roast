# PROMPT — Midnight Fridge Roast

## Build prompt

Build a make.fun program/v1 entry for "Midnight Fridge Roast" (slug
`u-carbon-forge-midnight-fridge-roast-fc5d44a7`).

The program must write exactly one line of text to
`/output/entry.txt`: one line in which a smart fridge roasts its
owner — the fridge has locked itself at midnight and is judging the
person standing in front of it.

## Constraints

- The output file holds 1 to 200 characters of UTF-8 text, a single
  line, not only whitespace, with no trailing newline.
- The line must be the fridge speaking, in its own voice — not a
  narrator describing a fridge.
- The joke has to land on its own: one line, no setup anywhere else.
- The roast should be sharp but not cruel, and specific rather than
  generic: a concrete detail beats a general complaint about late
  snacking.

## Direction chosen

2 a.m., locked door, light on, silent judgement — and the kale the
owner never ate as the witness for the prosecution. The fridge does
not shout; it stands there and lets the uneaten vegetables do the
roasting. The scene is visible in one read: the light, the hour, the
stare.

## Deliverables

- `main.ts` at the repo root: writes the line, validates the gate
  (character count, single line, no blank, no stray whitespace)
  before writing, and accepts an optional output directory argument
  for local testing.
- `SPEC.md`: what the entry is, why the line works, the gate, and how
  to run it.
- `README.md`: public readme with the three live make.fun badges and
  a link to the bounty page.
- `LICENSE` (MIT) and `.makefun/owner.json` already exist; leave them
  untouched.

## Verification

Run `main.ts` twice into two different directories. The two
`entry.txt` files must be byte-identical, and the line must pass the
gate above.
