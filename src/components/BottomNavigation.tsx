
"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { portfolioConfig } from '@/config/portfolio';
import type { NavItem } from '@/config/portfolio';
import { cn } from '@/lib/utils';

export default function BottomNavigation() {
  const pathname = usePathname();

  // Ensure sidebarNav exists and is an array before mapping
  const navItems = portfolioConfig.sidebarNav || [];

  if (navItems.length === 0) {
    return null; // Don't render if there are no nav items
  }

  // Dynamically create grid columns class based on number of items
  // up to a reasonable max (e.g., 5 or 6), or use flex for more items.
  // For 5 items, grid-cols-5 is fine.
  const gridColsClass = `grid-cols-${navItems.length}`;


  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-border bg-card md:hidden shadow-[-2px_0px_10px_rgba(0,0,0,0.1)]">
      <div className={cn(
        "mx-auto grid h-full max-w-lg",
        gridColsClass
      )}>
        {navItems.map((item: NavItem) => {
          // For hash links, active state is usually determined by scroll position,
          // which is complex for a simple bottom nav.
          // Here, we'll highlight if the current path matches the href hash.
          // This works for initial load or direct navigation to a hash.
          const isActive = pathname === '/' && typeof window !== 'undefined' && window.location.hash === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "group inline-flex flex-col items-center justify-center p-2 text-muted-foreground rounded-lg hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary/50",
                isActive && "text-primary"
              )}
              aria-label={item.title}
            >
              <item.icon className={cn("h-5 w-5 mb-0.5", isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground")} />
              <span className={cn("text-[0.6rem] font-medium leading-tight", isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground")}>
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
