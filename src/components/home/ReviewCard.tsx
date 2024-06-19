type ReviewCardProps = {
  img: string;
  name: string;
  username: string;
  body: string;
};

export default function ReviewCard({
  img,
  name,
  username,
  body,
}: ReviewCardProps) {
  return (
    <figure className="relative w-64 cursor-pointer overflow-hidden rounded-xl border border-slate-950/[.1] bg-slate-950/[.01] p-4 hover:bg-slate-950/[.05]">
      <div className="flex flex-row items-center gap-2">
        <img
          className="rounded-full"
          width="32"
          height="32"
          alt={name}
          src={img}
        />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
}
