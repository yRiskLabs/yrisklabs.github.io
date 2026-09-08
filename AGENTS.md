# yRisk website

- Read `README.md`; this repository owns the Astro website and its deployment workflow.
- Follow `brand-kit/README.md` for the approved identity. Keep canonical brand assets here.
- Run `npm run build` to check Astro, TypeScript, content schemas, and static generation.
- Preserve the `/lr-handoff/` route, all 51 indexed documents, attachments, and
  third-party attribution. The archive's content is under `public/lr-handoff/`.
- Reports require human review before publication. Pushing `main` triggers a live
  deployment; local content work does not authorize that push.
- Prefer deployed code and pinned primary evidence; record chain ID, block/hash,
  UTC observation time, methods, addresses, units, and decimals for onchain results.
- Use `http://wavey:8545` for Ethereum reads and fork tests unless directed otherwise.
  Failed or stale data must remain explicit.
- Never commit credentials, signing material, private RPC URLs, or sensitive
  incident data. Preserve third-party licenses and attribution.
- Automation may analyze, draft, and simulate. It must not autonomously publish
  recommendations, deploy, sign or execute transactions, change parameters, or
  control admin keys. Curve governance and the eDAO retain execution authority.
