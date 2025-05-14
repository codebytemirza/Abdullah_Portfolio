
"use client";

import Link from 'next/link';
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { portfolioConfig, socialIcons } from '@/config/portfolio';
import type { NavItem } from '@/config/portfolio';
import { Separator } from './ui/separator';
import { AppLogo } from '@/components/AppLogo'; // Import the new logo

export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="p-4 text-center">
        <Link href="#hero" className="block">
          {/* Expanded View: Logo, Name, Title */}
          <div className="group-data-[collapsible=icon]:hidden">
            <AppLogo className="mx-auto h-10 w-10 text-primary mb-2" />
            <h2 className="text-lg font-semibold text-primary">
              {portfolioConfig.name}
            </h2>
            <p className="text-xs text-muted-foreground">
              {portfolioConfig.professionalTitle}
            </p>
          </div>

          {/* Collapsed View: Logo only */}
          <div className="hidden group-data-[collapsible=icon]:block">
            <AppLogo className="mx-auto h-8 w-8 text-primary" />
          </div>
        </Link>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {portfolioConfig.sidebarNav.map((item: NavItem) => (
            <SidebarMenuItem key={item.title}>
              <Link href={item.href} legacyBehavior passHref>
                <SidebarMenuButton
                  tooltip={{ children: item.title, side: 'right', className: 'ml-2' }}
                  className="w-full justify-start"
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  <span className="group-data-[collapsible=icon]:hidden">{item.title}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="p-4 mt-auto">
        <Separator className="my-2 group-data-[collapsible=icon]:hidden" />
         <div className="flex flex-col items-center space-y-2 group-data-[collapsible=icon]:items-center group-data-[collapsible=icon]:space-y-2">
          <p className="text-xs text-muted-foreground group-data-[collapsible=icon]:hidden">Connect with me:</p>
          <div className="flex space-x-2 group-data-[collapsible=icon]:flex-col group-data-[collapsible=icon]:space-x-0 group-data-[collapsible=icon]:space-y-2">
            {Object.entries(portfolioConfig.socialLinks).map(([platform, url]) => {
              const Icon = socialIcons[platform];
              return (
                <Button
                  key={platform}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="text-muted-foreground hover:text-primary"
                  aria-label={platform}
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              );
            })}
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
