const dispatchers = [
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  },
  {
    name: 'Emmanuel Adebayo',
    area: 'Yaba',
    deliveries: 20
  }
];

const DispatchRider = () => {
  return (
    <section className='py-8 px-4 lg:px-8 flex flex-col justify-start gap-4 lg:gap-8 border-b border-[#827f9833]'>
      <div className='flex flex-wrap gap-2 items-center'>
        <button className='px-4 py-2 border bg-[#1F5AF4]/10 border-[#1F5AF4] text-sm tracking-wider text-[#1F5AF4] font-semibold hover:scale-95 active:scale-105'>
          All(33)
        </button>
        <button className='px-4 py-2 bg-[#827F98]/10 text-sm tracking-wider text-[#827F98] font-semibold hover:bg-[#1F5AF4]/10 cursor-pointer hover:scale-95 active:scale-105'>
          Yaba Riders (5)
        </button>
        <button className='px-4 py-2 bg-[#827F98]/10 text-sm tracking-wider text-[#827F98] font-semibold hover:bg-[#1F5AF4]/10 cursor-pointer hover:scale-95 active:scale-105'>
          Unassigned Riders (10)
        </button>
        <button className='px-4 py-2 bg-[#827F98]/10 text-sm tracking-wider text-[#827F98] font-semibold hover:bg-[#1F5AF4]/10 cursor-pointer hover:scale-95 active:scale-105'>
          Assigned Riders (23)
        </button>
      </div>

      <div className='w-full p-4 h-[55vh] overflow-y-auto scrollbar-hide space-y-3'>
        {dispatchers.map((dispatcher, index) => (
          <div
            key={index}
            className='flex items-start justify-between border border-gray-200 hover:border-[#1F5AF4] cursor-pointer rounded-md p-4'
          >
            <div className='flex items-start gap-4'>
              <div className='w-5 h-5 rounded-full border-2 border-gray-400 mt-1'></div>
              <div>
                <p className='text-sm text-gray-500 font-medium mb-1'>
                  Dispatch Rider's Name
                </p>
                <p className='text-lg font-semibold text-gray-900'>
                  {dispatcher.name}
                </p>
              </div>
            </div>

            <div className='text-left'>
              <p className='text-sm text-gray-500 font-medium mb-1'>
                Delivery Area
              </p>
              <p className='text-lg font-semibold text-gray-900'>
                {dispatcher.area}
              </p>
            </div>

            <div className='text-left'>
              <p className='text-sm text-gray-500 font-medium mb-1'>
                Number of Deliveries
              </p>
              <p className='text-lg font-semibold text-gray-900'>
                {dispatcher.deliveries} Deliveries
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DispatchRider;
