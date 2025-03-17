import { CustomButton } from '@/components/shared/Button';
import { ContainerInput } from '@/components/shared/Input';
import { RiEdit2Fill } from 'react-icons/ri';

const DeliveryInformation = () => {
  return (
    <section className='py-8 px-4 lg:px-8 flex flex-col md:flex-row justify-start gap-4 lg:gap-8 border-b border-[#827f9833]'>
      <div className='flex flex-col justify-start gap-4 items-start md:items-center mb-6 w-full md:w-1/4'>
        <div className='space-y-1'>
          <h2 className='text-xl font-semibold'>Delivery Information</h2>
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

      {/* Patient Form Fields */}
      <div className='w-full md:w-3/4 flex flex-col items-end justify-end'>
        <div className=' w-full grid grid-cols-2 gap-4 mb-6'>
          <ContainerInput
            className=' col-span-2'
            title='Next Delivery Date'
            value='14th November 2020'
          />
          <ContainerInput
            className=' col-span-2'
            title='Delivery Area'
            value='Yaba, Lagos'
          />
          <ContainerInput
            className=' col-span-2'
            title='Delivery Adress'
            value='19, Mohammed Abiola street, Akoka, Lagos'
          />
          <ContainerInput title='Payment Status' value='Paid' />
        </div>
      </div>
    </section>
  );
};

export default DeliveryInformation;
