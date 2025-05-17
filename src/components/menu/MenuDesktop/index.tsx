import { FC } from "react";
import CoinIcon from "@images/coin-icon.svg";
import RaitingIcon from "@images/icons/color-raiting.svg";
import ArrowRightIcon from "@images/icons/arrow-right.svg";
import CompanyLogoIcon from "@images/company-placeholder-icon.svg";
import MenuButton from "../MenuButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MenuDesktopProps from "./types";

const MenuDesktop: FC<MenuDesktopProps> = ({
  logo,
  user,
  menuListItems,
  websiteUrl
}) => {
  return (
    <header className="menu menu--desktop">
      <figure className="menu__logo-wrapper">
        {logo ? <img src={logo} className="menu__logo" alt="Logo" /> : <CompanyLogoIcon />}
      </figure>

      <section className="menu__user-info">
        {user.userImage ? 
          <img src={user.userImage} className="menu__user-image" alt="User profile" /> : 
          <ImagePlaceholder outerClassName="menu__user-image" />}
        <div className="menu__user-text-info">
          <h3 className="menu__user-name">{user.userName}</h3>
          <p className="menu__user-status">{user.userStatus}</p>
        </div>
        <footer className="menu__user-stats">
          <figure className="menu__user-raiting-tag">
            <RaitingIcon />
            <span className="menu__user-raiting">{user.raiting}</span>
          </figure>
          <figure className="menu__user-coin-tag">
            <CoinIcon />
            <span className="menu__user-coin">{user.coins}</span>
          </figure>
        </footer>
      </section>

      <nav className="menu__menu-list">
        <div className="menu__menu-list-buttons">
          {menuListItems.map((item) => (
            <MenuButton key={item.id} {...item.menuButton} />
          ))}
        </div>
        {websiteUrl && (
          <a href={websiteUrl} className="menu__external-link">
            <span>Сайт</span>
            <ArrowRightIcon />
          </a>
        )}
      </nav>
    </header>
  );
};

export default MenuDesktop;