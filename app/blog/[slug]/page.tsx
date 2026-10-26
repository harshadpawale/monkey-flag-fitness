import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { buttonVariants } from "@/components/ui/button";
import { getPost, ownerPosts, SITE_LINKS } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function generateStaticParams() {
  return ownerPosts.map((post) => ({ slug: post.slug }));
}

type BlogParams = { params: Promise<{ slug: string }> };

export async function generateMetadata({
  params,
}: BlogParams): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return { title: "Article" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogParams) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p className="font-heading text-[11px] tracking-[0.24em] text-primary">
        {post.category} · {post.readingTime} read
      </p>
      <h1 className="mt-4 text-4xl leading-[1.05] sm:text-5xl">{post.title}</h1>
      <div className="mt-8 flex items-center gap-3 border-y border-zinc-800 py-4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={post.authorAvatar}
          alt={post.author}
          className="size-12 object-cover grayscale"
        />
        <div>
          <p className="text-sm">{post.author}</p>
          <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
            {post.authorRole} · {post.publishedAt}
          </p>
        </div>
      </div>
      <div className="mt-10 space-y-6 text-base leading-8 text-zinc-300">
        {post.content.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <a
          href={SITE_LINKS.introBookingUrl}
          className={cn(
            buttonVariants({ variant: "default" }),
            "h-11 rounded-none px-5 font-heading uppercase tracking-[0.14em]"
          )}
        >
          Book an Intro
        </a>
        <Link
          href="/#chalk-bucket"
          className={cn(
            buttonVariants({ variant: "outline" }),
            "h-11 rounded-none border-zinc-700 px-5 font-heading uppercase tracking-[0.14em]"
          )}
        >
          Back to the chalk bucket
        </Link>
      </div>
    </article>
  );
}
