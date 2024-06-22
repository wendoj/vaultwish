import * as z from "zod";

export const wishlistSchema = z.object({
  name: z.string(),
  description: z.string().nullable(),
  targetAmount: z.number(),
  wishlistLink: z.string().nullable(),
});
