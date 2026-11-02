# DiabAgent Website

Project website extracted without visual redesign from
`Einsia/Einsia-lab`, branch `site/DiabAgent`, commit
`a2291b926fe2e85bb1e6727a6a2edcabde5ccfbc`.

The five model results, task catalogue, recorded trajectories, video, and
ablation results are retained. Main-evaluation baselines use the matched
212-world, 15-minute results: standard care, guideline rules, and simulated
oref1. Agent decisions remain hourly; both schedules allow up to six extra
event-triggered decisions per local day.

## Local Development

```sh
npm ci
npm run dev
npm run build
```

GitHub Actions deploys `main` to GitHub Pages. The default deployment is
https://thu-cst-sast.github.io/diabagent-web/ . `SITE` and `BASE_PATH` are set
from the Pages configuration during deployment. No custom domain is configured.

The original laboratory navigation links remain external where the full
laboratory website is not part of this standalone project deployment.
