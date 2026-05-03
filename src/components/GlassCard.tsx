import { ReactNode } from "react";

interface GlassCardProps {
  id?: string;
  children: ReactNode;
  className?: string;
}

export function GlassCard({ id, children, className = "" }: GlassCardProps) {
  return (
    <section
      id={id}
      className={`relative rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-2xl shadow-[0_1px_0_0_var(--glass-highlight)_inset,0_30px_60px_-30px_rgba(0,0,0,0.6)] scroll-mt-24 ${className}`}
    >
      <div className="p-6 sm:p-10">{children}</div>
    </section>
  );
}
