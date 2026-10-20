import type { SiteTemplatePageProps } from '../../../types';
import '../theme.css';
import { copy } from '../content/copy';
import { Shell, PageIntro, CallToAction } from '../components/Shell';
import Link from 'next/link';
import { plans } from '../content/copy';
import { href } from '../routing';
import { Reveal } from '../components/Reveal';
export default function Page({ locale = 'zh', basePath }: SiteTemplatePageProps) { const c = copy[locale]; return <Shell locale={locale} basePath={basePath} slug="pricing"><PageIntro eyebrow={c.available} title={c.pricing} description={c.pricingIntro}/><div className="fx-pricing">{plans.map((plan, i) => <Reveal key={plan.name.en}><section className={'fx-plan fx-glass fx-plan-' + i}><span className="fx-plan-number">0{i + 1}</span><h2>{plan.name[locale]}</h2><strong>{typeof plan.price === 'string' ? plan.price : plan.price[locale]}</strong><p>{plan.description[locale]}</p><ul>{plan.features[locale].map(f => <li key={f}>{f}</li>)}</ul><Link className="fx-button" href={href(basePath, 'contact') + '?plan=' + plan.name.en.toLowerCase()}>{c.choose} ↗</Link></section></Reveal>)}</div><CallToAction locale={locale} basePath={basePath}/></Shell>; }
