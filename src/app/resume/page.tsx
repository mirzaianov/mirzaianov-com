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
import { MAIN_DATA } from '@/data/main-data';
import { COURSES_DATA } from '@/data/courses-data';
import { cityToMapsLink } from '@/lib/utils';

const BLUR_FADE_DELAY = 0.04;

function Divider({ rate }: { rate: number }) {
  return (
    <BlurFade delay={BLUR_FADE_DELAY * rate}>
      <div className="block min-h-[1px] w-full rounded-sm bg-primary" />
    </BlurFade>
  );
}

export default async function ResumePage() {
  return (
    <main id="resume">
      <div className="w-full space-y-12 pb-12">
        <BlurFade delay={BLUR_FADE_DELAY * 5}>
          <section className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {MAIN_DATA.resume.pageBadge}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {MAIN_DATA.resume.pageTitle}
              </h2>
              <p className="text-balance text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                I thoroughly analysed my strengths and weaknesses and
                transformed those into an elegant and eye-catching CV. Get
                acquainted here or immediately{' '}
                <Link
                  rel="noopener noreferrer"
                  target="_blank"
                  href={
                    MAIN_DATA.resume.links.find(
                      (link) => link.type === 'Download',
                    )?.href || '#'
                  }
                  className="text-gray-900 underline dark:text-white"
                >
                  download
                </Link>{' '}
                it in PDF (EN, A4).
              </p>
            </div>
          </section>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 10}>
          <section className="flex justify-center text-xs leading-[1.2]">
            <div className="relative flex w-10/12 min-w-[325px] max-w-sm flex-col rounded-lg shadow-[5px_5px_0px_0px] outline outline-1 outline-primary sm:w-full sm:max-w-full sm:flex-row lg:h-[1122px] lg:min-w-[794px]">
              <article className="flex flex-col justify-between gap-4 rounded-t-lg bg-secondary p-6 pt-[18px] sm:w-5/12 sm:rounded-l-lg lg:w-[325px]">
                <Info
                  name={MAIN_DATA.name}
                  role={MAIN_DATA.role}
                  skills={MAIN_DATA.skills}
                />
                <Divider rate={13} />
                <Contacts
                  contacts={MAIN_DATA.contact.social}
                  location={`${MAIN_DATA.currentCity}, ${MAIN_DATA.currentCountry}`}
                  locationLink={cityToMapsLink(MAIN_DATA.currentCity)}
                />
                <Divider rate={15} />
                <About about={MAIN_DATA.about} />
                <Divider rate={17} />
                <Skills resumeSkills={MAIN_DATA.resume.skills} />
                <Divider rate={19} />
                <Languages languages={MAIN_DATA.languages} />
              </article>
              <article className="flex flex-col gap-4 rounded-b-lg px-6 py-[21px] sm:w-7/12 sm:justify-between sm:gap-0 sm:rounded-l-lg lg:w-[469px]">
                <Experience work={MAIN_DATA.work} />
                <Divider rate={15} />
                <Courses courses={COURSES_DATA.list} />
                <Divider rate={18} />
                <Education education={MAIN_DATA.education} />
              </article>
            </div>
          </section>
        </BlurFade>
      </div>
    </main>
  );
}
