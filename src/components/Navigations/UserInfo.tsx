'use client';
import Image from 'next/image';
import { FaChevronDown } from 'react-icons/fa6';
import { useState } from 'react';
import NavItem from './NavItem';
import { FiLogOut } from 'react-icons/fi';

const UserInfo = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => setShowDropdown((show) => !show);
  return (
    <section className='hidden md:flex flex-col gap-2 relative'>
      {/* Toggle Info */}
      <div
        className='flex justify-center items-center gap-2 py-3 group cursor-pointer relative z-20'
        onClick={toggleDropdown}
      >
        <Image
          src='/assets/profile.png'
          alt='Intro_logo'
          width={1000}
          height={1000}
          className='w-[36px] h-[36px] rounded-full border-2 border-transparent group-hover:border-black'
        />
        <div className='hidden lg:flex justify-center items-center gap-1'>
          <h2 className='text-slate-800 group-hover:text-black font-semibold'>
            Emmanuel Adigwe
          </h2>
          <FaChevronDown
            className={`scale-90 ${showDropdown ? '-rotate-180' : 'rotate-0'}`}
          />
        </div>
      </div>

      {/* Content */}
      <div
        className={`w-full absolute !mt-[3.8rem] flex justify-end items-end z-10 ${
          showDropdown
            ? 'translate-y-0 opacity-100'
            : '-translate-y-12 opacity-0'
        }`}
      >
        <NavItem
          href={'/'}
          icon={<FiLogOut />}
          label={'Logout'}
          isActive={false}
          clasName='bg-red-100 text-red-600'
        />
      </div>
    </section>
  );
};

export default UserInfo;
