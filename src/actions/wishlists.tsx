import { db } from "@/server/db";

import {
  accounts,
  sessions,
  users,
  verificationTokens,
} from "@/server/db/schema/auth";
import { wishlists } from "@/server/db/schema/main";
import { desc, eq } from "drizzle-orm";

export async function fetchWishlists() {
  return await db.select().from(wishlists).orderBy(desc(wishlists.createdAt));
}

export async function fetchUserWishlists(userId: string) {
  return await db
    .select()
    .from(wishlists)
    .where(eq(wishlists.userId, userId))
    .orderBy(desc(wishlists.createdAt));
}
