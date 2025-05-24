import MenuButtonType from "./types";
import { FC } from "react";
import "@style/components/menu/MenuButton.scss";

const MenuButton: FC<MenuButtonType> = ({ title, icon: Icon, link, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <article className="menu__menu-button">
      <a href={link} className="menu__menu-link" onClick={handleClick}>
        <Icon />
        <span className="menu__menu-title">{title}</span>
      </a>
    </article>
  );
};

export default MenuButton;