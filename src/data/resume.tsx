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
  role: 'Frontend Developer',
  url: 'https://mirzaianov.com',
  location: 'Novi Sad, Serbia',
  locationLink: 'https://www.google.com/maps/place/bursa',
  description: [
    'Frontend Developer.',
    'I love to deliver interfaces that harmonize functionality and appearance.',
  ],
  about: [
    '1.5 years in Frontend Development, Higher technical education (GPA 4.2), advanced English (C1), collaboration in international cross-functional teams',
    'Technology Stack: HTML, CSS, JavaScript, React, Next, Redux, TypeScript, Tailwind',
    'Solid in Algorithms and DSA, have skills in Figma|Eager to create eye-catching interfaces with cutting-edge web technologies',
    'Focused on blending aesthetics and functionality, driven by a keen eye for detail',
    'Goal for the nearest future is to continuously evolve in the realm of modern Frontend Development',
  ],
  summary: [
    'In 2022, I quit my job as an R&D Engineer from an [international A-Tier automotive manufacturer](https://www.knorr-bremse.com/de/), moved abroad and started a fresh new journey as a software engineer.',
    "In the past, I had pursued a Master's Degree in Engineering Technology at [Kazan Aviation University](https://kai.ru/web/en/our-history), passed English [IELTS test](https://ielts.org/) at C1 level, and participated in several engineering workshops in Europe.",
  ],
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
      description: [
        'Crafted 10 compelling landing pages from scratch, harnessing HTML, CSS (SASS), and JavaScript (ES6+) to captivate audiences',
        'Leveraged cutting-edge Flexbox, Grid, Transitions, and Animations to deliver seamless experiences, resulting in a 20% increase in customer engagement',
        'Engineered 3 top-of-the-line single-page applications (SPAs) using React & Tailwind, transforming audience interactions with intuitive interfaces and faster load times, leading to a 30% boost in user retention|Refactored a major project by migrating from JavaScript to React, integrating advanced features like react-hooks, react-router, and lazy-loading, culminating in a 55% improvement in overall efficiency',
        'Overhauled 2 JavaScript projects, ensuring cross-browser compatibility and adaptive, responsive layouts, driving a 150% surge in conversion rates and client satisfaction',
        'Led a successful collaboration with a backend team to integrate RESTful APIs into frontend applications, enhancing data retrieval efficiency by 40% and improving overall application performance',
        'Conceptualized and delivered 5 captivating User Interfaces in Figma, surpassing client expectations with innovative usage of Variables, Styles, and Components',
        'Embraced Responsive Design principles (Auto Layout) for flawless cross-platform usability',
      ],
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
      description: [
        'Moved abroad',
        'Intensively learned WEB development, JavaScript, React, TypeScript, Redux',
        'Utilized Git & Jira',
        'Practised DSA',
      ],
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
      description: [
        'Completed 3 localization projects of Air Disk Brake (ADB) components, started the serial manufacturing',
        'Implemented 100+ devices, toolings and equipment in production lines, measuring and testing laboratories',
        'Designed 700+ component, assembly, installation drawings, specifications, using PTC CREO, Teamcenter & MathCad',
        'Managed DFMEA analysis for 3 products utilizing PLATO SCIO',
        'Mentored 5 junior engineers in R&D processes and CAD work',
      ],
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
      description: [
        "Kazan National Research Technical University named after A.N. Tupolev (often called KAI or KNRTU-KAI) is one of Russia's major technical universities, located in Kazan, the capital of Tatarstan. Founded in 1932, it was originally established as the Kazan Aviation Institute. The university is named after Andrey Tupolev, a famous Soviet aircraft designer.",
        "The university specializes in Aviation and Aerospace Engineering, Technical and Engineering Sciences, Information Technology, Radio Electronics, Economics and Management. It's considered one of the leading aerospace education institutions in Russia and has strong connections with the Russian aviation industry. A lot of large-scale projects in composite materials, laser technologies, industrial robots, new engine development and the like are implemented by the university.",
      ],
    },
  ],
  resume: {
    title: 'Riaz Mirzaianov',
    href: '/resume',
    dates: '',
    // active: true,
    description: 'Frontend Developer',
    technologies: ['JavaScript', 'React', 'TypeScript', 'Redux', 'Tailwind'],
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
    image: '',
    video: '/videos/resume.mp4',
    self: true,
  },
  projects: [
    {
      title: 'alsu.',
      href: 'https://www.alsu.me/',
      dates: 'Jun 2024 - Jul 2024',
      active: true,
      description:
        'A personal website for a professional tutor, translator & interpreter. Designed [in Figma](https://www.figma.com/design/OVTqGfHWzeTCEd0fpX456Z/karimova-me?node-id=0-1&t=i7E8AZOM53lRpkkz-1), crafted with React & Tailwind, and deployed on Vercel',
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
        'A lightweight web application to help always keep the shopping list close. It allows to organize a cart in a simple and convenient way',
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
    {
      title: 'AI Image Generator',
      href: 'https://igenerator-mirzaianov.vercel.app/',
      dates: 'Oct 2023 - Nov 2023',
      active: true,
      description:
        'An app that allows to generate an image (512x512 px) using DALL·E in the OPENAI API according to the inserted promt',
      technologies: ['Vite', 'React', 'CSS', 'AI', 'Open AI'],
      links: [
        {
          type: 'Website',
          href: 'https://igenerator-mirzaianov.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mirzaianov/ai-image-generator',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '/videos/igenerator.mp4',
    },
    {
      title: 'Unsplash Image Search Application',
      href: 'https://isearch-mirzaianov.vercel.app/',
      dates: 'Sep 2023 - Oct 2023',
      active: true,
      description:
        'An app that utilizes Unsplash API to provide with images according to the search request',
      technologies: ['Vite', 'React', 'CSS', 'AI', 'Open AI'],
      links: [
        {
          type: 'Website',
          href: 'https://isearch-mirzaianov.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mirzaianov/unsplash-image-search',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '/videos/isearch.mp4',
    },
    {
      title: 'Marvel Information Portal',
      href: 'https://test-marvel.vercel.app/',
      dates: 'Nov 2022 - Dec 2022',
      active: true,
      description:
        'A test project which allows to get information about heroes from Marvel Comics Universe',
      technologies: [
        'React',
        'React Router',
        'React Helmet',
        'SCSS',
        'Formik',
        'REST',
        'API',
        'Yup',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://test-marvel.vercel.app/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mirzaianov/test-marvel',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '/videos/marvel.mp4',
    },
  ],
  courses: [
    {
      title: 'React & TypeScript - The Practical Guide',
      date: '2024',
      source: 'Udemy',
      author: 'Maximilian Schwarzmüller',
      active: true,
      description:
        'Build type-safe React apps & use TypeScript to enhance your components, state management, Redux & side effects code',
      image: '/icons/ts.png',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/react-typescript-the-practical-guide',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-react-typescript-practical',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-6dfcde92-f3f1-4dba-ad8f-a34292cac315.pdf',
        },
      ],
    },
    {
      title: 'Modern TypeScript Complete Course',
      date: '2024',
      source: 'Udemy',
      author: 'Ivan Petrychenko',
      active: true,
      description:
        'Learn to use typing for the sake of results, and not just for the sake of it',
      image: '/icons/ts.png',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/modern_typescript/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-modern-typescript',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-4de5d88a-3db6-453e-ad89-f86f5f108353.pdf',
        },
      ],
    },
    {
      title: 'API and Web Service Introduction',
      date: '2024',
      source: 'Udemy',
      author: 'Nate Ross',
      active: true,
      description:
        'Introduction to APIs and RESTful Web Services. Includes HTTP, JSON, XML, REST, SOAP, OAuth, OpenID Connect, Postman, and Python',
      image: '/icons/api.png',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/api-and-web-service-introduction/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-api',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-6d5861d0-2a0e-4be8-99b1-e0ef1e16342b.pdf',
        },
      ],
    },
    {
      title: 'The Complete Regular Expressions (Regex) Course For Beginners',
      date: '2024',
      source: 'Udemy',
      author: 'George S',
      active: true,
      description: 'Deeply understand JavaScript’s newest features',
      image: '/icons/regexp.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/regular-expressions-mastery',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-regex',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-e6d84011-c920-48c1-ad31-2716a9b348cd.pdf',
        },
      ],
    },
    {
      title: 'React - The Complete Guide 2024 (incl.  React Router & Redux)',
      date: '2024',
      source: 'Udemy',
      author: 'Maximilian Schwarzmüller',
      active: false,
      description:
        'Dive in and learn React.js from scratch! Learn React, Hooks, Redux, React Router, Next.js, Best Practices and way more!',
      image: '/icons/react.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
        },
      ],
    },
    {
      title: 'Git & GitHub - The Practical Guide',
      date: '2024',
      source: 'Udemy',
      author: 'Maximilian Schwarzmüller',
      active: false,
      description:
        'Learn Git & GitHub and master working with commits, branches, the stash, cherry picking, rebasing, pull requests & more!',
      image: '/icons/git.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/git-github-practical-guide/',
        },
      ],
    },
    {
      title: 'React - React & Redux Complete Course',
      date: '2024',
      source: 'Udemy',
      author: 'Bogdan Stashchuk',
      active: true,
      description:
        'Understand and learn all the key features of React: Components, JSX, Props, State, useState, useEffect, and Redux',
      image: '/icons/redux.png',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/react-ru/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-react-ru',
        },
      ],
    },
    {
      title: 'JavaScript Algorithms and Data Structures Masterclass',
      date: '2024',
      source: 'Udemy',
      author: 'Colt Steele',
      active: false,
      description: 'The Missing Computer Science and Coding Interview Bootcamp',
      image: '/icons/dsa.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
        },
      ],
    },
    {
      title: 'The Complete JavaScript Course 2024: From Zero to Expert!',
      date: '2024',
      source: 'Udemy',
      author: 'Jonas Schmedtmann',
      active: false,
      description:
        'The modern JavaScript course for everyone! Master JavaScript with projects, challenges and theory. Many courses in one!',
      image: '/icons/js.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/the-complete-javascript-course/',
        },
      ],
    },
    {
      title: 'JavaScript: Understanding ES6 and Beyond',
      date: '2024',
      source: 'Udemy',
      author: 'Anthony Alicea',
      active: true,
      description: 'Deeply understand JavaScript’s newest features',
      image: '/icons/js.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/javascript-understanding-es6-and-beyond',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-es6-beyond',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-0b371869-51c5-4be6-9be8-c270a8433e9c.pdf',
        },
      ],
    },
    // # 2023
    {
      title: 'TypeScript 5+ Fundamentals, v4',
      date: '2023',
      source: 'Frontend Masters',
      author: 'Mike North',
      active: true,
      description:
        'Learn all the key Typescript features such as variable typing, function signatures, union and intersection types, type aliases, and generics. Use effective strategies for transitioning your codebase to TypeScript for more robust and scalable applications',
      image: '/icons/ts.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://frontendmasters.com/courses/typescript-v4/',
        },
      ],
    },
    {
      title: "The Beginner's Guide to React",
      date: '2023',
      source: 'egghead.io',
      author: 'Kent C. Dodds',
      active: true,
      description:
        'This course is for React newbies and anyone looking to build a solid foundation. It’s designed to teach you everything you need to start building web applications in React right away',
      image: '/icons/react.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://frontendmasters.com/courses/css-grid-flexbox-v2/',
        },
      ],
    },
    {
      title: 'Git: course',
      date: '2023',
      source: 'YouTube',
      author: 'JavaScript.ru',
      active: true,
      description:
        'A neat, necessary, slightly "advanced" course on Git that makes a developer\'s life easier. Detailed, from simple to complex, with detailed explanations',
      image: '/icons/git.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.youtube.com/playlist?list=PLDyvV36pndZFHXjXuwA_NywNrVQO0aQqb',
        },
      ],
    },
    {
      title: 'Asynchronous Programming in JavaScript',
      date: '2023',
      source: 'Pluralsight',
      author: 'Nate Taylor',
      active: true,
      description:
        "Asynchronous programming is often intimidating, it's not how we normally consider writing code. This course shows how promises and async/await can help simplify async programming.",
      image: '/icons/js.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.pluralsight.com/courses/javascript-asynchronous-programming',
        },
      ],
    },
    {
      title: 'Conquering Responsive Layouts',
      date: '2023',
      source: 'KP',
      author: 'Kevin Powell',
      active: true,
      description:
        'Jump in on this 21-day challenge, put the time in, and you will walk out understanding how you can make a responsive layouts',
      image: '/icons/css.png',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://courses.kevinpowell.co/conquering-responsive-layouts',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/conquering-responsive-layouts',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/Conquering Responsive Layouts-certificate.pdf',
        },
      ],
    },
    {
      title: 'Responsive UX/UI Design in Figma 1.5h deep dive 2024 UPDATE!',
      date: '2023',
      source: 'Udemy',
      author: 'Christine moonlearning',
      active: true,
      description:
        'Figma Auto Layout, Constraints and Breakpoints: Responsive setup, testing and design documentation, min/max width, wrap',
      image: '/icons/figma.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/responsive-ui-design-in-figma-2h-deep-dive/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-responsive-ui-design-in-figma',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-e67bb419-5e23-4b4c-b54d-f9f50b816155.pdf',
        },
      ],
    },
    {
      title: 'NEW Figma 2023: Getting started the Beginner to Pro Class',
      date: '2023',
      source: 'Udemy',
      author: 'Christine moonlearning',
      active: true,
      description:
        'The only class fully updated with the latest Figma UI and features, released in October 2024!',
      image: '/icons/figma.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/figma-beginner/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-figma-beginner',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-22e5f94e-48a0-44bd-9e2a-c16979f328bd.pdf',
        },
      ],
    },
    {
      title: 'CSS Animations and Transitions',
      date: '2023',
      source: 'Frontend Masters',
      author: 'David Khourshid',
      active: true,
      description:
        'Learn CSS animation basics and transition to advanced concepts like orchestration and choreography. Techniques you’ll learn: CSS transitions, animations, custom properties, data attributes, choreography, animation states, layout animations, and reactive animations with a little bit of JavaScript',
      image: '/icons/css.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://frontendmasters.com/courses/css-animations/',
        },
      ],
    },
    {
      title: 'Strings and Regular Expressions in JavaScript',
      date: '2023',
      source: 'Pluralsight',
      author: 'Andrejs Doronins',
      active: true,
      description:
        'Working with text is a fundamentally crucial task in every programming language. This course will help you deepen your knowledge of the String and Regex API of the JavaScript language',
      image: '/icons/regexp.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.pluralsight.com/courses/javascript-strings-regular-expressions',
        },
      ],
    },
    {
      title: 'CSS - The Complete Guide 2024 (incl. Flexbox, Grid & Sass)',
      date: '2023',
      source: 'Udemy',
      author: 'Maximilian Schwarzmüller',
      active: false,
      description:
        'Learn CSS for the first time or brush up your CSS skills and dive in even deeper. EVERY web developer has to know CSS',
      image: '/icons/css.png',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/css-the-complete-guide-incl-flexbox-grid-sass/',
        },
      ],
    },
    // # 2022
    {
      title: 'JavaScript + React Complete Course',
      date: '2022',
      source: 'Udemy',
      author: 'Ivan Petrychenko',
      active: true,
      description:
        'Master the most popular programming language - JavaScript, the React library and learn how to apply it in practice!',
      image: '/icons/js.png',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://www.udemy.com/course/javascript_full',
        },
        {
          title: 'Source',
          icon: <Icons.github className="h-4 w-4" />,
          href: 'https://github.com/mirzaianov/udemy-javascript-react',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="h-4 w-4" />,
          href: '/certificates/UC-1f0a1090-1098-48ef-9491-d7be1350699b.pdf',
        },
      ],
    },
    {
      title: 'CSS Grid & Flexbox for Responsive Layouts, v2',
      date: '2022',
      source: 'Frontend Masters',
      author: 'Jen Kramer',
      active: true,
      description:
        "Learn the essential CSS layout techniques for building responsive, beautiful web applications. You'll get hands-on practice using CSS Grid for two-dimensional, grid-based layouts and Flexbox for styling one-directional flow. You'll master using these techniques and responsive images to build real-world, responsive web layouts!",
      image: '/icons/css.png',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="h-4 w-4" />,
          href: 'https://frontendmasters.com/courses/css-grid-flexbox-v2/',
        },
      ],
    },
    {
      title: 'WEB Developer',
      date: '2022',
      source: 'Udemy',
      author: 'Ivan Petrychenko',
      active: true,
      description:
        'Master everything you need to create web products and start making money from it!',
      image: '/icons/html.png',
      inResume: false,
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
