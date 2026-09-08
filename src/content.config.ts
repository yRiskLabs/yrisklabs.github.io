import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const research = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/research" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    topics: z.array(z.string().min(1)).min(1),
    draft: z.boolean().default(false),
  }),
});

const reports = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reports" }),
  schema: ({ image }) => z.object({
    title: z.string().min(1),
    tokenLogo: image().optional(),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(true),
    reviewedBy: z.array(z.string().min(1)).default([]),
  }).refine((report) => report.draft || report.reviewedBy.length > 0, {
    message: "Published reports require a named human reviewer.",
    path: ["reviewedBy"],
  }),
});

export const collections = { research, reports };
