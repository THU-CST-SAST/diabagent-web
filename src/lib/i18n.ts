import { projectPath } from "@/lib/project-paths";

export type Lang = "zh" | "en";

/** A page's link in one language. Data files are shared, so they keep projectPath. */
export const pagePath = (lang: Lang, path: string) =>
  projectPath(lang === "en" ? `/en${path}` : path);

/** The language-free path of a page, from a pathname such as /en/diabagent/. */
export const pageOf = (pathname: string) =>
  pathname
    .slice(import.meta.env.BASE_URL.replace(/\/$/, "").length)
    .replace(/^\/en(?=\/|$)/, "") || "/";
