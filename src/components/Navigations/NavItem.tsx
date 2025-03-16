import Link from 'next/link';

interface NavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  clasName?: string;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  icon,
  label,
  isActive,
  clasName = ''
}) => {
  const activeState = isActive
    ? 'font-medium text-[#1F5AF4] border-[#1F5AF4]'
    : 'text-[#827F98] border-transparent';

  return (
    <Link
      href={href}
      className={`center gap-2 p-4 cursor-pointer font-medium duration-75 border-b-3 ${clasName} ${activeState}`}
    >
      {icon}
      <p>{label}</p>
    </Link>
  );
};

export default NavItem;
