import Link from 'next/link';
import type { SiteTemplatePageProps } from '../../../types';
import { categories, collageProps } from '../content/projects';
import { href } from '../routing';
import { Reveal } from './Reveal';
export function Folders({ locale = 'zh', basePath }: SiteTemplatePageProps) { return <div className="fx-folders">{categories.map((cat, i) => <Reveal key={cat.id}><Link className={'fx-folder fx-folder-' + cat.id} href={href(basePath, 'portfolio/' + cat.id)}><div className="fx-stack">{cat.fragments.map((image, n) => <img key={image} className={'fx-fragment fx-fragment-' + n} src={image} alt={cat.name[locale]} width="260" height="220"/>)}<span className="fx-count">{cat.projects.length}</span>{[0, 3, 5].includes(i) && <img className={'fx-prop fx-prop-' + i} src={collageProps[i === 0 ? 0 : i === 3 ? 1 : 2]} alt="" width="60" height="100"/>}</div><h2>{cat.name[locale]}</h2></Link></Reveal>)}</div>; }
