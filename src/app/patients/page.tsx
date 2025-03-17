import Layout from '@/components/Container/DashboardLayout';
import RecentPatient from '@/components/sections/Patients/RecentPatient';
import { CustomButton } from '@/components/shared/Button';
import { Search, SelectInput } from '@/components/shared/Input';
import { IoIosAdd } from 'react-icons/io';

const Patients = () => {
  return (
    <Layout
      header={
        <div className='w-[142px] lg:w-[183.46px]'>
          <CustomButton title='Add Patient' icon={<IoIosAdd />} />
        </div>
      }
    >
      {/* Header */}
      <div className='w-full flex items-center justify-between'>
        <div className='flex items-center gap-4'>
          <p>Sort by</p>
          <SelectInput />
        </div>

        <div className='flex items-center gap-4 relative'>
          <Search />
        </div>
      </div>

      {/* Body */}
      <RecentPatient />
    </Layout>
  );
};

export default Patients;
