import { describe, expect, it } from "vitest";

import { validateRegister } from "@/lib/register-validation";

const valid = {
  fullName: "Sara Ahmed",
  email: "sara@uni.edu",
  university: "City University",
  password: "longenough",
  confirmPassword: "longenough",
};

describe("validateRegister", () => {
  it("accepts a complete form", () => {
    expect(validateRegister(valid)).toEqual({});
  });

  it("rejects passwords that don't match", () => {
    expect(
      validateRegister({ ...valid, confirmPassword: "different1" }).confirmPassword,
    ).toBeDefined();
  });

  it("rejects passwords shorter than 8 characters", () => {
    expect(
      validateRegister({ ...valid, password: "short", confirmPassword: "short" }).password,
    ).toBeDefined();
  });
});
