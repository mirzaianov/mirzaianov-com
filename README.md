![MasterHead](/head.gif)

# MIRZAIANOV.COM

## Description

### A personal website of Riaz Mirzaianov - a Frontend Engineer (JavaScript, React, TypeScript)

### Features

- Compelling minimalistic UI & Solid UX
- Includes 5 routes: Home, Resume, Projects, Courses, Notes
- Major browser compatibility
- Responsive for different devices
- Complex animations
- Optimized for Vercel

### Dependencies

- `Next` • `TypeScript`
- `Tailwind` • `Shadcn/UI` • `Magic UI`
- `Framer Motion`

## Installation & Execution

### Install via Next

```bash
  git clone https://github.com/mirzaianov/mirzaianov-com
  cd mirzaianov-com
  pnpm install
```

### TypeScript and ESLint

`pnpm typecheck` uses TypeScript 7 through the `@typescript/native` alias.
The `typescript` alias supplies Microsoft's TypeScript 6 compatibility API for
Next.js and typescript-eslint. `pnpm build` runs the TypeScript 7 check before
Next.js builds and performs its own compatibility-API type check.

ESLint 10 retains Next.js's rules through `@eslint/compat`; the matching peer
exceptions are scoped to the three legacy plugins in `pnpm-workspace.yaml`.

### Run in the development mode

```bash
  pnpm dev
```

Next will start the server on [http://localhost:3000/](http://localhost:3000/)

## License

### MIT license

You can use the code, but I ask you do not copy this site giving me credit
