---
title: Decision first. Evidence beneath it.
description: The operating principle behind yRisk's public risk work for Curve.
publishedAt: 2026-08-28
topics:
  - process
  - evidence
  - governance
draft: false
---

Good risk work starts with reliable data, shows its reasoning, and follows
through when something needs to change.

yRisk is building a public risk operating system for Curve: connected tools
and workflows for asset evaluation, market monitoring, governance support, and
incident response. The useful output is not a dashboard or report by itself.
It is a decision that another person can inspect, reproduce, challenge, and
improve.

## The order matters

Every asset report starts with one of four decisions: `recommend`, `recommend
with conditions`, `do not recommend`, or `insufficient evidence`. The facts
that make the asset materially different follow immediately. Evidence,
calculations, contract detail, and simulations sit beneath that conclusion.

No value is invented to complete a report. Unknown or stale state remains
visible, and missing data never appears healthy.

## Automation supports judgment

Automation is most useful when it handles repeatable work: discovering live
markets, recording pinned onchain state, checking invariants, calculating with
integer precision, and alerting when a known dependency degrades.

It may monitor, analyze, draft, and simulate. Human review governs publication,
and Curve governance and the eDAO retain approval and execution authority.

That boundary keeps the machinery fast while leaving the decision accountable.
