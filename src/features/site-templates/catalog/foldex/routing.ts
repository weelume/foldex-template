import type { TemplateLocale } from '../../types';
export const href = (basePath: string, slug = '') => (basePath + '/' + slug).replace(/\/$/, '') || '/';
/** 只替换语言段，查询与锚点由调用方按浏览器当前位置保留。 */
export function alternatePath(basePath: string, slug: string, locale: TemplateLocale) { const base = basePath.replace(/\/en$/, ''); return href(locale === 'zh' ? base + '/en' : base, slug); }
