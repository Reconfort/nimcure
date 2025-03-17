import { CustomButton } from '@/components/shared/Button';
import { RiEdit2Fill } from 'react-icons/ri';

const ScanPackage = () => {
  return (
    <section className='py-8 px-4 lg:px-8 flex flex-col justify-start gap-4 lg:gap-8 border-b border-[#827f9833]'>
      <p>Oluwaseun Aregbesola has a drug cycle of two(2) months</p>

      <div className='flex flex-col justify-start gap-4 items-start md:items-center mb-6 w-full md:w-1/4'>
        <div className='space-y-1'>
          <h2 className='text-xl font-semibold'>Patient's Information</h2>
          <p className='text-sm text-gray-500'>
            Personal information about Patient.
          </p>
        </div>
        <CustomButton
          title={` Edit Patient's`}
          icon={<RiEdit2Fill />}
          className='!max-w-[260px] xl:!max-w-[260px] !text-sm !border !bg-white !border-[#1F5AF4] !text-blue-600 hover:bg-blue-50'
        />
      </div>
    </section>
  );
};

export default ScanPackage;
