import { sql } from "drizzle-orm";
import {
  index,
  pgTableCreator,
  serial,
  timestamp,
  varchar,
  integer,
  real,
} from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `vaultwish_${name}`);

export const wishlists = createTable(
  "wishlist",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 255 }).notNull(),
    name: varchar("name", { length: 255 }).notNull(),
    description: varchar("description", { length: 255 }),
    targetAmount: real("targetAmount").notNull(),
    amountRaised: real("amountRaised").notNull(),
    wishlistLink: varchar("wishlistLink", { length: 255 }),
    createdAt: timestamp("createdAt").default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    userIdIdx: index("wishlist_userId_idx").on(table.userId),
  }),
);

export const donations = createTable(
  "donation",
  {
    id: serial("id").primaryKey(),
    userId: varchar("userId", { length: 255 }).notNull(),
    wishlistId: integer("wishlistId")
      .notNull()
      .references(() => wishlists.id),
    amount: real("amount").notNull(),
    createdAt: timestamp("createdAt").default(sql`CURRENT_TIMESTAMP`),
    updatedAt: timestamp("updatedAt").default(sql`CURRENT_TIMESTAMP`),
  },
  (table) => ({
    userIdIdx: index("donation_userId_idx").on(table.userId),
    wishlistIdIdx: index("donation_wishlistId_idx").on(table.wishlistId),
  }),
);
