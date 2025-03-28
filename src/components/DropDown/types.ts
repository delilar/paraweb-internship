
type Option = {
  id: number;
  label: string;
  checked?: boolean;
  link?: string;
  socialType?: 'vk' | 'tg' | 'id' | 'whatsapp' | 'logo-guap-mono' | 'logo-guap-color';
};

export interface DropdownProps {
  title?: string;
  optionsData: Option[];
}