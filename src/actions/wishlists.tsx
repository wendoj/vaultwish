import { db } from "@/server/db";

import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "@/server/db/schema/auth";
import { wishlists } from "@/server/db/schema/main";
import { desc } from "drizzle-orm";

export async function fetchWishlists() {
  const wishlistBody = await db
    .select()
    .from(wishlists)
    .orderBy(desc(wishlists.createdAt));
  console.log(wishlistBody);
  return wishlistBody;
}
