'use client';
import React, { useState } from 'react';
import { CustomButton } from '@/components/shared/Button';
import NavItem from '@/components/Navigations/NavItem';
import Sidebar from '@/components/sections/Sidebar';
import PatientLayout from '../PatientLayout';
import PatientInformation from '@/components/sections/Patients/PatientsInformation';
import DeliveryInformation from '@/components/sections/Patients/DeliveryInformation';
import { IoChevronDownSharp } from 'react-icons/io5';

const TopHeader = ({ activeTab, setActiveTab }: any) => {
  const [activeDropdoiwn, setActiveDropdoiwn] = useState(false);
  const toggleDropdown = () => setActiveDropdoiwn((prev) => !prev);

  return (
    <div className='flex justify-between items-center border-b border-[#827f9833] px-2 lg:px-8'>
      <div className='text-sm py-4'>
        <span className='mr-4 font-medium'>Payment Status</span>
        <span className='bg-green-100 text-green-700 px-4 py-3 rounded text-sm font-medium'>
          Paid
        </span>
      </div>
      <div className=' flex flex-col justify-end items-end'>
        <button className='p-4 flex lg:hidden' onClick={toggleDropdown}>
          <IoChevronDownSharp
            className={`${
              activeDropdoiwn ? '-rotate-180' : 'rotate-0'
            } transition-transform duration-300`}
          />
        </button>
        {activeDropdoiwn && (
          <div
            className={`flex flex-col lg:hidden gap-2 absolute bg-white shadow top-0 mt-[17.5rem]`}
          >
            <NavItem
              label={'Patient Infromation'}
              icon={null}
              isActive={activeTab === 'patient' && true}
              action={() => setActiveTab('patient')}
            />
            <NavItem
              label={'Delivery Information'}
              icon={null}
              isActive={activeTab === 'delivery' && true}
              action={() => setActiveTab('delivery')}
            />
          </div>
        )}

        <div className={`hidden lg:flex gap-2`}>
          <NavItem
            label={'Patient Infromation'}
            icon={null}
            isActive={activeTab === 'patient' && true}
            action={() => setActiveTab('patient')}
          />
          <NavItem
            label={'Delivery Information'}
            icon={null}
            isActive={activeTab === 'delivery' && true}
            action={() => setActiveTab('delivery')}
          />
        </div>
      </div>
    </div>
  );
};

const BottomFooter = () => {
  return (
    <div className='w-full p-4 flex justify-between items-end'>
      <CustomButton
        title={`Back`}
        className='!w-[160px] mb-6 !border !bg-white !border-[#1F5AF4] !text-blue-600 hover:bg-blue-50 !hidden'
      />
      <CustomButton
        className='!w-[190px] !bg-[#1F5AF4]/50 text-white hover:!bg-[#1F5AF4]/40 ml-auto'
        title='Save Changes'
      />
    </div>
  );
};

export default function PatientDetailsPage() {
  const [activeTab, setActiveTab] = useState<'patient' | 'delivery'>('patient');
  return (
    <PatientLayout>
      <div className='flex flex-col lg:flex-row gap-5 justify-start items-start w-full xl:p-6'>
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className='w-full lg:w-3/4 bg-white rounded shadow-sm'>
          {/* Top head  */}
          <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Body Section */}
          {activeTab === 'patient' && <PatientInformation />}
          {activeTab === 'delivery' && <DeliveryInformation />}

          {/* Footer */}
          <BottomFooter />
        </div>
      </div>
    </PatientLayout>
  );
}
