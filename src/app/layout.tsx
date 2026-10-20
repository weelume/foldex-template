import type { ReactNode } from 'react';
import './globals.css';
export const metadata = { title: 'Foldex · 拼贴创意工作室', description: '从生活碎片出发，创造有个性的品牌与数字体验' };
export default function Layout({ children }: {
    children: ReactNode;
}) { return <html lang="zh-CN"><body>{children}</body></html>; }
