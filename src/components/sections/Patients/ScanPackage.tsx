import { CustomButton } from '@/components/shared/Button';
import QRCode from './QRCode';

const ScanPackage = () => {
  return (
    <section className='py-8 px-4 lg:px-8 flex-col center gap-4 lg:gap-8 border-b border-[#827f9833]'>
      <p>
        Scan a package to assign it to <b>Oluwaseun Aregbesola</b>
      </p>

      <div className='flex justify-start gap-4 center mb-6 w-full'>
        {/* QR Code */}
        <div className='w-full space-y-1'>
          <QRCode />
        </div>

        {/* Troubleshoot */}
        <div className='w-full space-y-1'>
          <p className='text-sm text-gray-500'>
            Trouble scanning QR Code? Enter manually
          </p>
          <input
            type='text'
            className='px-4 py-3 outline-none text-sm text-[#2A2A2A]/50 font-semibold border border-[#808080] w-full'
            placeholder='Enter code'
          />
          <CustomButton
            title={`Submit code`}
            className='!w-full !text-sm !border !bg-white !border-[#1F5AF4] !text-blue-600 hover:bg-blue-50 !mt-[24px]'
          />
        </div>
      </div>
    </section>
  );
};

export default ScanPackage;
