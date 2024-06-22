"use client";

import * as React from "react";
import type * as z from "zod";

import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import LoadingSpinner from "@/components/ui/loading-spinner";
import { wishlistSchema } from "@/lib/validations/wishlist";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useToast } from "@/components/ui/use-toast";
import { useForm } from "react-hook-form";
import { buttonVariants } from "@/components/ui/button";

interface WishlistFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof wishlistSchema>;

export function WishlistForm({ className, ...props }: WishlistFormProps) {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(wishlistSchema),
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  async function onSubmit(data: FormData) {
    setIsLoading(true);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <div className="grid gap-1">
          <Label htmlFor="name">Wishlist name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Wishlist name"
            {...register("name")}
          />
          {errors.name && (
            <span className="text-sm text-red-500">{errors.name.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <Label htmlFor="description">Wishlist description</Label>
          <Input
            id="description"
            type="text"
            placeholder="Wishlist description"
            {...register("description")}
          />
          {errors.description && (
            <span className="text-sm text-red-500">
              {errors.description.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          className={cn(
            buttonVariants(),
            "w-full",
            isLoading && "cursor-not-allowed",
          )}
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner /> : "Create Wishlist"}
        </button>
      </form>
    </div>
  );
}
