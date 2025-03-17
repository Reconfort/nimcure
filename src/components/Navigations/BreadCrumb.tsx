'use client';
import Link from 'next/link';
import { LuSlash } from 'react-icons/lu';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';

const BreadCrumb = () => {
  const pathname = usePathname();
  const pathnames = pathname.split('/').filter((path) => path !== '');

  // Remove 'dashboard' from the path
  const filteredPathnames = pathnames.filter(
    (path) => path.toLowerCase() !== 'dashboard'
  );

  // Generate link for each breadcrumb item
  const generateLink = (index: number) =>
    `/${filteredPathnames.slice(0, index + 1).join('/')}`;

  return (
    <section className='breadcrumb'>
      <ul className='flex items-center justify-start gap-1'>
        {filteredPathnames.map((path, index) => {
          const isLast = index === filteredPathnames.length - 1;

          return (
            <Fragment key={index}>
              {!isLast ? (
                <Link href={generateLink(index)} className='text-gray-700'>
                  {path
                    .replace(/-/g, ' ')
                    .replace(/^./, (str) => str.toUpperCase())}
                </Link>
              ) : (
                <span className='text-[#276DF7] text-xl'>
                  {path
                    .replace(/-/g, ' ')
                    .replace(/^./, (str) => str.toUpperCase())}
                </span>
              )}
              {index < filteredPathnames.length - 1 && (
                <LuSlash className='-rotate-16' />
              )}
            </Fragment>
          );
        })}
      </ul>
    </section>
  );
};

export default BreadCrumb;
