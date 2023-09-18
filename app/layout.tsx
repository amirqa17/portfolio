import React, { ReactNode } from 'react';
import Navbar from './components/navbar';
import Footer from './components/footer';
import '@/app/globals.css';
import '@/app/fonts.css';
import localFont from 'next/font/local';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
