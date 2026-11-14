# Paripskills

Three skills for writing, planning and coding. Install them together as a plugin, or choose individual skills.

Ask your agent:

> Install the paripskills plugin using https://paripsky.github.io/ai/install.md.

Works with Codex and Claude Code. Ask for the **full setup** to include the optional general instructions.

## Plugin

Codex:

```sh
codex plugin marketplace add paripsky/paripsky.github.io
codex plugin add paripskills@paripskills
```

Claude Code:

```sh
claude plugin marketplace add paripsky/paripsky.github.io
claude plugin install paripskills@paripskills
```

For local review, run these from the portfolio checkout and use `.` instead of `paripsky/paripsky.github.io` as the marketplace source. Remote installation becomes available after the package is published to that repository.

Select the installed plugin's Voice, Plan or Coding skill in Codex. In Claude Code, use `/paripskills:voice`, `/paripskills:plan` or `/paripskills:coding`.

## Individual skills

| Skill | Download | Codex | Claude Code |
| --- | --- | --- | --- |
| Voice | [SKILL.md](https://paripsky.github.io/ai/skills/paripskills-voice/SKILL.md) | `$paripskills-voice` | `/paripskills-voice` |
| Plan | [SKILL.md](https://paripsky.github.io/ai/skills/paripskills-plan/SKILL.md) | `$paripskills-plan` | `/paripskills-plan` |
| Coding | [SKILL.md](https://paripsky.github.io/ai/skills/paripskills-coding/SKILL.md) | `$paripskills-coding` | `/paripskills-coding` |

The website generates these downloads from the plugin's skill files. They contain the same instructions, with standalone names.

## Maintenance

Edit `skills/voice`, `skills/plan` or `skills/coding`. Keep the version in both plugin manifests aligned when publishing a release. See [installation instructions](install.md) for scope, updates and optional general instructions.
