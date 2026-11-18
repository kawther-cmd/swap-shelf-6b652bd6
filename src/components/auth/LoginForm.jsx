import { useState } from "react";
import { toast } from "sonner";

import { validateLogin } from "@/lib/login-validation";

import { FormField } from "./FormField";

const EMPTY = { email: "", password: "", remember: false };

/**
 * Frontend-only login form with client-side validation. Replace the success
 * branch with a real sign-in call when authentication is added.
 */
export function LoginForm() {
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validateLogin(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    toast.success("Login form submitted", {
      description: "This is a demo — accounts aren't connected yet.",
    });
    setValues(EMPTY);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <FormField
        id="email"
        label="University email"
        type="email"
        autoComplete="email"
        placeholder="you@university.edu"
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
        error={errors.email}
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••"
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
        error={errors.password}
      />
      <div className="flex items-center justify-between text-sm">
        <label className="flex cursor-pointer items-center gap-2 text-muted-foreground">
          <input
            type="checkbox"
            checked={values.remember}
            onChange={(e) => setValues({ ...values, remember: e.target.checked })}
            className="size-4 rounded accent-primary"
          />
          Remember me
        </label>
        <button
          type="button"
          onClick={() => toast("Password reset isn't available in this demo yet.")}
          className="font-semibold text-primary hover:underline"
        >
          Forgot password?
        </button>
      </div>
      <button
        type="submit"
        className="h-12 w-full rounded-full bg-primary text-sm font-semibold text-primary-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-primary-soft"
      >
        Log in
      </button>
    </form>
  );
}
