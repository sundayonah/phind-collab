import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/header';
import Sidebar from '@/components/Sidebar';
import { Toaster } from '@/components/ui/sonner';

export const metadata: Metadata = {
   title: 'Phind Collab.',
   description: 'phind collab.',
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <ClerkProvider>
         <html lang="en">
            <body>
               <Header />
               <div className="flex min-h-screen">
                  {/* SIDEBAR */}
                  <Sidebar />
                  <div className="flex-1 bg-gray-100 overflow-y-auto scrollbar-hiden p-4">
                     {children}
                  </div>
               </div>
               <Toaster position="top-center" />
            </body>
         </html>
      </ClerkProvider>
   );
}
