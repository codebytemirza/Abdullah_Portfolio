"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { portfolioConfig } from '@/config/portfolio';
import type { NavItem } from '@/config/portfolio';
import { cn } from '@/lib/utils';
import { useHash } from '@/hooks/use-mobile';

export default function BottomNavigation() {
  const pathname = usePathname();
  const hash = useHash();
  const navItems = portfolioConfig.sidebarNav || [];

  if (navItems.length === 0) return null;

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 border-t border-border bg-card md:hidden shadow-[-2px_0px_10px_rgba(0,0,0,0.1)]">
      <div className="mx-auto grid h-full w-full grid-cols-5 max-w-lg">
        {navItems.map((item: NavItem) => {
          const isActive = pathname === '/' && hash === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={cn(
                "group inline-flex flex-col items-center justify-center px-1 text-muted-foreground hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-primary/50",
                isActive && "text-primary"
              )}
              aria-label={item.title}
              suppressHydrationWarning
            >
              <item.icon className={cn(
                "h-5 w-5 mb-0.5",
                isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground"
              )} />
              <span 
                className={cn(
                  "text-[0.6rem] font-medium leading-tight truncate w-full text-center",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-accent-foreground"
                )}
              >
                {item.title}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
