import * as z from "zod";

export const wishlistSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name must be less than 100 characters long"),
  description: z
    .string()
    .max(500, "Description must be less than 500 characters long"),
  targetAmount: z.number().positive(),
  wishlistLink: z.string().url("Invalid URL format"),
});
