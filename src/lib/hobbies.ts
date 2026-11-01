import fs from "node:fs";
import path from "node:path";
import { marked } from "marked";

// Hobby posts live in content/hobbies/*.md. Files whose names begin with "_"
// are templates or drafts and are not published.
const HOBBIES_DIR = path.join(process.cwd(), "content/hobbies");
export type HobbyLocale = "zh" | "en";

export type HobbyPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  html: string;
};

function parse(file: string): Omit<HobbyPost, "slug"> {
  const raw = fs.readFileSync(file, "utf8");
  const meta: Record<string, string> = {};
  let body = raw;

  const frontmatter = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (frontmatter) {
    body = frontmatter[2];
    for (const line of frontmatter[1].split("\n")) {
      const separator = line.indexOf(":");
      if (separator === -1) continue;
      meta[line.slice(0, separator).trim()] = line
        .slice(separator + 1)
        .trim()
        .replace(/^["']|["']$/g, "");
    }
  }

  return {
    title: meta.title ?? "Untitled",
    date: meta.date ?? "",
    description: meta.description ?? "",
    html: marked.parse(body) as string,
  };
}

export function getHobbyPosts(locale: HobbyLocale = "zh"): HobbyPost[] {
  const directory = locale === "en" ? path.join(HOBBIES_DIR, "en") : HOBBIES_DIR;
  if (!fs.existsSync(directory)) return [];
  return fs
    .readdirSync(directory)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => ({
      slug: file.replace(/\.md$/, ""),
      ...parse(path.join(directory, file)),
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getHobbyPost(slug: string, locale: HobbyLocale = "zh"): HobbyPost | undefined {
  return getHobbyPosts(locale).find((post) => post.slug === slug);
}

export function formatHobbyDate(date: string, locale: HobbyLocale = "zh"): string {
  if (!date) return "";
  return new Date(`${date}T00:00:00`).toLocaleDateString(locale === "zh" ? "zh-TW" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
