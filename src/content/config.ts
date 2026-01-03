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
    lang: z.enum(['zh-TW', 'en', 'zh-CN']).default('zh-TW'),
    draft: z.boolean().default(false),
    // Custom URL slug to unify multi-language posts
    // e.g., use same urlSlug for "post.md", "post.en.md", "post.zh-CN.md"
    urlSlug: z.string().optional(),
  }),
});

export const collections = { blog };
