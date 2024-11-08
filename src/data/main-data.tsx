import { Icons } from '@/components/icons';
import {
  HomeIcon,
  PencilLine,
  CodeXml,
  User,
  GraduationCap,
} from 'lucide-react';

export const MAIN_DATA = {
  name: 'Riaz Mirzaianov',
  initials: 'RM',
  role: 'Frontend Developer',
  url: 'https://mirzaianov.com',
  currentCity: 'Novi Sad',
  currentCountry: 'Serbia',
  description:
    'Frontend Developer. I love delivering interfaces that harmonize functionality and appearance.',
  about: [
    '1.5 years in Frontend Development, Higher technical education (GPA 4.2), advanced English (C1), collaboration in international cross-functional teams',
    'Technology Stack: HTML, CSS, JavaScript, React, Next, Redux, TypeScript, Tailwind',
    'Solid in Algorithms and DSA, skilled in Figma Design, proficient in Git & Jira',
    'Eager to create eye-catching interfaces with cutting-edge web technologies',
    'Focused on blending aesthetics and functionality, driven by a keen eye for detail',
    'Goal for the nearest future is to continuously evolve in the realm of modern Frontend Development',
  ],
  summary:
    "In 2022, I quit my job as an R&D Engineer from an [international A-Tier automotive manufacturer](https://www.knorr-bremse.com/de/), moved abroad and started a fresh new journey as a software engineer. In the past, I had pursued a Master's Degree in Engineering Technology at [Kazan Aviation University](https://kai.ru/web/en/our-history), passed English [IELTS test](https://ielts.org/) at C1 level, and participated in several engineering workshops in Europe.",
  avatarUrl: '/icons/me.svg',
  skills: [
    'JavaScript',
    'React',
    'TypeScript',
    'Next',
    'Redux',
    'Tailwind',
    'HTML',
    'CSS',
    'SASS',
    'Git',
    'REST',
    'API',
    'HTTP',
    'ES6',
    'Tanstack Query',
    'React Router',
    'RTK',
    'CSS modules',
    'BEM',
    'Cross-Browser Compatibility',
    'Adaptive Web Design',
    'Responsive Web Design',
    'OOP',
    'SQL',
    'Algorithms',
    'Data Structures',
    'SEO',
    'Jira',
    'Linux',
    'Figma',
    'Firebase',
    'Gitflow',
    'Github Flow',
    'UI/UX',
    'ESLint',
    'Prettier',
  ],
  languages: [
    {
      name: 'English',
      level: 'Advanced C1 • IELTS 7.5',
    },
    {
      name: 'Turkish',
      level: 'Beginner A2',
    },
    {
      name: 'Russian',
      level: 'Native',
    },
    {
      name: 'Tatar',
      level: 'Native',
    },
  ],
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home', mobile: true },
    { href: '/resume', icon: User, label: 'Resume', mobile: true },
    { href: '/projects', icon: CodeXml, label: 'Projects', mobile: true },
    { href: '/courses', icon: GraduationCap, label: 'Courses', mobile: false },
    { href: '/notes', icon: PencilLine, label: 'Notes', mobile: false },
  ],
  contact: {
    pageBadge: 'Contact',
    pageTitle: 'Get in touch',
    social: {
      Telegram: {
        name: 'Telegram',
        url: 'https://t.me/mirzaianov',
        icon: Icons.telegram,
        navbar: true,
        mobile: true,
      },
      Email: {
        name: 'Email',
        url: 'mailto:hello@mirzaianov.com',
        icon: Icons.email,
        navbar: true,
        mobile: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/mirzaianov',
        icon: Icons.linkedin,
        navbar: true,
        mobile: true,
      },
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/mirzaianov',
        icon: Icons.github,
        navbar: true,
        mobile: true,
      },
      LeetCode: {
        name: 'LeetCode',
        url: 'https://leetcode.com/mirzaianov',
        icon: Icons.leetcode,
        navbar: true,
        mobile: false,
      },
    },
  },
  work: [
    {
      company: 'Self Employed',
      href: '/',
      location: 'Remote',
      title: 'Frontend Developer',
      logoUrl: '/icons/rm.svg',
      start: 'April 2023',
      end: '',
      description: [
        'Crafted 10 compelling landing pages, leveraging Flexbox, Grid, CSS Transitions and Animations, boosting customer engagement by 30%',
        'Engineered 3 contemporary SPAs applying React, Next, Tailwind & Redux, leading to a 1.2-1.7x decrease in page load times',
        'Migrated a major project from JS to TypeScript & React, integrated react-hooks, lazy-loading, culminating in a 55% efficiency improvement',
        'Overhauled 2 JS projects, ensuring cross-browser compatibility and adaptive, responsive layouts, driving a 1.5x surge in conversion rates',
        'Led a collaboration with a backend team, integrating RESTful APIs into frontend apps, enhancing data retrieval effectiveness by 40%',
        'Delivered 5 eye-catching User Interfaces in Figma, twice surpassing client expectations with usage of Variables, Styles, and Components',
      ],
      inResume: true,
      field: 'Software Engineering',
      specialization: 'Web Development',
      self: true,
    },
    {
      company: 'Career Break',
      href: '/projects',
      location: 'Türkiye',
      title: 'Career Transition',
      logoUrl: '/icons/react.svg',
      start: 'October 2022',
      end: 'March 2023',
      description: [
        'Relocated internationally, improving adaptability and cross-cultural skills, yielding a 50% increment in teamwork performance',
        'Dedicated over 1200 hours of intensive training in modern web development, mastering JavaScript, React, TypeScript, Next, and Redux',
        'Built 15+ pet & test projects from scratch with help of Git & Jira, scaling up time-management capabilities by 30%',
        'Solved more than 650 DSA problems on LeetCode, multiplying 3x in JavaScript, TypeScript, and SQL abilities',
      ],
      inResume: true,
      field: 'Software Engineering',
      specialization: 'Web Development',
      self: true,
    },
    {
      company: 'Knorr-Bremse AG',
      href: 'https://www.knorr-bremse.com/de/',
      location: 'Russia',
      title: 'R&D Engineer',
      logoUrl: '/icons/knorr.svg',
      start: 'April 2017',
      end: 'September 2022',
      description: [
        'Completed 3 localization ventures of Air Disk Brake (ADB) components, resulting in a serial manufacturing and a 1.5x user satisfaction increase',
        'Implemented 100+ devices, toolings and equipment, elevating capability of production lines, measuring and testing laboratories up to 25%',
        'Designed over 700 component, assembly, installation drawings, specifications, using PTC CREO, Teamcenter & MathCad',
        'Managed DFMEA analysis for 3 products utilizing PLATO SCIO, leading to a 20% gain in product reliability',
        'Mentored 5 junior engineers in R&D processes and 2D/3D CAD work',
      ],
      inResume: true,
      field: 'Automotive',
      specialization: 'Braking Systems',
      self: false,
    },
  ],
  education: [
    {
      name: 'Kazan National Research Technical University named after A.N. Tupolev–KAI',
      href: 'https://kai.ru/web/en/',
      degree: "Master's Degree",
      specialization: 'Engineering Technology',
      logoUrl: '/icons/kai.svg',
      start: 2003,
      end: 2008,
      gpa: 4.2,
      type: 'Higher Education',
      mode: 'Full-time',
      description: [
        "Kazan National Research Technical University named after A.N. Tupolev (often called KAI or KNRTU-KAI) is one of Russia's major technical universities, located in Kazan, the capital of Tatarstan. Founded in 1932, it was originally established as the Kazan Aviation Institute. The university is named after Andrey Tupolev, a famous Soviet aircraft designer.",
        "The university specializes in Aviation and Aerospace Engineering, Technical and Engineering Sciences, Information Technology, Radio Electronics, Economics and Management. It's considered one of the leading aerospace education institutions in Russia and has strong connections with the Russian aviation industry. A lot of large-scale projects in composite materials, laser technologies, industrial robots, new engine development and the like are implemented by the university.",
      ],
    },
  ],
  resume: {
    pageBadge: 'Resume',
    pageTitle: 'Assess my resume',
    skills: [
      'JavaScript',
      'React',
      'TypeScript',
      'Next',
      'HTML',
      'CSS',
      'Redux',
      'React Router',
      'UI',
      'Frontend',
      'Webpack',
      'SASS',
      'Firebase',
      'REST',
      'Cross-Browser Compatibility',
      'Git',
      'OOP',
      'API',
      'SEO',
      'Figma',
      'Bootstrap',
      'SQL',
      'Adaptive Web Design',
      'SCSS',
      'ES6',
      'Responsive Web Design',
      'Linux',
      'BEM',
      'Mobile First',
      'HTTP',
      'Vite',
      'SPA',
      'Jira',
      'Tailwind',
      'Algorithms',
      'Data Structures',
      'React Hooks',
      'CSS-modules',
      'Github Flow',
      'RTK',
      'Tanstack Query',
      'Gitflow',
      'ESLint',
    ],
    links: [
      {
        type: 'Online',
        href: '/resume',
        icon: <Icons.account className="size-3" />,
        self: true,
      },
      {
        type: 'Download',
        href: '/pdf/MIRZAIANOV_CV_A4EN.pdf',
        icon: <Icons.download className="size-3" />,
      },
    ],
    video: '/videos/resume.mp4',
    self: true,
  },
  credits: 'Inspired by [dillion.io](https://dillion.io/)',
} as const;
