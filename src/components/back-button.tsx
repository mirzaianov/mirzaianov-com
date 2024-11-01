'use client';

import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <Button
      onClick={() => router.back()}
      variant="secondary"
      className="group gap-2 transition-all duration-300 hover:scale-105 hover:bg-primary/20 sm:text-base sm:leading-[1.2]"
    >
      <ArrowLeft
        size={16}
        className="transition-transform duration-300 group-hover:-translate-x-0.5"
      />
      <p>Go back</p>
    </Button>
  );
}
