import type { Book } from "@/types/book";

/**
 * Sample data until a real data source exists.
 * To swap in an API later, keep the Book shape and replace this export.
 */
export const SAMPLE_BOOKS: Book[] = [
  {
    id: "calculus-early-transcendentals",
    title: "Calculus: Early Transcendentals",
    author: "James Stewart",
    category: "textbooks",
    availability: ["buy", "swap"],
    price: 25,
    coverTone: 1,
  },
  {
    id: "the-midnight-library",
    title: "The Midnight Library",
    author: "Matt Haig",
    category: "novels",
    availability: ["borrow", "swap"],
    coverTone: 2,
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    category: "self-help",
    availability: ["buy"],
    price: 12,
    coverTone: 3,
  },
  {
    id: "a-brief-history-of-time",
    title: "A Brief History of Time",
    author: "Stephen Hawking",
    category: "science",
    availability: ["borrow"],
    coverTone: 6,
  },
  {
    id: "principles-of-economics",
    title: "Principles of Economics",
    author: "N. Gregory Mankiw",
    category: "textbooks",
    availability: ["swap"],
    coverTone: 4,
  },
  {
    id: "pride-and-prejudice",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    category: "novels",
    availability: ["buy", "borrow"],
    price: 6,
    coverTone: 5,
  },
  {
    id: "the-gene",
    title: "The Gene: An Intimate History",
    author: "Siddhartha Mukherjee",
    category: "science",
    availability: ["swap", "buy"],
    price: 14,
    coverTone: 2,
  },
  {
    id: "the-design-of-everyday-things",
    title: "The Design of Everyday Things",
    author: "Don Norman",
    category: "others",
    availability: ["borrow", "swap"],
    coverTone: 3,
  },
];
