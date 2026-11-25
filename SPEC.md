# SPEC — Midnight Fridge Roast

## What this entry is

One line of text: a smart fridge roasting its owner for opening it
at 2 a.m. The program in `main.ts` writes that line, and nothing
else, to `/output/entry.txt`.

## The line

> It is 2 a.m. I locked the door, turned on the light, and I am just going to stand here judging you in silence like the kale you never ate.

138 characters, one line, plain ASCII, no trailing newline in the file.

## Why this line

- The voice is the fridge's own: first person, locked door, light
  on, judgement delivered in silence. It is not a narrator describing
  a fridge; it is the appliance talking.
- The roast lands through a concrete detail rather than a lecture.
  The kale — bought with good intentions, never eaten — is the
  witness for the prosecution, and it makes the midnight raid feel
  like a habit with a history, not a one-off.
- The time is doing work too. "2 a.m." plus a locked door plus a
  silent stare is a scene, not just a punchline: the reader can see
  the light spilling out and the owner caught in it.
- It is funny without being cruel and sharp without needing a second
  sentence. The judgement is in the comparison: the fridge judges
  the way the kale would, if kale could judge.

## Gate

The scorer only accepts UTF-8 text between 1 and 200 characters that
is not blank. `main.ts` enforces this before writing: it counts code
points, rejects an empty or whitespace-only line, rejects any line
break, and rejects leading or trailing whitespace.

## How the field is judged

Entries are read two at a time by a house judge, which keeps the
funnier line round after round until one line is left standing. The
joke has to land on its own: one line, no setup anywhere else, the
funniest line takes the top reward.

## How to run

```sh
node main.ts            # writes /output/entry.txt
node main.ts /tmp/out   # local check: writes /tmp/out/entry.txt
```

The program is deterministic: every run writes the same bytes. Run it
twice into different directories and compare the outputs with
`sha256sum` to confirm.

## Files

- `main.ts` — the entry program (entrypoint).
- `SPEC.md` — this file.
- `PROMPT.md` — the build prompt behind this entry.
- `README.md` — the public readme with the live make.fun badges.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the payout wallet claim file.
