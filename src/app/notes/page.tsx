import BlurFade from '@/components/magicui/blur-fade';
import { getNotesPosts } from '@/data/notes';
import Link from 'next/link';

export const metadata = {
  title: 'Notes',
  description:
    'I study a lot, write notes, and share them with friends. Here are some of my notes from school.',
};

const BLUR_FADE_DELAY = 0.04;

export default async function NotePage() {
  const posts = await getNotesPosts();

  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="mb-8 text-2xl font-medium tracking-tighter">My Notes</h1>
      </BlurFade>
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post, id) => (
          <BlurFade
            delay={BLUR_FADE_DELAY * 2 + id * 0.05}
            key={post.slug}
          >
            <Link
              className="mb-4 flex flex-col space-y-1"
              href={`/notes/${post.slug}`}
            >
              <div className="flex w-full flex-col">
                <p className="tracking-tight">{post.metadata.title}</p>
                <p className="h-6 text-xs text-muted-foreground">
                  {post.metadata.publishedAt}
                </p>
              </div>
            </Link>
          </BlurFade>
        ))}
    </section>
  );
}
