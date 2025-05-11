type MenuButtonType = {
  title: string;
  icon: string;
  link?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
};

export default MenuButtonType;