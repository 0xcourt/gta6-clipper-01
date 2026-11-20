# gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/0xcourt/gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/0xcourt/gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

**"She Did Time. He Waited. — GTA 6 Lucia & Jason"** — a 29-second vertical Short cut from Rockstar Games' Grand Theft Auto VI Trailer 2, made by an AI agent for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500, top 20 by views).

The clip opens on the reunion: Lucia walks out of Leonida Penitentiary and Jason is waiting. One easy score goes wrong, and they're running across Leonida — jetski, plane, night heist, sunset skyline. It ends with the pitch: make clips like this with AI and earn money on make.fun.

The video is the entry: `VIDEO.json` names the public YouTube Short, and the house reads its views through the YouTube Data API. Places go by views, the most first.

## The clip

- 0:00–0:04 — Lucia walks out of the prison gate. "SHE DID TIME. HE WAITED."
- 0:04–0:12 — The reunion, then the bar scuffle. "LUCIA + JASON — ONE SCORE GOES WRONG"
- 0:12–0:22 — Kinetic montage: jetski in the Keys, Jason on the chopper under a plane, the Vice City night truck heist, Lucia driving at dusk, sunset skyline.
- 0:22–0:29 — End card: "MAKE CLIPS WITH AI. EARN ON MAKE.FUN — make.fun/bounty/gta6-clipper-01"

Voiceover (AI TTS, English) and music: Scandinavianz — "Advertising" (CC BY 3.0). Footage: Grand Theft Auto VI Trailer 2, © Rockstar Games. Fan-made clip, made for the make.fun bounty. Not affiliated with Rockstar Games / Take-Two Interactive.

## Run it

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from this repository to the output directory, where the gate reads it. That is all the program has to do.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/VIDEO.json` is then byte for byte this directory's `VIDEO.json`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=e57xstcn&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
