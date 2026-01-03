import { defineCollection, z } from 'astro:content';

// Define all supported tag categories
export const SUPPORTED_TAGS = [
  { name: 'announcement', label: '公告' },
  { name: 'architecture', label: '架構與技術' },
  { name: 'thoughts', label: '思想與隨筆' },
  { name: 'roadmap', label: '路線圖' },
  { name: 'philosophy', label: '專案理念' },
] as const;

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).default([]),
    lang: z.enum(['zh-TW', 'en']).default('zh-TW'),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
