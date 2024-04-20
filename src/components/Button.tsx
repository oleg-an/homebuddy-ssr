import classNames from 'classnames';
import React, { type MouseEventHandler } from 'react';

interface ButtonProps {
  disabled?: boolean;
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
}

export function Button({ className, disabled, loading, children, onClick }: ButtonProps) {
  return <button onClick={onClick} disabled={disabled || loading} className={classNames(
    'transition duration-200 h-14 bg-orange-500 text-white font-medium px-6 rounded-sm hover:bg-orange-600',
    'disabled:cursor-not-allowed disabled:pointer-events-none disabled:opacity-60',
    className)}>
    {children}
  </button>;
}
