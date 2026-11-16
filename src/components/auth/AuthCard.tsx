import type { ReactNode } from "react";

interface AuthCardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}

/** Shared frame for the Login and Register pages. */
export function AuthCard({ title, subtitle, children, footer }: AuthCardProps) {
  return (
    <section className="relative px-4 py-14 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-10 size-[30rem] -translate-x-1/2 rounded-full bg-lavender/50 blur-3xl" />
      <div className="relative mx-auto w-full max-w-md rounded-[2rem] border border-border bg-card p-7 shadow-lift sm:p-10">
        <h1 className="text-3xl font-semibold text-card-foreground sm:text-4xl">{title}</h1>
        <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
        <div className="mt-8">{children}</div>
        <div className="mt-6 text-center text-sm text-muted-foreground">{footer}</div>
      </div>
    </section>
  );
}
