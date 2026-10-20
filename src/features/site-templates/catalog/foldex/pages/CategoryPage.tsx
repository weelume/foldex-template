import type { SiteTemplatePageProps } from '../../../types';
import '../theme.css';
import { copy } from '../content/copy';
import { Shell, PageIntro } from '../components/Shell';
import { categories } from '../content/projects';
import { Gallery } from '../components/Gallery';
export function CategoryPage({ locale = 'zh', basePath, id }: SiteTemplatePageProps & {
    id: string;
}) { const c = copy[locale], category = categories.find(cat => cat.id === id); if (!category)
    throw new Error('Unknown Foldex category: ' + id); return <Shell locale={locale} basePath={basePath} slug={'portfolio/' + id}><PageIntro eyebrow={c.topic} title={category.name[locale]} description={category.intro[locale]}/><Gallery projects={category.projects} locale={locale}/></Shell>; }
