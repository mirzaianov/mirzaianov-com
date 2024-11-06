import { MAIN_DATA } from '@/data/main-data';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: `Resume`,
    template: `%s • ${MAIN_DATA.name}`,
  },
};

export default function ResumeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
