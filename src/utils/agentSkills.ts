export const PLUGIN_NAME = "paripskills";

export const AGENT_SKILLS = {
  voice: { title: "Voice", icon: "mdi:text-box-outline" },
  plan: { title: "Plan", icon: "mdi:file-tree-outline" },
  coding: { title: "Coding", icon: "mdi:code-tags" },
} as const;

export type SkillId = keyof typeof AGENT_SKILLS;

const SKILL_DOCUMENTS = import.meta.glob<string>("../../public/ai/skills/*/SKILL.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

export const readSkill = (id: SkillId) =>
  SKILL_DOCUMENTS[`../../public/ai/skills/${id}/SKILL.md`];

export const readStandaloneSkill = (id: SkillId) =>
  readSkill(id).replace(/^name:[^\r\n]+/m, `name: ${PLUGIN_NAME}-${id}`);
