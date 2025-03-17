'use client';

import Link from 'next/link';
import { useState } from 'react';

const patientData = [
  {
    hospitalId: '1AFHFH093',
    name: 'Oluwaseun Aregbesola',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Completed'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Stella Omotoye',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Completed'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Chinyere Okafor',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Due & Paid'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Mohammed Danladi',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Due & Unpaid'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Michael Aribisala',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Assigned'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Donatus Emefiele',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Assigned'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Donatus Emefiele',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Completed'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Donatus Emefiele',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Due & Paid'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Donatus Emefiele',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Due & Unpaid'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Donatus Emefiele',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Paid'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Donatus Emefiele',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Paid'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Donatus Emefiele',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Paid'
  },
  {
    hospitalId: '1AFHFH093',
    name: 'Donatus Emefiele',
    phone: '+2347068642920',
    nextDelivery: '12th September 2020',
    location: 'VI, Lagos',
    status: 'Paid'
  }
];

const statusColors: Record<string, string> = {
  Completed: 'bg-green-100 text-green-700',
  Paid: 'bg-green-100 text-green-700',
  'Due & Paid': 'bg-orange-100 text-orange-700',
  'Due & Unpaid': 'bg-red-100 text-red-700',
  Assigned: 'bg-blue-100 text-blue-700'
};

const ITEMS_PER_PAGE = 10;

const RecentPatient = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(patientData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = patientData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className='w-full bg-white p-5 overflow-x-auto my-4'>
      <table className='min-w-full text-sm text-gray-700'>
        <thead>
          <tr className='text-left border-b border-gray-100 text-gray-500'>
            <th className='p-5 font-medium'>Hospital ID</th>
            <th className='p-5 font-medium'>Patient’s Name</th>
            <th className='p-5 font-medium'>Phone Number</th>
            <th className='p-5 font-medium'>Next Delivery Date</th>
            <th className='p-5 font-medium'>Location</th>
            <th className='p-5 font-medium'>Status</th>
            <th className='p-5 font-medium'></th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, idx) => (
            <tr key={idx} className='border-b border-gray-100 hover:bg-gray-50'>
              <td className='p-5'>{item.hospitalId}</td>
              <td className='p-5'>{item.name}</td>
              <td className='p-5'>{item.phone}</td>
              <td className='p-5'>{item.nextDelivery}</td>
              <td className='p-5'>{item.location}</td>
              <td className='p-5'>
                <span
                  className={`p-3 rounded-sm text-xs font-semibold ${
                    statusColors[item.status] || 'bg-gray-100 text-gray-600'
                  }`}
                >
                  {item.status}
                </span>
              </td>
              <td className='p-5'>
                <Link
                  href={`/patients/view-patient`}
                  className='border border-blue-500 text-blue-500 text-sm px-4 py-3 rounded hover:bg-blue-50 transition'
                >
                  View
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className='mt-4 flex items-center justify-between text-sm text-gray-600'>
        <span>
          You’re viewing {startIndex + 1} -{' '}
          {Math.min(startIndex + ITEMS_PER_PAGE, patientData.length)} out of{' '}
          {patientData.length} deliveries
        </span>

        <div className='flex items-center gap-2'>
          <button
            className='px-3 py-1 border rounded text-gray-600 disabled:opacity-50'
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-3 py-1 rounded border ${
                currentPage === i + 1
                  ? 'bg-gray-800 text-white border-gray-800'
                  : 'border-gray-300'
              }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            className='px-3 py-1 border rounded text-gray-600 disabled:opacity-50'
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentPatient;
