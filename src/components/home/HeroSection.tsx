import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeftRight, BookMarked, ShoppingBag } from "lucide-react";

import heroImage from "@/assets/hero-stacked-books.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-10 size-96 rounded-full bg-lavender/60 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 size-[28rem] rounded-full bg-cream-deep/60 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:pt-16 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8 lg:pb-24">
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground shadow-soft">
            <span className="size-1.5 rounded-full bg-primary" />
            Your campus book exchange
          </span>
          <h1 className="mt-6 text-5xl font-semibold leading-[1.02] text-foreground sm:text-6xl lg:text-7xl">
            Give Books a <em className="font-medium italic text-primary">Second Life.</em>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Swap, buy, and borrow books easily with your university community.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/"
              hash="books"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lift transition hover:-translate-y-0.5 hover:bg-primary-soft"
            >
              Explore Books
              <ArrowRight className="size-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center rounded-full border border-input bg-card px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition hover:-translate-y-0.5 hover:border-ring hover:bg-secondary"
            >
              Learn More
            </Link>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
            <li className="flex items-center gap-2"><ArrowLeftRight className="size-4 text-primary" /> Swap</li>
            <li className="flex items-center gap-2"><ShoppingBag className="size-4 text-primary" /> Buy</li>
            <li className="flex items-center gap-2"><BookMarked className="size-4 text-primary" /> Borrow</li>
          </ul>
        </div>

        <div className="relative mx-auto w-full max-w-lg animate-in fade-in zoom-in-95 duration-1000 lg:max-w-none">
          <div className="overflow-hidden rounded-[2.5rem] border border-border bg-cream shadow-lift">
            <img
              src={heroImage}
              alt="Illustration of a stack of colorful books with a plant and reading glasses"
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-lift sm:-left-6">
            <p className="text-xs font-medium text-muted-foreground">Just listed</p>
            <p className="font-display text-sm font-semibold text-foreground">Calculus · Swap or Buy</p>
          </div>
        </div>
      </div>
    </section>
  );
}
