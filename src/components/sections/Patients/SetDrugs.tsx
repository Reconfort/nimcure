import { CustomButton } from '@/components/shared/Button';
import { GoDot } from 'react-icons/go';
import { RiEdit2Fill } from 'react-icons/ri';

const SetDrugs = () => {
  return (
    <section className='py-8 px-4 lg:px-8 flex flex-col justify-start gap-4 lg:gap-8 border-b border-[#827f9833]'>
      <p>Oluwaseun Aregbesola has a drug cycle of two(2) months</p>

      <div className='border border-[#E0E0E0] flex flex-col justify-start items-start text-[#18131A] hover:shadow-md shadow-slate-100 cursor-pointer'>
        <div className='w-full flex items-center justify-start p-4 border-b border-[#E0E0E0]'>
          <GoDot className='text-4xl text-[#a5a5a5]' />
          <p>Same as initial drug cycle</p>
        </div>
        <div className='p-4'>
          Deliver drug on <b>4th February 2020</b> & set next delivery date to{' '}
          <b>4th March 2020</b>
        </div>
      </div>

      <div className='border border-[#E0E0E0] flex flex-col justify-start items-start text-[#18131A] hover:shadow-md shadow-slate-100 cursor-pointer'>
        <div className='w-full flex items-center justify-start p-4 border-b border-[#E0E0E0]'>
          <GoDot className='text-4xl text-[#a5a5a5]' />
          <p>Same as initial drug cycle</p>
        </div>
      </div>
    </section>
  );
};

export default SetDrugs;
