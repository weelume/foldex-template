'use client';
import Link from 'next/link';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { brand } from '../config/brand';
import { copy } from '../content/copy';
import { categories } from '../content/projects';
import { useFoldexHost } from '../host';
import { href, alternatePath } from '../routing';
import type { SiteTemplatePageProps } from '../../../types';
export function Shell({ children, locale = 'zh', basePath, slug = '' }: SiteTemplatePageProps & {
    children: ReactNode;
    slug?: string;
}) {
    const c = copy[locale], host = useFoldexHost(), name = host.brandName?.[locale] ?? brand.name[locale], logo = host.logo ?? brand.logo;
    const [open, setOpen] = useState(false);
    const toggle = useRef<HTMLButtonElement>(null), panel = useRef<HTMLDivElement>(null);
    const pathname = usePathname();
    const router = useRouter();
    const nav = ['portfolio', 'pricing', 'testimonials', 'about'];
    useEffect(() => { console.debug('[foldex:route]', { pathname, locale }); }, [pathname, locale]);
    useEffect(() => { if (!open)
        return; const first = panel.current?.querySelector<HTMLAnchorElement>('a'); first?.focus(); const key = (e: KeyboardEvent) => { if (e.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
    } if (e.key === 'Tab') {
        const nodes = [...(panel.current?.querySelectorAll<HTMLAnchorElement>('a') ?? [])];
        const end = nodes.at(-1);
        if (!e.shiftKey && document.activeElement === end) {
            e.preventDefault();
            first?.focus();
        }
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            end?.focus();
        }
    } }; document.addEventListener('keydown', key); return () => document.removeEventListener('keydown', key); }, [open]);
    return <div className="foldex-site" lang={locale === 'zh' ? 'zh-CN' : 'en'}><a className="fx-skip" href="#fx-main">{locale === 'zh' ? '跳到内容' : 'Skip to content'}</a><header className="fx-header"><Link className="fx-brand" href={href(basePath)}><img src={logo} alt="" width="24" height="24"/><span>{name}</span></Link><nav className="fx-desktop-nav" aria-label={locale === 'zh' ? '主导航' : 'Primary navigation'}>{nav.map((p, i) => <Link key={p} aria-current={slug === p ? 'page' : undefined} href={href(basePath, p)}>{c.nav[i]}</Link>)}</nav><div className="fx-header-actions"><Link className="fx-language" href={alternatePath(basePath, slug, locale)} onClick={e => { e.preventDefault(); const target = alternatePath(basePath, slug, locale) + window.location.search + window.location.hash; console.debug('[foldex:locale]', { locale, target }); router.push(target); }} aria-label={c.language}>{locale === 'zh' ? 'EN' : '中文'}</Link><Link className="fx-contact-link" href={href(basePath, 'contact')}>{c.contact}</Link><button ref={toggle} className="fx-menu-toggle" aria-label={open ? c.closeMenu : c.menu} aria-expanded={open} aria-controls="fx-mobile-menu" onClick={() => setOpen(!open)}>{open ? '×' : '☰'}</button></div></header>{open && <div ref={panel} id="fx-mobile-menu" className="fx-mobile-menu">{nav.map((p, i) => <Link key={p} href={href(basePath, p)} onClick={() => setOpen(false)}>{c.nav[i]}</Link>)}<Link href={href(basePath, 'contact')} onClick={() => setOpen(false)}>{c.contact}</Link></div>}
    <aside className="fx-sidebar"><p>{c.bio}</p><div className="fx-tags">{categories.map(cat => <Link key={cat.id} href={href(basePath, 'portfolio/' + cat.id)} aria-current={slug === 'portfolio/' + cat.id ? 'page' : undefined}>{cat.name[locale]}</Link>)}</div><div className="fx-sidebar-bottom"><span>© {brand.year} {name}</span><Link href={href(basePath)}>{c.index}</Link></div></aside><main id="fx-main" className="fx-main">{children}<footer className="fx-footer"><nav aria-label={locale === 'zh' ? '页脚导航' : 'Footer navigation'}>{[...nav, 'contact'].map((p, i) => <Link key={p} href={href(basePath, p)}>{i === 4 ? c.contact : c.nav[i]}</Link>)}</nav><p>{c.tagline}</p>{host.filing}{host.marketplaceHref && <Link href={host.marketplaceHref}>{host.marketplaceLabel?.[locale]}</Link>}</footer></main>{host.marketplaceHref && <Link className="fx-marketplace" href={host.marketplaceHref} aria-label={host.marketplaceAriaLabel?.[locale]}><img src={host.lightLogo ?? logo} alt="" width="24" height="24"/><span>{name}</span></Link>}</div>;
}
export function PageIntro({ eyebrow, title, description }: {
    eyebrow: string;
    title: string;
    description?: string;
}) { return <div className="fx-intro"><span className="fx-eyebrow">{eyebrow}</span><h1>{title}</h1>{description && <p>{description}</p>}</div>; }
export function CallToAction({ locale = 'zh', basePath }: SiteTemplatePageProps) { const c = copy[locale]; return <section className="fx-cta fx-glass"><h2>{c.cta}</h2><Link className="fx-button" href={href(basePath, 'contact')}>{c.talk} <span aria-hidden="true">↗</span></Link></section>; }
