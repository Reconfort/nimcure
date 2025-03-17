'use client';
import Link from 'next/link';
import { LuSlash } from 'react-icons/lu';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const BreadCrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path !== '');

  // index of dashboard
  const dashboardIndex = pathnames.indexOf('dashboard');

  // next segment after dashboard
  const dynamicIndex = dashboardIndex + 1; // dynamic route (e.g., dispatch, patients, etc.)

  // dynamic part of URL
  const dynamicPart = pathnames[dynamicIndex];

  // Slice path from dynamic part
  const filteredPathnames = pathnames.slice(dynamicIndex); // Everything after dashboard

  const generateLink = (index: number) =>
    `/${filteredPathnames.slice(0, index + 1).join('/')}`;

  return (
    <section className='breadcrumb'>
      <ul className='flex items-center justify-start gap-1'>
        {filteredPathnames.map((path, index) => (
          <Fragment key={index}>
            <Link href={generateLink(index)}>
              {path.charAt(0).toUpperCase() + path.slice(1)}{' '}
            </Link>
            {index < filteredPathnames.length - 1 && (
              <LuSlash className='-rotate-16' />
            )}
          </Fragment>
        ))}
      </ul>
    </section>
  );
};

export default BreadCrumb;
