import Navbar from '@/components/Navigations/Navbar';
import Header from '@/components/shared/Header';
import { ReactNode } from 'react';

interface LAYOUT_PROPS {
  children: ReactNode;
  header?: ReactNode;
}

const Layout = ({ children, header }: LAYOUT_PROPS) => {
  return (
    <section className='bg-[#F9F9F9] min-w-screen min-h-screen'>
      <Navbar />
      <Header className='py-4'>{header}</Header>
      <section className='center px-4'>
        <div className='container flex flex-col justify-between items-center'>
          {children}
        </div>
      </section>
    </section>
  );
};

export default Layout;
