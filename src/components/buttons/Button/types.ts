import { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
  variant?: 'filled' | 'outlined' | 'text' | 'text-lower';
  disabled?: boolean;
  onContrastBackground?: boolean;
  onClick?: () => void;
  className?: string;
  iconLeft?: string;
  iconRight?: string;
}
