import BlurFade from '@/components/magicui/blur-fade';
import ResumeLayout from '@/components/resume/ResumeLayout';
import Link from 'next/link';

const BLUR_FADE_DELAY = 0.04;

export default async function ResumePage() {
  return (
    <main id="resume">
      <div className="w-full space-y-12">
        <BlurFade delay={BLUR_FADE_DELAY * 11}>
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                My Resume
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Reach my resume
              </h2>
              <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                Get acquainted with the resume online or immidiately{' '}
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href="/pdf/MIRZAIANOV_CV_A4EN.pdf"
                  className="text-gray-900 underline dark:text-white"
                >
                  download
                </Link>{' '}
                it.
              </p>
            </div>
          </div>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 15}>
          <ResumeLayout />
        </BlurFade>
      </div>
    </main>
  );
}
