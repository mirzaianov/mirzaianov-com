import { MAIN_DATA } from '@/data/main-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: `Projects`,
    template: `%s • ${MAIN_DATA.name}`,
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
