import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { SidebarProvider } from '@/components/ui/sidebar';
import AppSidebar from '@/components/AppSidebar';
import { Toaster } from '@/components/ui/toaster';
import { portfolioConfig } from '@/config/portfolio';
import BottomNavigation from '@/components/BottomNavigation'; // Import BottomNavigation

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: `${portfolioConfig.name}'s Portfolio`,
  description: `${portfolioConfig.professionalTitle}. Explore projects, skills, and get a personalized AI introduction.`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}>
        <SidebarProvider defaultOpen={true}>
          <AppSidebar />
          {children}
          <BottomNavigation /> {/* Add BottomNavigation here */}
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}
