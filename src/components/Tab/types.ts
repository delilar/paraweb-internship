export interface TabProps {
  count: number;
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}