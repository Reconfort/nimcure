export const Screen = () => {
  return (
    <ul className='bg-black text-white fixed bottom-0 right-0 m-4 px-4 py-2 rounded-2xl'>
      <li className='hidden sm:hidden md:hidden lg:hidden xl:block'>X Large</li>
      <li className='hidden sm:hidden md:hidden lg:block xl:hidden'>Large</li>
      <li className='hidden sm:hidden md:block lg:hidden xl:hidden'>Medium</li>
      <li className='hidden sm:block md:hidden lg:hidden xl:hidden'>Small</li>
      <li className='block sm:hidden md:hidden lg:hidden xl:hidden'>X Small</li>
    </ul>
  );
};
