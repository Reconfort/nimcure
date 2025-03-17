'use client';
import React, { useState } from 'react';
import { CustomButton } from '@/components/shared/Button';
import NavItem from '@/components/Navigations/NavItem';
import { IoChevronDownSharp } from 'react-icons/io5';
import Layout from '@/components/Container/DashboardLayout';
import PatientSidebar from '@/components/sections/Patients/PatientSidebar';
import { GoDot } from 'react-icons/go';
import { FaRegCircleDot } from 'react-icons/fa6';
import SetDrugs from '@/components/sections/Patients/SetDrugs';
import DispatchRider from '@/components/sections/Patients/dispatchRider';
import ScanPackage from '@/components/sections/Patients/ScanPackage';

const TopHeader = ({ activeTab, setActiveTab }: any) => {
  const [activeDropdoiwn, setActiveDropdoiwn] = useState(false);
  const toggleDropdown = () => setActiveDropdoiwn((prev) => !prev);

  return (
    <div className='center border-b border-[#827f9833] px-2 lg:px-8'>
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
            className={`flex flex-col lg:hidden gap-2 absolute bg-white shadow z-30 top-0 mt-[17.5rem]`}
          >
            <NavItem
              label={'Set Drug Cycle/Length'}
              icon={
                activeTab === 'setDrug' ? (
                  <FaRegCircleDot className='text-xl' />
                ) : (
                  <GoDot className='text-4xl' />
                )
              }
              isActive={activeTab === 'setDrug' && true}
              action={() => setActiveTab('setDrug')}
            />
            <NavItem
              label={'Assign Dispatch Rider'}
              icon={
                activeTab === 'dispatchRider' ? (
                  <FaRegCircleDot className='text-xl' />
                ) : (
                  <GoDot className='text-4xl' />
                )
              }
              isActive={activeTab === 'dispatchRider' && true}
              action={() => setActiveTab('dispatchRider')}
            />
            <NavItem
              label={'Scan Package'}
              icon={
                activeTab === 'scanPackage' ? (
                  <FaRegCircleDot className='text-xl' />
                ) : (
                  <GoDot className='text-4xl' />
                )
              }
              isActive={activeTab === 'scanPackage' && true}
              action={() => setActiveTab('scanPackage')}
            />
          </div>
        )}

        <div className={`hidden lg:flex gap-2`}>
          <NavItem
            label={'Set Drug Cycle/Length'}
            icon={
              activeTab === 'setDrug' ? (
                <FaRegCircleDot className='text-xl' />
              ) : (
                <GoDot className='text-4xl' />
              )
            }
            isActive={activeTab === 'setDrug' && true}
            action={() => setActiveTab('setDrug')}
          />
          <NavItem
            label={'Assign Dispatch Rider'}
            icon={
              activeTab === 'dispatchRider' ? (
                <FaRegCircleDot className='text-xl' />
              ) : (
                <GoDot className='text-4xl' />
              )
            }
            isActive={activeTab === 'dispatchRider' && true}
            action={() => setActiveTab('dispatchRider')}
          />
          <NavItem
            label={'Scan Package'}
            icon={
              activeTab === 'scanPackage' ? (
                <FaRegCircleDot className='text-xl' />
              ) : (
                <GoDot className='text-4xl' />
              )
            }
            isActive={activeTab === 'scanPackage' && true}
            action={() => setActiveTab('scanPackage')}
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
  const [activeTab, setActiveTab] = useState<
    'setDrug' | 'dispatchRider' | 'scanPackage'
  >('setDrug');
  return (
    <Layout>
      <div className='flex flex-col lg:flex-row gap-5 justify-start items-start w-full xl:p-6'>
        {/* Sidebar */}
        <PatientSidebar />

        {/* Main Content */}
        <div className='w-full lg:w-3/4 bg-white rounded shadow-sm'>
          {/* Top head  */}
          <TopHeader activeTab={activeTab} setActiveTab={setActiveTab} />

          {/* Body Section */}
          {activeTab === 'setDrug' && <SetDrugs />}
          {activeTab === 'dispatchRider' && <DispatchRider />}
          {activeTab === 'scanPackage' && <ScanPackage />}

          {/* Footer */}
          <BottomFooter />
        </div>
      </div>
    </Layout>
  );
}
