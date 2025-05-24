import { ReactNode } from "react";

export interface IconButtonProps {
  variant?: 'filled' | 'outlined' | 'hovered' | 'contrast-hovered' | 'contrast-filled';
  disabled?: boolean;
  isChecked?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  className?: string;
  icon?: ReactNode;
}