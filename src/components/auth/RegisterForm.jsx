import { useState } from "react";
import { toast } from "sonner";

import { validateRegister } from "@/lib/register-validation";

import { FormField } from "./FormField";

const EMPTY = { fullName: "", email: "", university: "", password: "", confirmPassword: "" };

/**
 * Frontend-only registration form with client-side validation.
 * Replace the success branch with a real sign-up call when authentication is added.
 */
export function RegisterForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  const update = (field) => (e) => setValues({ ...values, [field]: e.target.value });

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateRegister(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    toast.success(`Welcome to Swap Shelf, ${values.fullName.split(" ")[0]}!`, {
      description: "This is a demo — no account was created yet.",
    });
    setValues(EMPTY);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <FormField
        id="fullName"
        label="Full name"
        autoComplete="name"
        placeholder="Sara Ahmed"
        value={values.fullName}
        onChange={update("fullName")}
        error={errors.fullName}
      />
      <FormField
        id="email"
        label="University email"
        type="email"
        autoComplete="email"
        placeholder="you@university.edu"
        value={values.email}
        onChange={update("email")}
        error={errors.email}
      />
      <FormField
        id="university"
        label="University"
        autoComplete="organization"
        placeholder="Your university"
        value={values.university}
        onChange={update("university")}
        error={errors.university}
      />
      <div className="grid gap-4 sm:grid-cols-2">
        <FormField
          id="password"
          label="Password"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          value={values.password}
          onChange={update("password")}
          error={errors.password}
        />
        <FormField
          id="confirmPassword"
          label="Confirm password"
          type="password"
          autoComplete="new-password"
          placeholder="••••••••"
          value={values.confirmPassword}
          onChange={update("confirmPassword")}
          error={errors.confirmPassword}
        />
      </div>
      <button
        type="submit"
        className="mt-2 h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-soft"
      >
        Create account
      </button>
    </form>
  );
}
