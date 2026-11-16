import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { FormField } from "./FormField";

export interface LoginValues {
  email: string;
  password: string;
  remember: boolean;
}

/**
 * Frontend-only login form. Replace handleSubmit's body with a real
 * sign-in call when authentication is added.
 */
export function LoginForm() {
  const [values, setValues] = useState<LoginValues>({ email: "", password: "", remember: false });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Login form submitted", {
      description: "This is a demo — accounts aren't connected yet.",
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>
      <FormField
        id="email"
        label="University email"
        type="email"
        autoComplete="email"
        placeholder="you@university.edu"
        required
        value={values.email}
        onChange={(e) => setValues({ ...values, email: e.target.value })}
      />
      <FormField
        id="password"
        label="Password"
        type="password"
        autoComplete="current-password"
        placeholder="••••••••"
        required
        value={values.password}
        onChange={(e) => setValues({ ...values, password: e.target.value })}
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
