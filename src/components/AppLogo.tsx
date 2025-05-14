// src/components/AppLogo.tsx
import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor" // Inherits color from parent, e.g., text-primary
      xmlns="http://www.w3.org/2000/svg"
      {...props} // Allows overriding size, className, etc.
    >
      {/* Abstract geometric logo: Hexagon with inner diamond */}
      <path
        d="M12 2L18.5 5.5L22 12L18.5 18.5L12 22L5.5 18.5L2 12L5.5 5.5L12 2Z M12 7.8L8.2 10L8.2 14L12 16.2L15.8 14L15.8 10L12 7.8Z"
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </svg>
  );
}
