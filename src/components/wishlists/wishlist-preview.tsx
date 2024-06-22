type WishlistPreviewProps = {
  wishlist: {
    id: number;
    userId: string;
    name: string;
    description: string | null;
    targetAmount: number;
    amountRaised: number;
    wishlistLink: string | null;
    updatedAt: Date | null;
    createdAt: Date | null;
  };
};

export default function WishlistPreview({ wishlist }: WishlistPreviewProps) {
  return <div className="h-full w-full">{wishlist.name}</div>;
}
