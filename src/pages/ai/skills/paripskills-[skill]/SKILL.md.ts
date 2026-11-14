import type { APIRoute, GetStaticPaths } from "astro";
import { AGENT_SKILLS, readStandaloneSkill, type SkillId } from "../../../../utils/agentSkills";

export const getStaticPaths: GetStaticPaths = () =>
  (Object.keys(AGENT_SKILLS) as SkillId[]).map((id) => ({
    params: { skill: id },
    props: { id },
  }));

export const GET: APIRoute = async ({ props }) =>
  new Response(await readStandaloneSkill(props.id), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
