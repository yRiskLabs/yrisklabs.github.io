# Publishing asset reports

Only human-approved reports belong in `src/content/reports/`. Start a report
with this front matter:

```yaml
---
title: Asset / market review
description: One-sentence summary for search and link previews.
request: The original decision requested by the reviewer.
publishedAt: 2026-08-28
draft: true
decision: insufficient evidence
chain: Ethereum
protocolVersion: LlamaLend v2
asset:
  name: Example asset
  symbol: EXAMPLE
  address: "0x0000000000000000000000000000000000000000"
  decimals: 18
observation:
  block: 1
  observedAt: 2026-08-28T00:00:00Z
reviewedBy:
  - Reviewer name
---
```

Use exactly one decision: `recommend`, `recommend with conditions`, `do not
recommend`, or `insufficient evidence`. Keep `draft: true` until the report has
completed human review and publication approval. The build validates every
required field, address shape, date, block, and decision before deployment.

The report body must stand alone and use this order:

1. What makes this asset different
2. Decision and conditions
3. Recommended values and binding constraints
4. Evidence
5. Monitoring
6. Human review, publication, governance, and execution steps
