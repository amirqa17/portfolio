import React, { ReactNode } from 'react';
import Navbar from './components/navbar';
import '@/app/globals.css';
import '@/app/fonts.css';
import localFont from 'next/font/local'
import Footer from './components/footer';



type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main >
 
    <div>
      <Navbar/>

      {children}
<Footer/>
    </div> 
  </main>
  );
};

export default Layout;
