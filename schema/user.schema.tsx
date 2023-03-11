import z from "zod";
import { postSchema } from "./post.schema";

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

export const singleUserSchema = createUserSchema.omit({ password: true });
export type singleUserSchema = z.infer<typeof singleUserSchema>;

export const getAllUsersSchema = z.array(singleUserSchema);
export type getAllUsersSchema = z.infer<typeof getAllUsersSchema>;
export const UserLogin = createUserSchema.pick({
  userName: true,
  password: true,
});

export type UserLogin = z.infer<typeof UserLogin>;
