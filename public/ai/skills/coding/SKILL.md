---
name: coding
description: Apply the coding preferences below when implementing, refactoring, or reviewing code.
---

# Coding

- Do not write comments unless asked.
- Follow existing structure and tooling. Reuse utilities, components, dependencies, and platform APIs before adding new ones.
- Name features and utilities by purpose. Design shared helpers for plausible future reuse, with generic names and locations; keep business rules with their feature.
- Watch cyclomatic complexity. Simplify nested conditions and ternaries with named expressions, clear branches, and focused functions.
- Match the project's formatting. Prefer inferred local types and clear public contracts.
- Never use magic numbers or strings. Reuse named constants and group related constants in `const` objects. Move them to a dedicated file when they clutter the feature.
- Prefer keyed mappings for case-specific data and handlers over repeated `if`/`else` or `switch` branches. Keep conditionals for actual conditions.

```javascript
const TOOLS = {
  TOOL_A: 'TOOL_A',
};

const toolHandlers = {
  [TOOLS.TOOL_A]: {
    label: 'Tool A',
    fn: () => handleToolA(),
  },
};

const result = toolHandlers[TOOLS.TOOL_A].fn();
```

## React and UI

- Keep independent state separate, derive values during render, and use functional updates when previous state is needed. Use context for widely shared state instead of prop drilling.
- Avoid `useEffect`. Before each use, reread [You Might Not Need an Effect](https://react.dev/learn/you-might-not-need-an-effect) and confirm external synchronization requires it. Prefer event handlers and component APIs over timers and manual DOM manipulation.
- Reuse existing components, styles, and interactions. Use design tokens when available. Check designs against existing behavior. Reserve CSS custom properties for reuse or runtime theming.

## Verification and delivery

- Run affected existing checks and follow any repository execution limits. Add tests only for extremely complex logic or required coverage.
- Measure performance changes before and after with representative inputs.
- Remove wrappers, refs, and code made unused by the change without unrelated cleanup.
- Preserve existing user changes. Include UI screenshots when relevant. Report blocked checks and unverified behavior plainly.
