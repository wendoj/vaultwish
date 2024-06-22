import { getServerAuthSession } from "@/server/auth";
import { z } from "zod";

export default async function Dashboard() {
  const session = await getServerAuthSession();

  console.log(session);

  return (
    <main className="container mt-20 flex h-full flex-col py-20">
      <h1 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
        Dashboard
      </h1>
      <p className="text-muted-foreground">
        Welcome back, {session?.user.email}
      </p>

      {/* Create a new wishlist */}
      <section className="mt-10">
        <h2 className="font-heading text-2xl font-semibold tracking-tight">
          Create a new wishlist
        </h2>
        <form className="mt-6 flex flex-col space-y-4">
          <input type="text" placeholder="Wishlist name" className="input" />
          <textarea placeholder="Wishlist description" className="input" />
          <button className="button">Create Wishlist</button>
        </form>
      </section>
    </main>
  );
}
