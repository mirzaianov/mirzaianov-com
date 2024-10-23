'use client';

import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="m-0 appearance-none border-none bg-transparent p-0 text-gray-900 underline dark:text-white"
    >
      Back
    </button>
  );
}
