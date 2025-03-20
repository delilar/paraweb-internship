export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'filled' | 'outlined' | 'text';
  disabled?: boolean;
  icon?: boolean;
  isMobile?: boolean;
  onContrastBackground?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}