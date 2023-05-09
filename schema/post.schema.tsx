// Import necessary functions and types from "zod" library
import { boolean, number, object, string, TypeOf } from "zod";

// Define the createPostSchema, which is a validation schema for creating a post
export const createPostSchema = object({
  title: string({ required_error: "Title is required" }),
  content: string({ required_error: "Content is required" }),
  category: string({ required_error: "Category is required" }),
  image: string({ required_error: "Image is required" }),
  published: boolean({ required_error: "Published is required" }),
});

// Define the params schema to validate the "postId" parameter
export const params = object({
  postId: string(),
});

// Define the updatePostSchema, which is a validation schema for updating a post
export const updatePostSchema = object({
  // Include the "params" schema for postId validation
  params,
  // Define the "body" schema as a partial schema, allowing for partial updates
  body: object({
    title: string(),
    content: string(),
    category: string(),
    image: string(),
    published: boolean(),
  }).partial(),
});

// Define the filterQuery schema for pagination
export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10),
});

export type CreatePostInput = TypeOf<typeof createPostSchema>;

export type ParamsInput = TypeOf<typeof params>;

export type UpdatePostInput = TypeOf<typeof updatePostSchema>["body"];

export type FilterQueryInput = TypeOf<typeof filterQuery>;
