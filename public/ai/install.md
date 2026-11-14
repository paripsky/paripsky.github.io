# Install

Use the current agent unless the request names another. Install the `paripskills` plugin by default. Install individual skills only when requested. Include general instructions only for the full setup.

## Plugin

The plugin is at `public/ai` in `https://github.com/paripsky/paripsky.github.io`. It contains `voice`, `plan` and `coding` skills. Both clients use the same files.

For a published install, use these commands:

| Agent | Add marketplace | Install |
| --- | --- | --- |
| Codex | `codex plugin marketplace add paripsky/paripsky.github.io` | `codex plugin add paripskills@paripskills` |
| Claude Code | `claude plugin marketplace add paripsky/paripsky.github.io` | `claude plugin install paripskills@paripskills` |

Use the default personal scope unless project scope is requested. For Claude Code project scope, append `--scope project` to the install command. In Codex, a project-only install can use the standalone option below; do not silently change personal plugin configuration when project scope was requested.

When this document comes from a local preview, use the portfolio checkout containing the marketplace files as the source, replacing `paripsky/paripsky.github.io` with its local path. Do not fetch the remote repository to test unpublished changes. If that checkout is unavailable, report the limitation.

If the CLI is unavailable, use the client's plugin interface with the same marketplace. Verify the plugin loads all three skills. Start a fresh Codex session or reload Claude Code plugins when needed.

Before switching from standalone copies, check for `paripskills-voice`, `paripskills-plan` and `paripskills-coding`. Remove matching, unmodified copies after the plugin is verified. Preserve edited copies and report conflicts. Avoid loading both forms.

## Individual skills

Download the requested files relative to this document's URL:

- `skills/paripskills-voice/SKILL.md`
- `skills/paripskills-plan/SKILL.md`
- `skills/paripskills-coding/SKILL.md`

Keep each file under its matching `<skill-name>/SKILL.md` directory:

| Agent | Personal scope | Project scope |
| --- | --- | --- |
| Codex | `~/.agents/skills/` | `.agents/skills/` |
| Claude Code | `~/.claude/skills/` | `.claude/skills/` |

These downloads are generated from the plugin skills with prefixed names. Confirm matching metadata and show conflicts before replacing existing files.

## Optional general instructions

For the full setup, download `AGENTS.md` relative to this document's URL. A plugin does not load it automatically.

- Codex: append to `AGENTS.md` in the configured Codex home, normally `~/.codex/`.
- Claude Code: append to `~/.claude/CLAUDE.md`.
- Project scope: use the project's `AGENTS.md` or `CLAUDE.md` respectively.

Preserve existing content. Enclose the downloaded instructions between `<!-- paripskills:ai:start -->` and `<!-- paripskills:ai:end -->`. On update, replace only that section and show conflicting instructions before changing their meaning.

Report installed paths, discovery results and any required reload. Use the client's plugin updater for plugin updates; third-party marketplace auto-update is not guaranteed. For removal, use the client uninstaller and remove only this collection's marked general-instruction section.
