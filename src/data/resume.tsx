import { Icons } from '@/components/icons';
import {
  HomeIcon,
  PencilLine,
  CodeXml,
  User,
  GraduationCap,
} from 'lucide-react';

export const DATA = {
  name: 'Riaz Mirzaianov',
  initials: 'RM',
  url: 'https://mirzaianov.com',
  location: 'Bursa, Türkiye',
  locationLink: 'https://www.google.com/maps/place/bursa',
  description:
    'Frontend Developer. I love to deliver interfaces that harmonize functionality and appearance.',
  summary:
    "In 2022, I quit my job as an R&D Engineer from an [international A-Tier automotive manufacturer](https://www.knorr-bremse.com/de/), moved abroad and started a fresh new journey as a software engineer. In the past, I had pursued a Master's Degree in Engineering Technology at [Kazan Aviation University](https://kai.ru/web/en/our-history), passed English [IELTS test](https://ielts.org/) at C1 level, and participated in several engineering workshops in Europe.",
  avatarUrl: '/icons/me.png',
  skills: [
    'JavaScript',
    'React',
    'TypeScript',
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
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/resume', icon: User, label: 'Resume' },
    { href: '/projects', icon: CodeXml, label: 'Projects' },
    { href: '/courses', icon: GraduationCap, label: 'Courses' },
    { href: '/notes', icon: PencilLine, label: 'Notes' },
  ],
  contact: {
    social: {
      Telegram: {
        name: 'Telegram',
        url: 'https://t.me/mirzaianov',
        icon: Icons.telegram,
        navbar: true,
      },
      Email: {
        name: 'Email',
        url: 'mailto:hello@mirzaianov.com',
        icon: Icons.email,
        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://linkedin.com/in/mirzaianov/',
        icon: Icons.linkedin,
        navbar: true,
      },
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/mirzaianov',
        icon: Icons.github,
        navbar: true,
      },
      LeetCode: {
        name: 'LeetCode',
        url: 'https://leetcode.com/mirzaianov/',
        icon: Icons.leetcode,
        navbar: true,
      },
    },
  },
  work: [
    {
      company: 'Freelance',
      href: '/resume',
      badges: [],
      location: 'Remote',
      title: 'Frontend Developer',
      logoUrl: '/icons/rm.png',
      start: 'April 2023',
      end: null,
      description:
        'Crafted 10 compelling landing pages from scratch, harnessing HTML, CSS (SASS), and JavaScript (ES6+) to captivate audiences|Leveraged cutting-edge Flexbox, Grid, Transitions, and Animations to deliver seamless experiences, resulting in a 20% increase in customer engagement|Engineered 3 top-of-the-line single-page applications (SPAs) using React & Tailwind, transforming audience interactions with intuitive interfaces and faster load times, leading to a 30% boost in user retention|Refactored a major project by migrating from JavaScript to React, integrating advanced features like react-hooks, react-router, and lazy-loading, culminating in a 55% improvement in overall efficiency|Overhauled 2 JavaScript projects, ensuring cross-browser compatibility and adaptive, responsive layouts, driving a 150% surge in conversion rates and client satisfaction|Led a successful collaboration with a backend team to integrate RESTful APIs into frontend applications, enhancing data retrieval efficiency by 40% and improving overall application performance|Conceptualized and delivered 5 captivating User Interfaces in Figma, surpassing client expectations with innovative usage of Variables, Styles, and Components|Embraced Responsive Design principles (Auto Layout) for flawless cross-platform usability',
    },
    {
      company: 'Career Break',
      href: '#',
      badges: [],
      location: 'Türkiye',
      title: 'Career transition',
      logoUrl: '/icons/react.png',
      start: 'October 2022',
      end: 'March 2023',
      description:
        'Moved abroad|Intensively learned WEB development, JavaScript, React, TypeScript, Redux| Utilized Git & Jira|Practised DSA',
    },
    {
      company: 'Knorr-Bremse AG',
      badges: [],
      href: 'https://www.knorr-bremse.com/de/',
      location: 'Russia',
      title: 'R&D Engineer',
      logoUrl: '/icons/knorr.png',
      start: 'April 2017',
      end: 'September 2022',
      description:
        'Completed 3 localization projects of Air Disk Brake (ADB) components, started the serial manufacturing|Implemented 100+ devices, toolings and equipment in production lines, measuring and testing laboratories|Designed 700+ component, assembly, installation drawings, specifications, using PTC CREO, Teamcenter & MathCad|Managed DFMEA analysis for 3 products utilizing PLATO SCIO|Mentored 5 junior engineers in R&D processes and CAD work',
    },
  ],
  education: [
    {
      school:
        'Kazan National Research Technical University named after A.N. Tupolev – KAI',
      href: 'https://kai.ru/web/en/',
      degree: "Master's Degree in Engineering Technology",
      logoUrl: '/icons/kai.png',
      start: 2003,
      end: 2008,
      description: `Kazan National Research Technical University named after A.N. Tupolev (often called KAI or KNRTU-KAI) is one of Russia's major technical universities, located in Kazan, the capital of Tatarstan. Founded in 1932, it was originally established as the Kazan Aviation Institute. The university is named after Andrey Tupolev, a famous Soviet aircraft designer.|The university specializes in Aviation and Aerospace Engineering, Technical and Engineering Sciences, Information Technology, Radio Electronics, Economics and Management. It's considered one of the leading aerospace education institutions in Russia and has strong connections with the Russian aviation industry. A lot of large-scale projects in composite materials, laser technologies, industrial robots, new engine development and the like are implemented by the university.`,
    },
  ],
  resume: {
    title: 'Riaz Mirzaianov',
    href: '/resume',
    dates: '',
    active: true,
    description: 'Frontend Developer',
    technologies: ['JavaScript', 'React', 'TypeScript', 'Redux', 'Tailwind'],
    links: [
      {
        type: 'Online',
        href: '/resume',
        icon: <Icons.account className="size-3" />,
      },
      {
        type: 'Download',
        href: '/pdf/MIRZAIANOV_CV_A4EN.pdf',
        icon: <Icons.download className="size-3" />,
      },
    ],
    image: '',
    video: '/videos/resume.mp4',
  },
  projects: [
    {
      title: 'alsu.',
      href: 'https://www.alsu.me/',
      dates: 'Jun 2024 - Jul 2024',
      active: true,
      description:
        'A personal website for a professional tutor, translator & interpreter. Designed [the UI in Figma](https://www.figma.com/design/OVTqGfHWzeTCEd0fpX456Z/karimova-me?node-id=0-1&t=i7E8AZOM53lRpkkz-1), crafted the code in React & Tailwind, and deployed the site on Vercel.',
      technologies: ['Vite', 'React', 'Tailwind'],
      links: [
        {
          type: 'Website',
          href: 'https://www.alsu.me/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mirzaianov/alsu-me',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '/videos/alsu-me.mp4',
    },
    {
      title: 'Shopping List',
      href: 'https://shopping-mirzaianov.vercel.app/',
      dates: 'Nov 2023 - Jan 2024',
      active: true,
      description:
        'A lightweight web application to help always keep the shopping list close. It allows you to organize the cart in a simple and convenient way.',
      technologies: ['Vite', 'React', 'Tailwind', 'Firebase'],
      links: [
        {
          type: 'Website',
          href: 'https://shopping-mirzaianov.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mirzaianov/shopping-list',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '/videos/shopping-list.mp4',
    },
  ],
  courses: [
    {
      title: 'WEB Developer',
      date: '2022',
      source: 'Udemy',
      description:
        'Master everything you need to create web products and start making money from it!',
      image: '/icons/html.png',
      mlh: '',
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/webdeveloper/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-web-developer',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-03049cff-42f9-4689-8384-3bd33140d70b.pdf',
        },
      ],
    },
  ],
  credits: 'Insipred by [dillion.io](https://dillion.io/)',
} as const;
