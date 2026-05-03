import { ReactNode } from "react";
import { GlassCard } from "./GlassCard";

interface RuleSectionProps {
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export function RuleSection({ id, number, title, subtitle, children }: RuleSectionProps) {
  return (
    <GlassCard id={id}>
      <header className="mb-8 border-b border-[var(--glass-border)] pb-6">
        <div className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
          Seção {number}
        </div>
        <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && <p className="mt-2 text-sm text-muted-foreground max-w-2xl">{subtitle}</p>}
      </header>
      <div className="space-y-8 text-[15px] leading-relaxed text-foreground/90">{children}</div>
    </GlassCard>
  );
}

interface SubRuleProps {
  number: string;
  title: string;
  children: ReactNode;
}

export function SubRule({ number, title, children }: SubRuleProps) {
  return (
    <div>
      <h3 className="text-base font-semibold tracking-tight text-foreground">
        <span className="text-muted-foreground mr-2 font-normal tabular-nums">{number}</span>
        {title}
      </h3>
      <div className="mt-3 space-y-3 text-[14.5px] leading-relaxed text-foreground/75">
        {children}
      </div>
    </div>
  );
}

export function RuleList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2 pl-1">
      {items.map((item, i) => (
        <li key={i} className="flex gap-3">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-foreground/40" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}
