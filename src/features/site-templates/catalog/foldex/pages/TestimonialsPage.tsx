import type { SiteTemplatePageProps } from '../../../types';
import '../theme.css';
import { copy } from '../content/copy';
import { Shell, PageIntro } from '../components/Shell';
import { quotes } from '../content/projects';
import { Reveal } from '../components/Reveal';
export default function Page({ locale = 'zh', basePath }: SiteTemplatePageProps) { const c = copy[locale]; return <Shell locale={locale} basePath={basePath} slug="testimonials"><PageIntro eyebrow={c.kind} title={c.testimonials} description={c.testimonialsIntro}/><div className="fx-quotes">{quotes.map(q => <Reveal key={q.name}><figure className="fx-quote fx-glass"><span className="fx-quote-mark" aria-hidden="true">“</span><blockquote>{q.quote[locale]}</blockquote><figcaption><img src={q.image} alt="" width="46" height="46"/><div><h2>{q.name}</h2><p>{q.role[locale]}</p></div></figcaption></figure></Reveal>)}</div></Shell>; }
