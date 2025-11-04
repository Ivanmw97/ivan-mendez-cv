import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    lang: z.enum(['en', 'es']).default('en'),
  }),
});

export const collections = { blog };
