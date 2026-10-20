import type { SiteTemplatePageProps } from '../../../types';
import '../theme.css';
import { copy } from '../content/copy';
import { Shell, PageIntro } from '../components/Shell';
import { Folders } from '../components/Folders';
export default function Page({ locale = 'zh', basePath }: SiteTemplatePageProps) { const c = copy[locale]; return <Shell locale={locale} basePath={basePath}><PageIntro eyebrow={c.available} title={c.headline} description={c.subtitle}/><Folders locale={locale} basePath={basePath}/></Shell>; }
