import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection, reference } from 'astro:content';

const section = defineCollection({
  loader: file('./src/content/sections.json'),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedAt: z.coerce.date(),
  }),
});

const article = defineCollection({
  loader: glob({
    base: './src/content/articles',
    pattern: '**/*.md',
    generateId: ({ entry }) => entry.split('/')[1].replace(/\.md$/, ''),
  }),
  schema: z.object({
    title: z.string(),
    section: reference('section'),
    publishedAt: z.coerce.date(),
  }),
});

export const collections = { section, article };
