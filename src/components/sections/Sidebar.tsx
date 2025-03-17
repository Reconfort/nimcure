'use client';
import Link from 'next/link';
import { useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const toggleActive = () => setActive((prev) => !prev);

  const sidebarItems = [
    {
      label: "Rider's Profile",
      link: '/patients/view-patient',
      activeClass: 'text-blue-600 border-r-4 border-blue-600'
    },
    {
      label: 'Delivery History',
      link: '/patients/delivery-history',
      activeClass: 'text-blue-600 border-r-4 border-blue-600'
    }
  ];

  return (
    <div className='w-full lg:w-1/4 bg-white'>
      <div className='flex justify-between items-center'>
        <p className='text-gray-400 mb-2 p-3 lg:p-6'>Patient</p>

        {/* Mobile */}
        <button
          className='block lg:hidden mb-2 p-3 lg:p-6'
          onClick={toggleActive}
          aria-label='Toggle sidebar'
        >
          <IoChevronDownSharp
            className={`${
              active ? '-rotate-180' : 'rotate-0'
            } transition-transform duration-300`}
          />
        </button>
      </div>

      {/* Large screens */}
      <div className='space-y-2 hidden lg:flex flex-col'>
        {sidebarItems.map((item, index) => {
          // Check if the current path matches the item link
          const isActive = pathname === item.link;
          const activeClass = isActive ? item.activeClass : 'text-gray-500';

          return (
            <Link
              key={index}
              href={item.link}
              className={`${activeClass} font-semibold p-3 lg:p-6`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      {/* Mobile screens */}
      {active && (
        <div className='space-y-2 flex flex-col lg:hidden'>
          {sidebarItems.map((item, index) => {
            // Check if the current path matches the item link
            const isActive = pathname === item.link;
            const activeClass = isActive ? item.activeClass : 'text-gray-500';

            return (
              <Link
                key={index}
                href={item.link}
                className={`${activeClass} hover:text-blue-600 cursor-pointer p-3 lg:p-6`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
