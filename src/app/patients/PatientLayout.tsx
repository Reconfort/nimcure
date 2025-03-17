'use client';
import { useState } from 'react';
import { CustomButton } from '@/components/shared/Button';
import { IoChevronDownSharp } from 'react-icons/io5';
import Layout from '@/components/Container/DashboardLayout';

const Heading = () => {
  const [activeMenu, setActiveMenu] = useState(false);
  const toggleActive = () => setActiveMenu((prev) => !prev);
  return (
    <div className='flex flex-col justify-end items-end w-full'>
      <button className='p-4 block lg:hidden' onClick={toggleActive}>
        <IoChevronDownSharp
          className={`${
            activeMenu ? '-rotate-180' : 'rotate-0'
          } transition-transform duration-300`}
        />
      </button>
      <div className={`hidden lg:flex flex-col lg:flex-row justify-end w-full`}>
        <div className='w-full flex flex-col gap-1 text-sm'>
          <p className=''>Patient’s next delivery date is</p>
          <h2 className='font-semibold'>14th November 2020, in 2 days</h2>
        </div>
        <CustomButton
          className='!w-[390px]'
          title='Assign package to patient'
          path='/patients/view-patient/assign-package-to-patient'
        />
      </div>

      {activeMenu && (
        <div
          className={`flex flex-col lg:flex-row lg:hidden justify-end w-auto gap-4 ${
            activeMenu
              ? 'absolute top-0 mt-[9.5rem] !w-[95vw] z-20 p-2 bg-white shadow'
              : ''
          }`}
        >
          <div className='w-full flex flex-col gap-1 text-sm'>
            <p className=''>Patient’s next delivery date is</p>
            <h2 className='font-semibold'>14th November 2020, in 2 days</h2>
          </div>
          <CustomButton
            className='!w-full'
            title='Assign package to patient'
            path='/patients/view-patient/assign-package-to-patient'
          />
        </div>
      )}
    </div>
  );
};

const PatientLayout = ({ children }: { children: React.ReactNode }) => {
  return <Layout header={<Heading />}>{children}</Layout>;
};

export default PatientLayout;
