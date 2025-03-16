import Image from 'next/image';
import { Input, ToggleInput } from '@/components/shared/Input';
import { ChechBox } from '@/components/shared/Input';
import { CustomButton } from '@/components/shared/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className='w-screen flex items-center justify-center'>
      <section className='w-[80%] md:w-[50%] lg:md:w-[60%] h-screen flex justify-center items-center'>
        <div className='w-full md:w-[60%] lg:w-[339px] h-full gap-32 flex flex-col justify-between py-12 items-center'>
          <Image
            src='/assets/logo.png'
            alt='Intro_logo'
            width={1000}
            height={1000}
            className='w-12 h-12'
          />

          <form className=' w-full flex flex-col gap-[31px]'>
            <h1 className='text-lg font-semibold'>Sign in to continue</h1>
            <div className='flex flex-col gap-4'>
              <Input />
              <ToggleInput />

              <div className='w-full flex justify-between items-center'>
                <div className='flex items-center gap-2'>
                  <ChechBox />
                </div>
                <Link
                  href='dashboard/patients'
                  className=' font-bold text-sm text-[#1F5AF4]'
                >
                  Forgot Password?
                </Link>
              </div>
            </div>

            <CustomButton path='dashboard/patients' />
          </form>

          <div className='flex justify-center items-center gap-2'>
            <p className='text-sm font-medium'>Powered by </p>
            <Image
              src='/assets/ccHub_logo.png'
              alt='Intro_logo'
              width={1000}
              height={1000}
              className='w-32 h-7'
            />
          </div>
        </div>
      </section>
      <section className='lg:w-[50%] h-screen hidden lg:flex justify-center items-center relative'>
        <Image
          src='/assets/signin_illustration.svg'
          alt='hero'
          width={800}
          height={800}
          className='w-full h-full object-cover'
        />
        <div className='lg:ml-24 w-[80%] absolute bottom-12'>
          <h2 className='text-lg font-bold text-white'>
            Serving Patients During a Pandemic
          </h2>
          <p className='text-sm font-medium text-white'>
            Delivering essential medication to NIMR patients with adherence to
            quality of service, care and confidentiality.
          </p>
        </div>
      </section>
    </main>
  );
}
