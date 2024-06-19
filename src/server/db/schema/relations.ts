import { relations } from "drizzle-orm";
import { users, accounts, sessions } from "./auth";
import { wishlists, donations } from "./main";

export const usersRelations = relations(users, ({ many }) => ({
  accounts: many(accounts),
}));

export const accountsRelations = relations(accounts, ({ one }) => ({
  user: one(users, { fields: [accounts.userId], references: [users.id] }),
}));

export const sessionsRelations = relations(sessions, ({ one }) => ({
  user: one(users, { fields: [sessions.userId], references: [users.id] }),
}));

export const wishlistsRelations = relations(wishlists, ({ one, many }) => ({
  user: one(users, { fields: [wishlists.userId], references: [users.id] }),
  donations: many(donations),
}));

export const donationsRelations = relations(donations, ({ one, many }) => ({
  user: one(users, { fields: [donations.userId], references: [users.id] }),
  wishlist: one(wishlists, {
    fields: [donations.wishlistId],
    references: [wishlists.id],
  }),
}));
