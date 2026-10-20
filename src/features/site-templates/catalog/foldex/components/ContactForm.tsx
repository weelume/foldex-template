'use client';
import { useState, type FormEvent } from 'react';
import { copy } from '../content/copy';
import { categories } from '../content/projects';
import type { TemplateLocale } from '../../../types';
export function ContactForm({ locale }: {
    locale: TemplateLocale;
}) { const c = copy[locale], [done, setDone] = useState(false); function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setDone(true); console.debug('[foldex:form]', { valid: true, sent: false, saved: false }); } return <form className="fx-form fx-glass" onSubmit={submit} onInput={() => setDone(false)}><div className="fx-form-row"><label>{c.first} *<input name="firstName" autoComplete="given-name" required maxLength={80}/></label><label>{c.last} *<input name="lastName" autoComplete="family-name" required maxLength={80}/></label></div><label>{c.category}<select name="category" defaultValue=""><option value="">{c.select}</option>{categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name[locale]}</option>)}</select></label><label>{c.email} *<input name="email" type="email" autoComplete="email" required maxLength={254}/></label><label>{c.message} *<textarea name="message" required minLength={10} maxLength={5000} rows={5}/></label><label className="fx-consent"><input name="consent" type="checkbox" required/>{c.consent}</label><p className="fx-form-note">{c.local}</p><button className="fx-button" type="submit">{c.submit} <span aria-hidden="true">↗</span></button><p className="fx-status" role="status">{done ? c.success : ''}</p></form>; }
