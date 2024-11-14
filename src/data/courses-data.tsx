import { Icons } from '@/components/icons';

export const COURSES_DATA = {
  pageBadge: 'Courses',
  pageTitle: 'Explore my study path',
  list: [
    {
      title: 'React & TypeScript - The Practical Guide',
      date: '2024',
      source: 'Udemy',
      author: 'Maximilian Schwarzmüller',
      active: true,
      description:
        'Build type-safe React apps & use TypeScript to enhance your components, state management, Redux & side effects code',
      image: '/icons/react.svg',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/react-typescript-the-practical-guide',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-react-typescript-practical',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8T3H0g8mqXEfCPbAo9YrugvqJ5VkK0Up8GiDae',
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
      image: '/icons/ts.svg',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/modern_typescript/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-modern-typescript',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8TkfOer1oXtTU2u5nqlAfYaHSbCGgmsz9ReoOy',
        },
      ],
    },
    {
      title: 'Introduction to Next.js, v3',
      date: '2024',
      source: 'Frontend Masters',
      author: 'Scott Moss',
      active: true,
      description:
        "In this course, you'll learn server-side rendering, static site generation, data fetching, building API endpoints, creating pages, and new features in Next.js, like using the app router, server and client components, and server actions!",
      image: '/icons/next.svg',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://frontendmasters.com/courses/next-js-v3/',
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
      image: '/icons/postman.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/api-and-web-service-introduction/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-api',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8TYAOiO9zEQcLKwZIDOXsrzyRW0v5P6SqN31da',
        },
      ],
    },
    {
      title: 'The Complete Regular Expressions (Regex) Course For Beginners',
      date: '2024',
      source: 'Udemy',
      author: 'George S',
      active: true,
      description: "Deeply understand JavaScript's newest features",
      image: '/icons/udemy.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/regular-expressions-mastery',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-regex',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8TFqYPsyWDjy0PI6MY4JSleW8tackgEvrUbRQN',
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
      image: '/icons/react.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/git.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/redux.svg',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/react-ru/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
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
      image: '/icons/dsa.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/js.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      description: "Deeply understand JavaScript's newest features",
      image: '/icons/js.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/javascript-understanding-es6-and-beyond',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-es6-beyond',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8TJ5VCBbjKX53TzqgxPmHAhtlC8bdrZv4nL9yF',
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
      image: '/icons/ts.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/react.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/git.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/js.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/css.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://courses.kevinpowell.co/conquering-responsive-layouts',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/conquering-responsive-layouts',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8ThqPAJ8TT1X2aAqW5SxokjrelDvypuNb3U40K',
        },
      ],
    },
    {
      title: 'Responsive UX/UI Design in Figma 2h deep dive JULY 2023 UPDATE',
      date: '2023',
      source: 'Udemy',
      author: 'Christine moonlearning',
      active: true,
      description:
        'Figma Auto Layout, Constraints and Breakpoints: Responsive setup, testing and design documentation, min/max width, wrap',
      image: '/icons/figma.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/responsive-ui-design-in-figma-2h-deep-dive/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-responsive-ui-design-in-figma',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8Tn2zkGR5Nf39SFYtIUuloWqw1GXcsVjLx5DTP',
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
      image: '/icons/figma.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/figma-beginner/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-figma-beginner',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8TzfBZB93gcKmqphCdW7QxSwE5012LrvUjHeos',
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
      image: '/icons/css.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/js.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.pluralsight.com/courses/javascript-strings-regular-expressions',
        },
      ],
    },
    {
      title: 'CSS - The Complete Guide 2023 (incl. Flexbox, Grid & Sass)',
      date: '2023',
      source: 'Udemy',
      author: 'Maximilian Schwarzmüller',
      active: false,
      description:
        'Learn CSS for the first time or brush up your CSS skills and dive in even deeper. EVERY web developer has to know CSS',
      image: '/icons/css.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/js.svg',
      inResume: true,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/javascript_full',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-javascript-react',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8T6tJ3KAZkXJP1lgzwHjWKxCud9pMcI5nmG3Fe',
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
      image: '/icons/css.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
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
      image: '/icons/html.svg',
      inResume: false,
      links: [
        {
          title: 'Website',
          icon: <Icons.globe className="size-3" />,
          href: 'https://www.udemy.com/course/webdeveloper/',
        },
        {
          title: 'Source',
          icon: <Icons.github className="size-3" />,
          href: 'https://github.com/mirzaianov/udemy-web-developer',
        },
        {
          title: 'Certificate',
          icon: <Icons.download className="size-3" />,
          href: 'https://utfs.io/f/etzPSWYSlL8TVe9qG4uZgreSy2GOIf9wY7np3uFxLM8WADXK',
        },
      ],
    },
  ],
};
