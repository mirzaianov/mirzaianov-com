import { MAIN_DATA } from '@/data/main-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: `Courses`,
    template: `%s • ${MAIN_DATA.name}`,
  },
};

export default function CoursesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
