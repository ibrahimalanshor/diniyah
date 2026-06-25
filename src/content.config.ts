import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { defineCollection, reference } from 'astro:content';

const section = defineCollection({
  loader: file('./src/content/sections.json'),
  schema: z.object({
    title: z.string(),
  }),
});

const article = defineCollection({
  loader: glob({ base: './src/content/articles', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    section: reference('section'),
  }),
});

export const collections = { section, article };
