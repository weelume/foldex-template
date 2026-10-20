'use client';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
export function Reveal({ children, className }: {
    children: ReactNode;
    className?: string;
}) { const reduce = useReducedMotion(); return <motion.div className={className} initial={false} whileInView={reduce ? {} : { opacity: [0.65, 1], y: [14, 0] }} viewport={{ once: true, amount: 0.05 }} transition={{ duration: .45 }}>{children}</motion.div>; }
