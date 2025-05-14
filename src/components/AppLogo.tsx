// src/components/AppLogo.tsx
import type { SVGProps } from 'react';

export function AppLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {/* Modified logo design: Hexagon with A monogram */}
      <path
        d="M12 2L18.5 5.5L22 12L18.5 18.5L12 22L5.5 18.5L2 12L5.5 5.5L12 2Z"
        fillRule="evenodd"
        clipRule="evenodd"
        opacity="0.9"
      />
      {/* Letter A */}
      <path
        d="M8 16V8L12 6L16 8V16L14 17V10L12 9L10 10V17L8 16Z"
        fill="currentColor"
        opacity="0.8"
      />
    </svg>
  );
}
