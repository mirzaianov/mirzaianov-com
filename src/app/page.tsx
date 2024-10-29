import BlurFade from '@/components/magicui/blur-fade';
import BlurFadeText from '@/components/magicui/blur-fade-text';
import WordPullUp from '@/components/magicui/word-pull-up';
import { ProjectCard } from '@/components/project-card';
import { ResumeCard } from '@/components/resume-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { DATA } from '@/data/resume';
import { PROJECTS_DATA } from '@/data/projects-data';
import CoursesList from '@/components/courses-list';
import Link from 'next/link';
import Markdown from 'react-markdown';
import rehypeExternalLinks from 'rehype-external-links';
import ProjectsList from '@/components/projects-list';
import NotesList from '@/components/notes-list';
import { getNotesPosts, NOTES_DATA } from '@/data/notes';

const BLUR_FADE_DELAY = 0.04;

export default async function Page() {
  const notes = await getNotesPosts();

  return (
    <main className="flex min-h-[100dvh] flex-col space-y-10">
      {/* Hero */}
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="flex justify-between gap-2">
            <div className="flex flex-1 flex-col space-y-1.5">
              <WordPullUp
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                words={`Hi, I'm ${DATA.name.split(' ')[0]}`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage
                  alt={DATA.name}
                  src={DATA.avatarUrl}
                />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown
            rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
            className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert"
          >
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>

      {/* Work */}
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                badges={work.badges}
                period={`${work.start} - ${work.end || 'Present'}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((school, id) => (
            <BlurFade
              key={school.name}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={school.name}
                logoUrl={school.logoUrl}
                altText={school.name}
                title={school.name}
                subtitle={`${school.degree} in ${school.specialization}`}
                description={school.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-1">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge key={skill}>{skill}</Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {DATA.resume.pageBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {DATA.resume.pageTitle}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                  Get acquainted with the resume{' '}
                  <Link
                    href="/resume"
                    className="text-gray-900 underline dark:text-white"
                  >
                    online
                  </Link>{' '}
                  or
                  <br /> immediately{' '}
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
          <div className="mx-auto grid grid-cols-1 sm:max-w-[306px]">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <ProjectCard
                href="/resume"
                key={DATA.name}
                title={DATA.name}
                description={DATA.role}
                dates=""
                tags={DATA.skills.filter((_, index) => index < 5)}
                video={DATA.resume.video}
                links={DATA.resume.links}
                self={DATA.resume.self}
              />
            </BlurFade>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {PROJECTS_DATA.pageBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {PROJECTS_DATA.pageTitle}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Find more{' '}
                  <Link
                    href="/projects"
                    className="text-gray-900 underline dark:text-white"
                  >
                    on this page
                  </Link>
                  .
                </p>
              </div>
            </div>
          </BlurFade>
          <ProjectsList limit={2} />
        </div>
      </section>

      {/* Courses */}
      <section id="courses">
        <div className="w-full space-y-12 py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {DATA.courses.pageBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {DATA.courses.pageTitle}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                  To boost my professional growth and broaden horizons, I
                  completed{' '}
                  <Link
                    href="/courses"
                    className="text-gray-900 underline dark:text-white"
                  >
                    {DATA.courses.list.filter((course) => course.active).length}
                    + online courses
                  </Link>
                  . Here are some of the latest ones.
                </p>
              </div>
            </div>
          </BlurFade>
          <CoursesList limit={2} />
        </div>
      </section>

      {/* Notes */}
      <section id="notes">
        <div className="w-full space-y-12 pb-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                  {NOTES_DATA.pageBadge}
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  {NOTES_DATA.pageTitle}
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed xl:text-xl/relaxed">
                  I study a lot and usually save notes that seemed useful. Check
                  out{' '}
                  <Link
                    href="/notes"
                    className="text-gray-900 underline dark:text-white"
                  >
                    {notes.length}+ notes in my collection.
                  </Link>{' '}
                </p>
              </div>
            </div>
          </BlurFade>
          <NotesList limit={2} />
        </div>
      </section>

      {/* Contact */}
      <section id="contact">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground px-3 py-1 text-sm text-background">
                {DATA.contact.pageBadge}
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                {DATA.contact.pageTitle}
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Have an offer or want to chat? I am always open to new
                challenges. Just shoot me a dm{' '}
                <Link
                  href={DATA.contact.social.Telegram.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="text-gray-900 underline dark:text-white"
                >
                  with a direct question on Telegram
                </Link>{' '}
                and I will respond as soon as possible.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      {/* Credits */}
      <section id="credits">
        <div className="grid w-full items-center justify-center gap-4 px-4 py-12 text-center md:px-6">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <Markdown
              rehypePlugins={[[rehypeExternalLinks, { target: '_blank' }]]}
              className="prose max-w-full text-pretty font-sans text-base text-muted-foreground dark:prose-invert"
            >
              {DATA.credits}
            </Markdown>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
