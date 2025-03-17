import { Button } from '@mui/material';
import Link from 'next/link';
import { JSX } from 'react';

interface BUTTONPROPS {
  className?: string;
  path?: string;
  title?: string;
  action?: () => void;
  icon?: JSX.Element;
}

export const CustomButton = ({
  title,
  path,
  action,
  icon,
  className = ''
}: BUTTONPROPS) => {
  const buttonClasses = `!bg-[#1F5AF4] !py-3 !capitalize !rounded-none !shadow-none w-full ${className}`;

  const renderButton = (
    <Button
      className={buttonClasses}
      variant='contained'
      onClick={path ? undefined : action}
      startIcon={icon}
    >
      {title}
    </Button>
  );

  return path ? <Link href={path}>{renderButton}</Link> : renderButton;
};
