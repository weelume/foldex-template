import type { SiteTemplatePageProps } from '../../../types';
import '../theme.css';
import { copy } from '../content/copy';
import { Shell, PageIntro, CallToAction } from '../components/Shell';
import { categories } from '../content/projects';
export default function Page({ locale = 'zh', basePath }: SiteTemplatePageProps) { const c = copy[locale]; return <Shell locale={locale} basePath={basePath} slug="about"><PageIntro eyebrow={c.aboutKicker} title={c.about}/><section className="fx-about"><div className="fx-about-collage">{categories.slice(0, 3).map(cat => <img key={cat.id} src={cat.fragments[0]} alt={cat.name[locale]} width="300" height="320"/>)}</div><div className="fx-about-copy">{c.aboutText.map(p => <p key={p}>{p}</p>)}</div></section><CallToAction locale={locale} basePath={basePath}/></Shell>; }
