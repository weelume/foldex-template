'use client';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { copy } from '../content/copy';
import { Reveal } from './Reveal';
import type { TemplateLocale } from '../../../types';
type Project = {
    title: {
        zh: string;
        en: string;
    };
    image: string;
};
export function Gallery({ projects, locale }: {
    projects: readonly Project[];
    locale: TemplateLocale;
}) {
    const [selected, setSelected] = useState<number | null>(null);
    const close = useRef<HTMLButtonElement>(null), returnTo = useRef<HTMLButtonElement | null>(null);
    const c = copy[locale];
    useEffect(() => { if (selected === null)
        return; const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; close.current?.focus(); const key = (e: KeyboardEvent) => { if (e.key === 'Escape')
        setSelected(null); if (e.key === 'ArrowRight')
        setSelected(n => n === null ? null : (n + 1) % projects.length); if (e.key === 'ArrowLeft')
        setSelected(n => n === null ? null : (n + projects.length - 1) % projects.length); if (e.key === 'Tab') {
        const buttons = [...document.querySelectorAll<HTMLButtonElement>('.fx-lightbox button')];
        if (e.shiftKey && document.activeElement === buttons[0]) {
            e.preventDefault();
            buttons.at(-1)?.focus();
        }
        else if (!e.shiftKey && document.activeElement === buttons.at(-1)) {
            e.preventDefault();
            buttons[0]?.focus();
        }
    } }; document.addEventListener('keydown', key); return () => { document.body.style.overflow = overflow; document.removeEventListener('keydown', key); returnTo.current?.focus(); }; }, [selected, projects.length]);
    return <><div className="fx-gallery">{projects.map((project, n) => <Reveal key={project.image}><button className="fx-project" onClick={e => { returnTo.current = e.currentTarget; setSelected(n); console.debug('[foldex:gallery]', { index: n, count: projects.length }); }} aria-label={c.view + ' — ' + project.title[locale]}><div className="fx-project-image"><img src={project.image} alt={project.title[locale]} width="650" height="730" loading={n > 3 ? 'lazy' : 'eager'}/><span aria-hidden="true">↗</span></div><h2>{project.title[locale]}</h2><span className="fx-project-index">{String(n + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span></button></Reveal>)}</div>{selected !== null && projects[selected] && createPortal(<div data-template="foldex" className="fx-lightbox" role="dialog" aria-modal="true" aria-label={projects[selected].title[locale]} onClick={e => { if (e.target === e.currentTarget)
        setSelected(null); }}><button ref={close} className="fx-lightbox-close" aria-label={c.close} onClick={() => setSelected(null)}>×</button><img src={projects[selected].image} alt={projects[selected].title[locale]}/><div className="fx-lightbox-controls"><button aria-label={c.previous} onClick={() => setSelected((selected + projects.length - 1) % projects.length)}>←</button><p>{projects[selected].title[locale]} <span>{selected + 1} / {projects.length}</span></p><button aria-label={c.next} onClick={() => setSelected((selected + 1) % projects.length)}>→</button></div></div>, document.body)}</>;
}
