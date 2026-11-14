---
name: plan
description: Write implementation plans with separate human and agent sections.
---

# Plan

Use ASD-STE100 Simplified Technical English for the plan's prose.

Inspect the request, available context, repository guidance, and comparable implementations before planning. Verify contracts against source code, types, and schemas. Label mocks, fixtures, and assumptions.

Write the human part first, followed by the agent part.

## Human part

Give the approver enough information to understand what will be done. Start with the proposed file structure. Prefix each affected file with `N` for new, `E` for edit, or `R` for removal:

```text
src/
├── N tools.ts
├── E index.ts
└── R legacy-tools.ts
```

- Explain the problem, current behavior, intended outcome, acceptance criteria, and proposed changes. For a bug, show failing input and expected behavior.
- Include code examples for critical logic, interfaces, and integrations. Include UI examples or ASCII sketches when relevant.
- Explain important tradeoffs and decisions that need approval. Show relevant flag-on/off behavior and rollout changes. Do not leave scope or behavior decisions only in the agent part.

## Agent part

- Add exact files, symbols, existing utilities, dependencies, and implementation steps in dependency order. Verify existing paths and label proposed ones.
- Map acceptance criteria to existing checks, with commands and expected results. Add tests only for extremely complex logic or required coverage. Respect repository execution limits and separate planned checks from completed evidence.
- Include relevant UI states, realistic mocks, themes, sizes, and a local review URL. For performance work, compare representative inputs before and after.
- For migrations and rollouts, include execution order, risks, and rollback.
- Maintain one current plan per task. Follow the repository's planning workflow when one exists. Replace superseded decisions, preserve evidence, and keep unresolved decisions visible.

Keep both parts proportional to the change. Do not repeat the human part or add boilerplate phases or estimates.
