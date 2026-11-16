import { createFileRoute, Link } from "@tanstack/react-router";

import { AuthCard } from "@/components/auth/AuthCard";
import { LoginForm } from "@/components/auth/LoginForm";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Log in — Swap Shelf" },
      { name: "description", content: "Log in to Swap Shelf to swap, buy, and borrow books with your university community." },
      { property: "og:title", content: "Log in — Swap Shelf" },
      { property: "og:description", content: "Log in to swap, buy, and borrow books on campus." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  return (
    <AuthCard
      title="Welcome back"
      subtitle="Log in to see your shelf and favorite books."
      footer={
        <>
          New to Swap Shelf?{" "}
          <Link to="/register" className="font-semibold text-primary hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}
