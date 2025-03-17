'use client';
import { HiOutlineMenuAlt4 } from 'react-icons/hi';
import NavItem from './NavItem';
import { HamburgerProps } from '@/types/Navigation';
import { useState } from 'react';
import { RiCloseFill } from 'react-icons/ri';
import Image from 'next/image';

const Hamburger = ({ NAV_ITEMS, pathname }: HamburgerProps) => {
  const [active, setActive] = useState(false);
  const toggleActive = () => setActive((active) => !active);
  return (
    <section className='block lg:hidden'>
      <button
        className='p-3 bg-slate-800 hover:bg-black text-white cursor-pointer hover:scale-110 active:scale-90 duration-75 rounded-full'
        onClick={toggleActive}
      >
        {active ? <RiCloseFill /> : <HiOutlineMenuAlt4 />}
      </button>

      <div
        className={`${
          active ? 'translate-x-0 opacity-100' : 'translate-x-[100%] opacity-0'
        } fixed right-0 h-screen bg-white z-30 mt-[1.9%] w-[50vw] md:w-[40vw] flex flex-col justify-start items-start gap-2 border-l border-[#827f9833]`}
      >
        <ul className='flex flex-col gap-2 w-full'>
          {NAV_ITEMS.map(({ href, icon, label }) => (
            <NavItem
              key={href}
              href={href}
              icon={icon}
              label={label}
              className='w-full !justify-start !items-start'
              isActive={pathname === href}
            />
          ))}
        </ul>

        <div className='flex justify-center items-center gap-2 px-4 py-3 group cursor-pointer relative z-20'>
          <Image
            src='/assets/profile.png'
            alt='Intro_logo'
            width={1000}
            height={1000}
            className='w-[36px] h-[36px] rounded-full border-2 border-transparent group-hover:border-black'
          />
          <div className='flex justify-center items-center gap-1'>
            <h2 className='text-slate-800 group-hover:text-black font-semibold'>
              Emmanuel Adigwe
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hamburger;
