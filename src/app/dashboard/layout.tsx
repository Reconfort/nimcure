import Navbar from '@/components/Navigations/Navbar';
import { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <section className='bg-[#F9F9F9] min-w-screen min-h-screen'>
      <Navbar />

      {children}
    </section>
  );
};

export default Layout;
