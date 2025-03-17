'use client';
import { useState } from 'react';
import { IoChevronDownSharp } from 'react-icons/io5';
import { usePathname } from 'next/navigation';

const PatientSidebar = () => {
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  const toggleActive = () => setActive((prev) => !prev);

  const sidebarItems = [
    {
      name: 'Hospital ID',
      value: '1AFHFH093'
    },
    {
      name: 'Name',
      value: 'Oluwaseun Aregbesola'
    },
    {
      name: 'Phone Number',
      value: '+2347068642920'
    },
    {
      name: 'Next Delivery Date',
      value: '12th September 2020'
    },
    {
      name: 'Location',
      value: 'Yaba, Lagos'
    }
  ];

  return (
    <div className='w-full lg:w-1/4 bg-white'>
      <div className='flex justify-between items-center'>
        <p className='text-gray-400 mb-2 p-3 lg:p-6'>Patient Information</p>

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
      <ul className='space-y-1 hidden lg:flex flex-col'>
        {sidebarItems.map((item, index) => {
          return (
            <li
              key={index}
              className={`flex justify-between items-center text-sm font-semibold p-3 lg:p-6`}
            >
              <p className='font-light'>{item.name}:</p> <h3>{item.value}</h3>
            </li>
          );
        })}
      </ul>

      {/* Mobile screens */}
      {active && (
        <ul className='space-y-1 flex flex-col lg:hidden'>
          {sidebarItems.map((item, index) => {
            return (
              <li
                key={index}
                className={`flex justify-between items-center text-sm font-semibold p-3 lg:p-6`}
              >
                <p className='font-light'>{item.name}:</p> <h3>{item.value}</h3>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default PatientSidebar;
