import BlurFade from '@/components/magicui/blur-fade';
import Link from 'next/link';

const BLUR_FADE_DELAY = 0.04;

export default function NotFound() {
  return (
    <main id="not-found">
      <div className="w-full space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                Error
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Sorry, the page is not found
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                Please doublecheck the link or return to{' '}
                <Link
                  href="/"
                  className="text-gray-900 underline dark:text-white"
                >
                  Main Page
                </Link>
                .
              </p>
            </div>
          </div>
        </BlurFade>
      </div>
    </main>
  );
}
