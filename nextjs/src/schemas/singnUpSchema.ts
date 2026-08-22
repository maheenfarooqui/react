import { z } from "zod";

export const usernameSchema = z
  .string()
  .min(2, "Username should be at least 2 characters long")
  .max(20, "Username should be at most 20 characters long")
  .regex(/^[a-zA-Z0-9_]*$/, "Username must not contain special characters");

export const singnUpSchema = z.object({
  username: usernameSchema,
  email: z.email({ error: "Invalid email address" }),
  password: z.string().min(8, "Password should be at least 8 characters long"),
});
