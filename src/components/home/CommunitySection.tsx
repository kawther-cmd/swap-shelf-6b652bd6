import { Link } from "@tanstack/react-router";
import { ArrowLeftRight, BookMarked, ShoppingBag } from "lucide-react";

import communityImage from "@/assets/community-students.jpg";

const WAYS_TO_SHARE = [
  {
    Icon: ArrowLeftRight,
    title: "Swap",
    text: "Trade a book you've finished for one you need — no money involved.",
  },
  {
    Icon: ShoppingBag,
    title: "Buy",
    text: "Get used textbooks and reads from classmates at student-friendly prices.",
  },
  {
    Icon: BookMarked,
    title: "Borrow",
    text: "Need it for one semester? Borrow it, then pass it back when you're done.",
  },
];

export function CommunitySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid items-center gap-10 overflow-hidden rounded-[2.5rem] bg-secondary p-6 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-14">
        <div className="overflow-hidden rounded-3xl shadow-lift">
          <img
            src={communityImage}
            alt="Illustration of students exchanging books on a campus lawn"
            width={1280}
            height={960}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-105"
          />
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">Our community</p>
          <h2 className="mt-2 text-4xl font-semibold leading-tight text-foreground sm:text-5xl">
            A Smarter Way to Share Books
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every book on Swap Shelf comes from a fellow student. Keep good books in circulation,
            save money on course materials, and meet readers across campus.
          </p>

          <ul className="mt-8 space-y-4">
            {WAYS_TO_SHARE.map(({ Icon, title, text }) => (
              <li key={title} className="flex gap-4 rounded-2xl bg-card p-4 shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-primary">
                  <Icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-sans text-base font-bold text-foreground">{title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <Link
            to="/register"
            className="mt-8 inline-flex rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-soft"
          >
            Join Swap Shelf
          </Link>
        </div>
      </div>
    </section>
  );
}
