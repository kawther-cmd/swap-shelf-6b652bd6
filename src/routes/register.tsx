import { createFileRoute, Link } from "@tanstack/react-router";

import { AuthCard } from "@/components/auth/AuthCard";
import { RegisterForm } from "@/components/auth/RegisterForm";

export const Route = createFileRoute("/register")({
  head: () => ({
    meta: [
      { title: "Register — Swap Shelf" },
      { name: "description", content: "Join Swap Shelf and start sharing books with students at your university." },
      { property: "og:title", content: "Register — Swap Shelf" },
      { property: "og:description", content: "Join Swap Shelf and start sharing books on campus." },
    ],
  }),
  component: RegisterPage,
});

function RegisterPage() {
  return (
    <AuthCard
      title="Join Swap Shelf"
      subtitle="Create your account and start sharing books on campus."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="font-semibold text-primary hover:underline">
            Log in
          </Link>
        </>
      }
    >
      <RegisterForm />
    </AuthCard>
  );
}
