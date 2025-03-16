import { JSX } from 'react';

export type NavItemType = {
  href: string;
  icon: JSX.Element; // React element type for the icons
  label: string;
};

export type HamburgerProps = {
  NAV_ITEMS: NavItemType[];
  pathname: string;
};
