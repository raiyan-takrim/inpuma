import { cn } from '@/lib/utils';
import React from 'react';

export default function SectionHeading({
  children = 'Section Heading',
  className,
}) {
  return (
    <h1
      className={cn(
        'relative mb-10 inline-block text-3xl font-bold uppercase after:absolute after:-bottom-2 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-[--link]',
        className
      )}
    >
      {children}
    </h1>
  );
}
