import { describe, expect, it } from "vitest";

import { validateLogin } from "@/lib/login-validation";

describe("validateLogin", () => {
  it("accepts an email and password", () => {
    expect(validateLogin({ email: "sara@uni.edu", password: "anything" })).toEqual({});
  });

  it("rejects an invalid email", () => {
    expect(validateLogin({ email: "sara", password: "anything" }).email).toBeDefined();
  });

  it("rejects an empty password", () => {
    expect(validateLogin({ email: "sara@uni.edu", password: "" }).password).toBeDefined();
  });
});
