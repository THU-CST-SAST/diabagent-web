# DiabAgent Website

Project website, first extracted from
`Einsia/Einsia-lab`, branch `site/DiabAgent`, commit
`a2291b926fe2e85bb1e6727a6a2edcabde5ccfbc`.

The five model results, task catalogue, recorded trajectories, and ablation
results are retained. Main-evaluation baselines use the matched 212-world,
15-minute results: Basal–Bolus (BB), Event-Aware Basal–Bolus (BB+Rules), and OpenAPS. Agent
decisions remain hourly; both schedules allow up to six extra event-triggered
decisions per local day.

The site is bilingual: the domain root opens English under `/en/`, and Chinese
is available under `/diabagent/`, with a
switch in the header. Page text lives in each page's `copy`; Chinese for the
generated data is in `src/lib/diabagent.zh.js`. Agents' recorded rationales stay
in their original English.

## Local Development

```sh
npm ci
npm run dev
npm run build
```

GitHub Actions deploys `main` to GitHub Pages at https://diabagent.net9.org/ .
The deployment builds Astro with `SITE=https://diabagent.net9.org` and
`BASE_PATH=/` so assets and links resolve from the custom domain root.

The header links to the SAST homepage at https://net9.org/.
