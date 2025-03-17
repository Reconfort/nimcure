'use client';
import Image from 'next/image';
import { FaUsers } from 'react-icons/fa6';
import { usePathname } from 'next/navigation';
import NavItem from './NavItem';
import Hamburger from './Hamburger';
import { NavItemType } from '@/types/Navigation';
import UserInfo from './UserInfo';

const NAV_ITEMS: NavItemType[] = [
  { href: '/overview', icon: <FaUsers />, label: 'Overview' },
  {
    href: '/deliveries',
    icon: <FaUsers />,
    label: 'Deliveries'
  },
  { href: '/patients', icon: <FaUsers />, label: 'Patients' },
  { href: '/dispatch', icon: <FaUsers />, label: 'Dispatch Riders' },
  { href: '/admin', icon: <FaUsers />, label: 'Admin' }
];

const Navbar = () => {
  const pathname = usePathname(); //Current Path

  return (
    <section className='bg-white center border-b border-[#827f9833] px-4 p-2 lg:p-0'>
      <div className='container flex justify-between items-center'>
        <Image
          src='/assets/nimcure_logo.png'
          alt='Intro_logo'
          width={1000}
          height={1000}
          className='w-[43px] h-[43px]'
        />

        <ul className='hidden lg:flex justify-center items-center gap-2'>
          {NAV_ITEMS.map(({ href, icon, label }) => (
            <NavItem
              key={href}
              href={href}
              icon={icon}
              label={label}
              isActive={pathname === href}
            />
          ))}
        </ul>

        <div className='center gap-4'>
          <UserInfo />
          <Hamburger NAV_ITEMS={NAV_ITEMS} pathname={pathname} />
        </div>
      </div>
    </section>
  );
};

export default Navbar;
