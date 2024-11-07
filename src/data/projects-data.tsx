import { Icons } from '@/components/icons';

export const PROJECTS_DATA = {
  pageBadge: 'Projects',
  pageTitle: 'Observe my work',
  list: [
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
      title: 'mirzaianov.com',
      href: 'https://mirzaianov.com/',
      dates: 'Sep 2024 - Nov 2024',
      active: true,
      description:
        'A personal website for a frontend developer, including a resume, projects, courses, and notes pages.',
      technologies: [
        'Next',
        'Typescript',
        'Tailwind',
        'Shadcn/UI',
        'Framer Motion',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://www.mirzaianov.com/',
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: 'Source',
          href: 'https://github.com/mirzaianov/mirzaianov-com',
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: '',
      video: '/videos/mirzaianov-com.mp4',
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
        'An app that allows to generate an image (512x512 px) using DALL·E in the OPENAI API according to the inserted prompt',
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
};
