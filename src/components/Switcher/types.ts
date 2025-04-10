import { FC, SVGProps } from "react";

export interface SwitcherItem {
  id: string;
  icon: string | FC<SVGProps<SVGSVGElement>>;
}

export interface SwitcherProps {
  items: SwitcherItem[];
  defaultSelected?: string;
  onChange?: (selectedId: string) => void;
}