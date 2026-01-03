export interface TranslationData {
  site: {
    name: string;
    tagline: string;
    description: string;
  };
  nav: {
    home: string;
    blog: string;
    philosophy: string;
    roadmap: string;
    features: string;
    design: string;
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
  hero: {
    tagline: string;
    title: string;
    titleGradient: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    credits: string[];
  };
  sections: {
    philosophy: {
      title: string;
      subtitle: string;
      cards: Array<{
        title: string;
        desc: string;
        status: string;
      }>;
    };
    roadmap: {
      title: string;
      subtitle: string;
      cards: Array<{
        title: string;
        items: string[];
      }>;
    };
    features: {
      title: string;
      subtitle: string;
      items: Array<{
        number: string;
        title: string;
        desc: string;
        badge?: string;
        list?: string[];
      }>;
    };
    philosophyDesign: {
      title: string;
      subtitle: string;
      is: string;
      isNot: string;
      isList: string[];
      isNotList: string[];
    };
    install: {
      title: string;
      subtitle: string;
      desktop: {
        title: string;
        desc: string;
        button: string;
      };
      docker: {
        title: string;
        code: string;
        note: string;
      };
    };
    specs: {
      title: string;
      subtitle: string;
      table: {
        component: string;
        details: string;
        os: { name: string; value: string };
        devTools: { name: string; value: string };
        terminal: { name: string; value: string };
        editor: { name: string; value: string };
      };
    };
  };
  footer: {
    brand: string;
    copyright: string;
    github: string;
    discord: string;
    documentation: string;
  };
  language: {
    name: string;
    switchTo: {
      'zh-TW'?: string;
      en?: string;
      'zh-CN'?: string;
    };
  };
}
