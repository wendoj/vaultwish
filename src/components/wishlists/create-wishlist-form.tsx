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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";

interface WishlistFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof wishlistSchema>;

export function WishlistForm({ className, ...props }: WishlistFormProps) {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(wishlistSchema),
    defaultValues: {
      name: "",
      description: "",
      wishlistLink: "",
      targetAmount: 0,
    },
  });
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  function onSubmit(values: z.infer<typeof wishlistSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...props}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-4"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="name">Wishlist name</FormLabel>
              <FormControl>
                <Input
                  id="name"
                  type="text"
                  placeholder="Wishlist name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="description">Wishlist description</FormLabel>
              <FormControl>
                <Input
                  id="description"
                  type="text"
                  placeholder="Enter a description for your wishlist"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        ></FormField>
        <FormField
          control={form.control}
          name="wishlistLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Wishlist link</FormLabel>
              <FormControl>
                <Input
                  type="url"
                  placeholder="Amazon wishlist link"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        ></FormField>

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
    </Form>
  );
}
