import BlurFade from '@/components/magicui/blur-fade';
import Link from 'next/link';
import Info from './info';
import Contacts from './contacts';
import About from './about';
import Skills from './skills';
import Languages from './languages';
import Courses from './courses';
import Education from './education';
import Experience from './experience';
import { DATA } from '@/data/resume';

function Divider() {
  return <div className="block min-h-[1px] w-full rounded-sm bg-primary" />;
}

const BLUR_FADE_DELAY = 0.04;

export default async function ResumePage() {
  return (
    <main id="resume">
      <div className="w-full space-y-12 pb-12">
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
          <main className="flex justify-center text-xs leading-[1.2]">
            <div className="relative flex min-w-[325px] max-w-[325px] flex-col rounded-lg shadow-[5px_5px_0px_0px] outline outline-1 outline-primary md:max-h-[1122px] md:min-h-[1122px] md:min-w-[794px] md:max-w-[794px] md:flex-row">
              <section className="flex w-[325px] flex-col justify-between rounded-l-lg bg-secondary p-6 pt-[18px]">
                <Info />
                <Divider />
                <Contacts
                  contacts={DATA.contact.social}
                  location={DATA.location}
                  locationLink={DATA.locationLink}
                />
                <Divider />
                <About about={DATA.about} />
                <Divider />
                <Skills />
                <Divider />
                <Languages />
              </section>
              <section className="flex w-[469px] flex-col justify-between gap-4 rounded-l-lg p-6 pt-[19px]">
                <Experience />
                <Divider />
                <Courses courses={DATA.courses} />
                <Divider />
                <Education />
              </section>
            </div>
          </main>
        </BlurFade>
      </div>
    </main>
  );
}
