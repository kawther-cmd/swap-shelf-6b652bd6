import { Link } from "@tanstack/react-router";
import {
  ArrowLeftRight,
  BookMarked,
  GraduationCap,
  HandHeart,
  Leaf,
  ShoppingBag,
  Wallet,
} from "lucide-react";

const HOW_IT_WORKS = [
  {
    Icon: ArrowLeftRight,
    title: "Swap",
    text: "List a book you no longer need and trade it for one you do. A fair, cash-free exchange between students.",
  },
  {
    Icon: ShoppingBag,
    title: "Buy",
    text: "Pick up used textbooks, novels and guides from classmates for much less than buying new.",
  },
  {
    Icon: BookMarked,
    title: "Borrow",
    text: "Borrow a book for a course or a semester, then return it so the next student can use it.",
  },
];

const VALUES = [
  {
    Icon: Wallet,
    title: "Affordable learning",
    text: "Course materials shouldn't be a barrier. Sharing keeps costs down for everyone.",
  },
  {
    Icon: Leaf,
    title: "Less waste",
    text: "Each book that changes hands is one less sitting unused on a shelf.",
  },
  {
    Icon: HandHeart,
    title: "Real community",
    text: "Meet students from your own campus who read, study and care like you do.",
  },
];

export function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -right-20 -top-10 size-96 rounded-full bg-lavender/60 blur-3xl" />
        <div className="relative mx-auto max-w-4xl px-4 pb-12 pt-16 text-center sm:px-6 md:pt-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3.5 py-1.5 text-xs font-semibold text-secondary-foreground shadow-soft">
            <GraduationCap className="size-4 text-primary" /> About Swap Shelf
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-tight text-foreground sm:text-6xl">
            Sharing knowledge,{" "}
            <em className="font-medium italic text-primary">one book at a time.</em>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Swap Shelf helps university students share educational resources by exchanging, buying,
            and borrowing books from one another — so good books keep being read, and no student has
            to go without the materials they need.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-semibold text-foreground sm:text-4xl">
          How it works
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {HOW_IT_WORKS.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft transition hover:-translate-y-1 hover:shadow-lift"
            >
              <span className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <Icon className="size-6" />
              </span>
              <h3 className="mt-5 text-2xl font-semibold text-card-foreground">{title}</h3>
              <p className="mt-2 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-[2.5rem] bg-cream p-8 sm:p-12">
          <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">Why we built it</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {VALUES.map(({ Icon, title, text }) => (
              <div key={title}>
                <Icon className="size-6 text-primary" />
                <h3 className="mt-3 font-sans text-lg font-bold text-foreground">{title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 pt-12 text-center sm:px-6">
        <h2 className="text-3xl font-semibold text-foreground sm:text-4xl">
          Ready to share your shelf?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Join your campus community and give your books a second life.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            to="/register"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-soft"
          >
            Create an account
          </Link>
          <Link
            to="/"
            hash="books"
            className="rounded-full border border-input bg-card px-7 py-3.5 text-sm font-semibold text-secondary-foreground transition hover:-translate-y-0.5 hover:bg-secondary"
          >
            Explore Books
          </Link>
        </div>
      </section>
    </>
  );
}
