import type { SiteTemplatePageProps } from '../../../types';
import '../theme.css';
import { copy } from '../content/copy';
import { Shell, PageIntro, CallToAction } from '../components/Shell';
import { ContactForm } from '../components/ContactForm';
export default function Page({ locale = 'zh', basePath }: SiteTemplatePageProps) { const c = copy[locale]; return <Shell locale={locale} basePath={basePath} slug="contact"><PageIntro eyebrow={c.hello} title={c.contact} description={c.contactIntro}/><ContactForm key={locale} locale={locale}/><CallToAction locale={locale} basePath={basePath}/></Shell>; }
