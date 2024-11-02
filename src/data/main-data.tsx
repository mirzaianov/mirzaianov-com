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
    'Solid in Algorithms and DSA, have skills in Figma',
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
    'Redux',
    'Next',
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
        'Crafted 10 compelling landing pages from scratch, harnessing HTML, CSS (SASS), and JavaScript (ES6+) to captivate audiences. Leveraged cutting-edge Flexbox, Grid, Transitions, and Animations to deliver seamless experiences, resulting in a 20% increase in customer engagement',
        'Engineered 3 top-of-the-line single-page applications (SPAs) using React & Tailwind, transforming audience interactions with intuitive interfaces and faster load times, leading to a 30% boost in user retention',
        'Refactored a major project by migrating from JavaScript to React, integrating advanced features like react-hooks, react-router, and lazy-loading, culminating in a 55% improvement in overall efficiency',
        'Overhauled 2 JavaScript projects, ensuring cross-browser compatibility and adaptive, responsive layouts, driving a 150% surge in conversion rates and client satisfaction',
        'Led a successful collaboration with a backend team to integrate RESTful APIs into frontend applications, enhancing data retrieval efficiency by 40% and improving overall application performance',
        'Conceptualized and delivered 5 captivating User Interfaces in Figma, surpassing client expectations with innovative usage of Variables, Styles, and Components. Embraced Responsive Design principles (Auto Layout) for flawless cross-platform usability',
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
      title: 'Career transition',
      logoUrl: '/icons/react.svg',
      start: 'October 2022',
      end: 'March 2023',
      description: [
        'Moved abroad',
        'Intensively learned WEB development, JavaScript, React, TypeScript, Redux',
        'Utilized Git & Jira',
        'Practiced DSA',
      ],
      inResume: false,
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
        'Completed 3 localization projects of Air Disk Brake (ADB) components, started the serial manufacturing',
        'Implemented 100+ devices, toolings and equipment in production lines, measuring and testing laboratories',
        'Designed 700+ component, assembly, installation drawings, specifications, using PTC CREO, Teamcenter & MathCad',
        'Managed DFMEA analysis for 3 products utilizing PLATO SCIO',
        'Mentored 5 junior engineers in R&D processes and CAD work',
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
