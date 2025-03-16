import { Button } from '@mui/material';
import Link from 'next/link';

interface BUTTONPROPS {
  className?: string;
  path?: string;
  action?: () => void;
}

export const CustomButton = ({ path, action, className = '' }: BUTTONPROPS) => {
  const buttonClasses = `!bg-[#1F5AF4] !py-3 !capitalize !rounded-none !shadow-none w-full ${className}`;

  const renderButton = (
    <Button
      className={buttonClasses}
      variant='contained'
      onClick={path ? undefined : action}
    >
      Login
    </Button>
  );

  return path ? <Link href={path}>{renderButton}</Link> : renderButton;
};
