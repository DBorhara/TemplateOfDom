import z from "zod";

export const createPostSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
  published: z.boolean(),
  // authors: add in author validation here later
  authorId: z.string(),
});

export const getSinglePostSchema = z.object({
  postId: z.string().cuid(),
});

export const postSchema = z.object({
  postId: z.string().cuid(),
  title: z.string(),
  content: z.string().optional(),
  published: z.boolean(),
  // authors: z.array(),
  // authorId: z.string(),
});

export const getAllPostsSchema = z.array(postSchema);
