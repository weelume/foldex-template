import type { SiteTemplatePageProps } from '../../../types';
import '../theme.css';
import { copy } from '../content/copy';
import { Shell, PageIntro, CallToAction } from '../components/Shell';
import Link from 'next/link';
import { href } from '../routing';
export default function Page({ locale = 'zh', basePath }: SiteTemplatePageProps) { const c = copy[locale]; return <Shell locale={locale} basePath={basePath} slug="404"><PageIntro eyebrow="404" title={c.notFound} description={c.missing}/><div className="fx-center"><Link className="fx-button" href={href(basePath)}>{c.back}</Link></div><CallToAction locale={locale} basePath={basePath}/></Shell>; }
