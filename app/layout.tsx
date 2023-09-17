import React, { ReactNode } from 'react';
import Navbar from './components/navbar';
import '@/app/globals.css';
import '@/app/fonts.css';
import localFont from 'next/font/local'



type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main >
 
    <div>
      <Navbar/>

      {children}

    </div> 
  </main>
  );
};

export default Layout;
