import type { Locale, GetLocaleParams } from 'astro:i18n';
import translations from './translations';

/**
 * Get translation strings for a specific locale
 * @param locale - The locale code (e.g., 'zh-TW', 'en', 'zh-CN')
 * @returns Translation object for the locale
 */
export function getTranslations(locale: Locale) {
  return translations[locale] || translations['zh-TW'];
}

/**
 * Get a nested translation value by key path
 * @param locale - The locale code
 * @param keyPath - Dot-notation path to the translation key (e.g., 'nav.home')
 * @param fallback - Optional fallback value if key is not found
 * @returns The translated string
 */
export function t(locale: Locale, keyPath: string, fallback?: string): string {
  const localeTranslations = getTranslations(locale);
  const keys = keyPath.split('.');
  let value: Record<string, unknown> = localeTranslations;

  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key] as Record<string, unknown>;
    } else {
      return fallback || keyPath;
    }
  }

  return typeof value === 'string' ? value : fallback || keyPath;
}

/**
 * Get the current locale from Astro params
 * @param params - Astro route params
 * @returns The locale code
 */
export function getLocaleFromParams(params: GetLocaleParams['params']): Locale {
  return (params.locale as Locale) || 'zh-TW';
}

/**
 * Get all supported locales with their metadata
 * @returns Array of locale objects with code, name, and path
 */
export function getAllLocales() {
  return [
    { code: 'zh-TW', name: '繁體中文', path: 'zh-TW' },
    { code: 'en', name: 'English', path: 'en' },
    { code: 'zh-CN', name: '简体中文', path: 'zh-CN' },
  ] as const;
}

/**
 * Get URL for a specific locale and path
 * @param locale - Target locale
 * @param path - Path without locale prefix
 * @returns Full localized path
 */
export function getLocalizedPath(locale: Locale, path: string = ''): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}
