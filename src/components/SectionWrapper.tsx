import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  className?: string;
  id: string;
}

export default function SectionWrapper({ children, className, id, ...props }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn('py-16 md:py-24 min-h-screen flex flex-col justify-center items-center', className)} // Added min-h-screen and centering
      {...props}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {children}
      </div>
    </section>
  );
}
