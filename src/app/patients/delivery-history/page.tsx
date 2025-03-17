import React from 'react';
import Sidebar from '@/components/sections/Sidebar';
import PatientLayout from '../PatientLayout';

export default function PatientDetailsPage() {
  return (
    <PatientLayout>
      <div className='flex flex-col lg:flex-row gap-5 justify-start items-start w-full xl:p-6'>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className='w-full lg:w-3/4 bg-white rounded shadow-sm p-20 center flex-col gap-12'>
          {/* Body Section */}
          <h1 className='text-sm font-bold'>Delivery History </h1>
          <p className='text-2xl font-extralight animate-pulse'>Coming Soon</p>
        </div>
      </div>
    </PatientLayout>
  );
}
