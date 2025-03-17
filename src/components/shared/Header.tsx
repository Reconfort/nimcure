import { ReactNode } from 'react';
import BreadCrumb from '../Navigations/BreadCrumb';

type HeaderProps = {
  children: ReactNode;
  className?: string;
};

const Header = ({ children, className }: HeaderProps) => {
  return (
    <section className=' center border-b border-[#827f9833] px-4 p-2 lg:p-0'>
      <div
        className={`container flex justify-between items-center ${className}`}
      >
        <BreadCrumb />
        {children}
      </div>
    </section>
  );
};

export default Header;
