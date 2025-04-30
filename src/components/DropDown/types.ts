import { Option } from '@components/Select/types';

export interface DropdownProps {
  options: Option[];
  onItemClick?: (option: Option) => void;
  onCheckboxChange?: (id: number, checked: boolean) => void;
  menuClassName?: string;
  itemClassName?: string;
  variant?: 'normal' | 'small';
}