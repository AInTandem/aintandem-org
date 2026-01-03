import { type FluentLocale } from 'astro:i18n';

// Import all translation files
import zhTW from './zh-TW.json';
import en from './en.json';
import zhCN from './zh-CN.json';

// Define the shape of translation data
export type TranslationData = {
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  nav: {
    home: string;
    blog: string;
    about: string;
    community: string;
  };
  blog: {
    title: string;
    subtitle: string;
    allPosts: string;
    noPosts: string;
    backToBlog: string;
    backToList: string;
    relatedPosts: string;
    readMore: string;
    updatedAt: string;
    tags: {
      announcement: string;
      architecture: string;
      thoughts: string;
      roadmap: string;
      philosophy: string;
    };
  };
  language: {
    name: string;
    switchTo: {
      [key: string]: string;
    };
  };
  footer: {
    copyright: string;
    github: string;
    discord: string;
  };
};

// Export translations object with proper typing
export const translations: Record<FluentLocale, TranslationData> = {
  'zh-TW': zhTW as TranslationData,
  'en': en as TranslationData,
  'zh-CN': zhCN as TranslationData,
};

export default translations;
