export const MIN_PASSWORD_LENGTH = 8;

/** True when the text looks like an email address (something@domain.tld). */
export function isValidEmail(email) {
  return /^\S+@\S+\.\S+$/.test(email.trim());
}

/** Client-side checks for the register form. Returns an empty object when valid. */
export function validateRegister(values) {
  const errors = {};
  if (!values.fullName.trim()) errors.fullName = "Please enter your name.";
  if (!isValidEmail(values.email)) errors.email = "Please enter a valid email.";
  if (!values.university.trim()) errors.university = "Please enter your university.";
  if (values.password.length < MIN_PASSWORD_LENGTH)
    errors.password = `Use at least ${MIN_PASSWORD_LENGTH} characters.`;
  if (values.confirmPassword !== values.password) errors.confirmPassword = "Passwords don't match.";
  return errors;
}
