export interface ArrowButtonProps {
    variant?: 'default' | 'filled';
    disabled?: boolean;
    isMobile?: boolean;
    onClick?: () => void;
    className?: string;
    children?: React.ReactNode;
  }
  