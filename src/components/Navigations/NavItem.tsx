import Link from 'next/link';

interface NavItemProps {
  href?: string;
  action?: () => void;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  action,
  icon,
  label,
  isActive,
  className = ''
}) => {
  const activeState = isActive
    ? 'font-medium text-[#1F5AF4] border-[#1F5AF4]'
    : 'text-[#827F98] border-transparent';

  return (
    <>
      {href ? (
        <Link
          href={href}
          className={`flex items-center gap-2 p-4 cursor-pointer font-medium duration-75 border-b-3 ${className} ${activeState}`}
        >
          {icon}
          <p>{label}</p>
        </Link>
      ) : (
        <button
          onClick={action}
          className={`flex items-center gap-2 p-4 cursor-pointer font-medium duration-75 border-b-3 ${className} ${activeState}`}
        >
          {icon}
          <p>{label}</p>
        </button>
      )}
    </>
  );
};

export default NavItem;
