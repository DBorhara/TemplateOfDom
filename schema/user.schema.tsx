// Import necessary functions and types from "zod" library
import { object, string, TypeOf } from "zod";

// Define the createUserSchema, which is a validation schema for creating a user
export const createUserSchema = object({
  name: string({ required_error: "Name is required" }),
  email: string({ required_error: "Email is required" }).email("Invalid email"),
  photo: string({ required_error: "Photo is required" }),
  password: string({ required_error: "Password is required" })
    .min(8, "Password must be more than 8 characters")
    .max(32, "Password must be less than 32 characters"),
  passwordConfirm: string({ required_error: "Please confirm your password" }),
})
  // Add an additional validation to ensure that the "password" and "passwordConfirm" fields match
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Passwords do not match",
  });

// Define the loginUserSchema, which is a validation schema for logging in a user
export const loginUserSchema = object({
  email: string({ required_error: "Email is required" }).email(
    "Invalid email or password"
  ),
  password: string({ required_error: "Password is required" }).min(
    8,
    "Invalid email or password"
  ),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;

export type LoginUserInput = TypeOf<typeof loginUserSchema>;
