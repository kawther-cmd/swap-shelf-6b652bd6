import { isValidEmail } from "./register-validation";

/** Client-side checks for the login form. Returns an empty object when valid. */
export function validateLogin(values) {
  const errors = {};
  if (!isValidEmail(values.email)) errors.email = "Please enter a valid email.";
  if (!values.password) errors.password = "Please enter your password.";
  return errors;
}
