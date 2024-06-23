import { getServerAuthSession } from "@/server/auth";
import { z } from "zod";
import { wishlistSchema } from "@/lib/validations/wishlist";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { Toaster } from "@/components/ui/sonner";
import { WishlistForm } from "@/components/wishlists/create-wishlist-form";
import { fetchUserWishlists } from "@/actions/wishlists";
import GaugeCircle from "@/components/ui/gauge-circle";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

export default async function Dashboard() {
  const session = await getServerAuthSession();

  if (!session) {
    return { redirect: { destination: "/login", permanent: false } };
  }

  const userWishlists = await fetchUserWishlists(session.user.id);
  console.log(userWishlists);

  return (
    <main className="mx-auto mt-20 flex h-full min-h-screen max-w-7xl flex-col px-6 py-20 lg:px-8">
      <Toaster />

      <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        Dashboard
      </h1>
      <p className="text-muted-foreground">
        Welcome back, {session?.user.email}
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        {/* User's wishlists */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Your wishlists
          </h2>
          {userWishlists.length > 0 ? (
            <div className="grid gap-4">
              {userWishlists.map((wishlist) => (
                <div
                  key={wishlist.id}
                  className="flex items-center justify-between"
                >
                  <div>
                    <h3 className="text-xl font-semibold">{wishlist.name}</h3>
                    <p className="text-muted-foreground">
                      {wishlist.description}
                    </p>
                  </div>
                  <Button variant="destructive">
                    Delete <Trash size={16} className="ml-1 inline-block" />
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground">
              You haven't created any wishlists yet.
            </p>
          )}
        </div>

        {/* Create a new wishlist */}
        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">
            Create a new wishlist
          </h2>
          <WishlistForm />
        </div>
      </div>
    </main>
  );
}
