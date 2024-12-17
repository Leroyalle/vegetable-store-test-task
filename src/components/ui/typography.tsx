import clsx from 'clsx';
import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<Props> = ({ children, className }) => {
  return <div className={clsx('font-medium text-sm', className)}>{children}</div>;
};