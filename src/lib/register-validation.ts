export interface RegisterValues {
  fullName: string;
  email: string;
  university: string;
  password: string;
  confirmPassword: string;
}

export type RegisterErrors = Partial<Record<keyof RegisterValues, string>>;

export const MIN_PASSWORD_LENGTH = 8;

/** Client-side checks for the register form. Returns an empty object when valid. */
export function validateRegister(values: RegisterValues): RegisterErrors {
  const errors: RegisterErrors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your name.";
  if (!/^\S+@\S+\.\S+$/.test(values.email.trim())) errors.email = "Please enter a valid email.";
  if (!values.university.trim()) errors.university = "Please enter your university.";
  if (values.password.length < MIN_PASSWORD_LENGTH)
    errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
  if (values.confirmPassword !== values.password) errors.confirmPassword = "Passwords don't match.";
  return errors;
}
