import clsx from 'clsx';
import React from 'react';

type ButtonColor = 'transparent' | 'light' | 'primary' | 'secondary';
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColor;
  className?: string;
}

export const Button: React.FC<Props> = ({ children, color = 'light', className, ...props }) => {
  const mapColors = {
    transparent: 'text-[#fff] bg-transparent border-1 border-solid border-light/40',
    light: 'bg-light text-secondary',
    primary: 'bg-primary text-light',
    secondary: 'bg-secondary text-light',
  } as const;

  return React.createElement(
    'button',
    { className: clsx(mapColors[color], className), ...props },
    children,
  );
};
