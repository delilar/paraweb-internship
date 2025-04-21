import { ReactNode } from 'react';

export type TextFieldType = 
  | 'text' 
  | 'password' 
  | 'email' 
  | 'number' 
  | 'tel' 
  | 'tel-ru' 
  | 'date';

export interface MaskObject {
  mask: 
    | string 
    | RegExp 
    | Date 
    | number 
    | ((value: string) => unknown)
    | MaskObject[]
    | { [key: string]: unknown; mask: string }[];
  [key: string]: unknown;
}

export type MaskOptions = MaskObject;

export interface TextFieldProps {
  value?: string;
  disabled?: boolean;
  error?: boolean;
  label?: string;
  onChange?: (value: string) => void;
  className?: string;
  prefixIcon?: ReactNode;
  endIcon?: ReactNode;
  placeholder?: string;
  type?: TextFieldType;
  mask?: MaskOptions;
  unmask?: boolean;
} 