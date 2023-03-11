import z from "zod";
import { postSchema } from "./post.schema";
import { MouseEventHandler } from "react";

export const createUserSchema = z.object({
  userName: z.string().optional(),
  email: z.string(),
  password: z.string(),
  image: z.string().optional(),
  posts: z.array(postSchema),
  // accounts: z.array(),
  // sessions: z.array(),
});
export type createUserSchema = z.infer<typeof createUserSchema>;
onClick: MouseEventHandler<HTMLButtonElement>;
export const UserLogin = createUserSchema.pick({
  userName: true,
  password: true,
});

export type UserLogin = z.infer<typeof UserLogin>;

export
