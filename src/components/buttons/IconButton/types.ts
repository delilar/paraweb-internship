import { ReactNode } from "react";

export interface IconButtonProps {
  variant?: 'filled' | 'outlined' | 'hovered' | 'contrast-hovered' | 'contrast-filled';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode;
}