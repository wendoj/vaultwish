import { fetchWishlists } from "@/actions/wishlists";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MasonryLayout from "@/components/wishlists/masonry-layout";
import WishlistPreview from "@/components/wishlists/wishlist-preview";

export default async function Wishlists() {
  const wishlists = await fetchWishlists();

  return (
    <main>
      <section className="mx-auto mt-48 flex flex w-full max-w-7xl flex-col space-y-20 px-6 py-20 text-center lg:px-8">
        <header className="flex flex-col space-y-6 text-center">
          <h1 className="font-heading text-4xl font-semibold md:text-5xl">
            Wishlists
          </h1>
          <span className="flex w-full flex-row items-center justify-center space-x-2">
            <Input placeholder="Search for a wishlist.." />
            <Button>Search</Button>
          </span>
        </header>

        <MasonryLayout>
          {wishlists.map((wishlist) => (
            <WishlistPreview key={wishlist.id} wishlist={wishlist} />
          ))}
        </MasonryLayout>
      </section>
    </main>
  );
}
