import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const posts = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/posts" }),
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
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    request: z.string().min(1),
    publishedAt: z.coerce.date(),
    draft: z.boolean().default(true),
    decision: z.enum([
      "recommend",
      "recommend with conditions",
      "do not recommend",
      "insufficient evidence",
    ]),
    chain: z.string().min(1),
    protocolVersion: z.string().min(1),
    asset: z.object({
      name: z.string().min(1),
      symbol: z.string().min(1),
      address: z.string().regex(/^0x[a-fA-F0-9]{40}$/),
      decimals: z.number().int().min(0).max(255),
    }),
    observation: z.object({
      block: z.number().int().positive(),
      observedAt: z.coerce.date(),
    }),
    reviewedBy: z.array(z.string().min(1)).min(1),
  }),
});

export const collections = { posts, reports };
