import Layout from '@/components/Container/DashboardLayout';
import { CustomButton } from '@/components/shared/Button';
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
      <h1>Patients</h1>
    </Layout>
  );
};

export default Patients;
