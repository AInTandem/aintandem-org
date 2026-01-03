import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: 'AInTandem 部落格',
    description: 'AInTandem 專案的技術文章與更新分享',
    site: context.site ?? 'https://www.aintandem.org',
    items: posts
      .filter(post => !post.data.draft)
      .map(post => ({
        title: post.data.title,
        pubDate: post.data.pubDate,
        description: post.data.description,
        link: `/blog/${post.slug}/`,
      })),
    customData: `<language>zh-TW</language>`,
  });
}
