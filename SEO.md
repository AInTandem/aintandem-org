# SEO Guide for AInTandem.org

This guide covers how SEO is implemented in this Astro project and how to maintain it.

## Overview

The project implements comprehensive SEO optimization including:

- **Sitemap** (`sitemap-index.xml`) - Automatically generated via `@astrojs/sitemap`
- **Robots.txt** - Configured to allow all crawlers
- **Meta Tags** - Open Graph, Twitter Cards, and structured data
- **JSON-LD** - Structured data for blog posts
- **Canonical URLs** - Prevents duplicate content issues

## Architecture

### Components

- **`src/components/SEO.astro`** - Reusable SEO component with all meta tags
- **`src/layouts/BaseLayout.astro`** - Main layout that includes SEO component
- **`src/pages/blog/[slug].astro`** - Blog post pages with JSON-LD structured data

### Configuration Files

- **`astro.config.mjs`** - Site URL and sitemap integration
- **`public/robots.txt`** - Search engine crawler instructions

## SEO Features Implemented

### 1. Basic Meta Tags
```astro
<!-- Automatically included via SEO component -->
<title>Page Title - AInTandem</title>
<meta name="description" content="Page description" />
<link rel="canonical" href="https://aintandem.org/page" />
```

### 2. Open Graph Tags (Facebook/LinkedIn)
```astro
<meta property="og:type" content="website" />
<meta property="og:url" content="https://aintandem.org/page" />
<meta property="og:title" content="Page Title" />
<meta property="og:description" content="Page description" />
<meta property="og:image" content="https://aintandem.org/image.png" />
```

### 3. Twitter Cards
```astro
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="https://aintandem.org/page" />
<meta name="twitter:title" content="Page Title" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://aintandem.org/image.png" />
```

### 4. Article Meta Tags (Blog Posts)
```astro
<meta property="article:published_time" content="2025-01-04T00:00:00Z" />
<meta property="article:modified_time" content="2025-01-04T00:00:00Z" />
<meta property="article:tag" content="tag1" />
<meta property="article:tag" content="tag2" />
```

### 5. JSON-LD Structured Data
```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article Title",
  "description": "Article description",
  "datePublished": "2025-01-04T00:00:00Z",
  "author": {
    "@type": "Organization",
    "name": "AInTandem Team"
  }
}
```

## Maintenance Guide

### Adding New Content

#### New Blog Post
When creating a new blog post in `src/content/blog/`:

1. **Fill in frontmatter completely**:
   ```yaml
   ---
   title: "Post Title"
   description: "A compelling description for search results"
   pubDate: 2025-01-04
   updatedDate: 2025-01-04  # When updating content
   tags: ["announcement", "architecture"]
   lang: 'zh-TW'  # or 'en'
   draft: false
   heroImage: "/images/hero-image.png"  # Optional but recommended
   ---
   ```

2. **SEO automatically handles**:
   - Title and description meta tags
   - Open Graph and Twitter Card tags
   - Article-specific meta tags (published time, tags)
   - JSON-LD structured data
   - Canonical URL

#### New Static Page
When creating a new page:

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
---

<BaseLayout
  title="Page Title"
  description="Page description for SEO"
  image="/optional-hero-image.png"
>
  <main>
    <!-- Page content -->
  </main>
</BaseLayout>
```

### Updating SEO Settings

#### Change Site URL
Edit `astro.config.mjs`:
```js
export default defineConfig({
  site: 'https://your-domain.com',  // Update this
  // ...
});
```

#### Modify Default Meta Tags
Edit `src/components/SEO.astro`:
```astro
const {
  title = 'AInTandem - 人與 AI 的共生創作場',
  description = '致力於本地化及專屬化 AI...',
  // ...
} = Astro.props;
```

#### Update Keywords
Edit `src/components/SEO.astro`:
```astro
<meta name="keywords" content="AI, 人工智慧, 新 keywords, ..." />
```

### Updating Existing Content

#### When Editing a Blog Post
1. Update the `updatedDate` in frontmatter:
   ```yaml
   updatedDate: 2025-01-10  # New update date
   ```

2. Review and update the description if content changed significantly

3. Consider updating tags if the topic has shifted

#### When Changing Page URLs
If you change a page URL, consider:
1. Setting up a redirect (server configuration)
2. Updating the canonical URL
3. Submitting the new URL to Google Search Console

## Generated Files

After running `pnpm build`, the following SEO files are generated:

- **`dist/sitemap-index.xml`** - Main sitemap index
- **`dist/sitemap-0.xml`** - Page URLs
- **`dist/robots.txt`** - Copied from `public/robots.txt`

Verify these exist after building.

## SEO Checklist

### Before Publishing New Content
- [ ] Title is descriptive and includes keywords (50-60 characters)
- [ ] Description is compelling and within limit (150-160 characters)
- [ ] Hero image is optimized (under 1MB, proper dimensions)
- [ ] Tags are relevant and descriptive
- [ ] Language is correctly set (`zh-TW` or `en`)
- [ ] Draft is set to `false` when ready to publish

### Regular SEO Maintenance
- [ ] Check for broken links quarterly
- [ ] Review and update old content descriptions
- [ ] Verify sitemap is accessible at `https://aintandem.org/sitemap-index.xml`
- [ ] Submit sitemap to Google Search Console and Bing Webmaster Tools
- [ ] Monitor search performance in Google Search Console

### After Major Changes
- [ ] Rebuild and verify sitemap includes all pages
- [ ] Test meta tags using [Open Graph Debugger](https://www.opengraph.xyz/)
- [ ] Validate structured data using [Rich Results Test](https://search.google.com/test/rich-results)
- [ ] Check robots.txt is accessible

## Tools and Resources

### Validation Tools
- **Google Rich Results Test**: https://search.google.com/test/rich-results
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **Schema Markup Validator**: https://validator.schema.org/

### SEO Resources
- [Google Search Central](https://developers.google.com/search)
- [Open Graph Protocol](https://ogp.me/)
- [Schema.org](https://schema.org/)
- [Astro SEO Guide](https://docs.astro.build/en/guides/seo/)

## Troubleshooting

### Sitemap Not Generating
- Verify `site` is set in `astro.config.mjs`
- Check `@astrojs/sitemap` is installed: `pnpm list @astrojs/sitemap`
- Run `pnpm build` to regenerate

### Meta Tags Not Appearing
- Check that `SEO` component is imported in layout
- Verify props are being passed correctly
- Inspect page source (Cmd+Option+U) to verify

### Structured Data Errors
- Validate at https://validator.schema.org/
- Check dates are in ISO 8601 format
- Ensure all required fields are present

## Future Enhancements

Potential SEO improvements to consider:

1. **Breadcrumbs JSON-LD** - Add breadcrumb structured data
2. **Organization Schema** - Add organization knowledge graph
3. **Favicon variants** - Create multiple favicon sizes
4. **Image alt text** - Ensure all images have descriptive alt text
5. **Page speed** - Optimize images and lazy loading
6. **Hreflang tags** - For multilingual SEO (if implementing full i18n)

---

For questions or updates to this guide, please refer to the project's main documentation.
