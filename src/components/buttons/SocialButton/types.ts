import { ReactNode } from "react";

export interface SocialButtonProps {
    onClick?: () => void;
    className?: string;
    icon: ReactNode;
    children?: ReactNode;
  }
  