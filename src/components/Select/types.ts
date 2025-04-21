import { ReactNode } from 'react';

export type BaseOption = {
  id: number;
  label: string;
};

export type CheckboxOption = BaseOption & {
  type: 'checkbox';
  checked?: boolean;
};

export type SocialOption = BaseOption & {
  type: 'social';
  link: string;
  socialType: 'vk' | 'tg' | 'id' | 'whatsapp' | 'logo-guap-mono' | 'logo-guap-color';
};

export type Option = CheckboxOption | SocialOption;

export type SelectVariant = 'normal' | 'small';

export interface SelectProps {
  variant: SelectVariant;
  options: Option[];
  disabled?: boolean;
  error?: boolean;
  label?: string;
  onChange?: (selectedOption: Option | undefined, selectedOptions: Option[]) => void;
  className?: string;
  prefixIcon?: ReactNode;
  iconComponent?: ReactNode;
} 