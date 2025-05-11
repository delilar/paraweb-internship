import MenuProps from "./types";
import "@style/components/menu/Menu.scss";
import { FC, useEffect, useRef, useState } from "react";

import CoinIcon from "@images/coin-icon.svg";
import RaitingIcon from "@images/icons/color-raiting.svg";
import ArrowRightIcon from "@images/icons/arrow-right.svg";
import BellIcon from "@images/icons/bell.svg";
import CompanyLogoIcon from "@images/company-placeholder-icon.svg";

import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

import MenuButton from "../MenuButton";
import MenuDropDown from "../MenuDropDown";
import ImagePlaceholder from "@/components/ImagePlaceholder";

const Menu: FC<MenuProps> = ({
  logo,
  userImage,
  userName,
  userStatus,
  raiting,
  coins,
  menuListItems,
  notifications,
  website
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

  const menuClassName = classNames("menu", {
    "menu--desktop": !isMobile,
    "menu--mobile": isMobile,
  });

  const handleImageClick = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleCloseDropdown = () => {
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen]);
  
  return isMobile ? (
    <header className={menuClassName} ref={menuRef}>
      <figure className="menu__logo-wrapper">
        {logo ? <img src={logo} className="menu__logo" alt="Logo" /> : <CompanyLogoIcon />}
      </figure>
      <div className="menu__header-buttons-wrapper">
        <button className="menu__bell-icon" type="button">
          <BellIcon />
        </button>
        <button className="menu__image-wrapper" onClick={handleImageClick} type="button">
          {userImage ? <img src={userImage} className="menu__user-image" alt="User profile" /> : <ImagePlaceholder outerClassName="menu__user-image" />}
        </button>
      </div>
      
      {isDropdownOpen && (
        <MenuDropDown
          isOpen={isDropdownOpen}
          onClose={handleCloseDropdown}
          logo={logo}
          userImage={userImage}
          userName={userName}
          userStatus={userStatus}
          raiting={raiting}
          coins={coins}
          menuListItems={menuListItems}
          website={website}
          profile="/profile"
          profileSettings="/settings"
          logout="/logout"
        />
      )}
    </header>
  ) : (
    <header className={menuClassName}>
        <figure className="menu__logo-wrapper">
            {logo ? <img src={logo} className="menu__logo" alt="Logo" /> : <CompanyLogoIcon />}
        </figure>

        <section className="menu__user-info">
          {userImage ? <img src={userImage} className="menu__user-image" alt="User profile" /> : <ImagePlaceholder outerClassName="menu__user-image" />}
          <div className="menu__user-text-info">
            <h3 className="menu__user-name">{userName}</h3>
            <p className="menu__user-status">{userStatus}</p>
          </div>
          <footer className="menu__user-stats">
              <figure className="menu__user-raiting-tag">
                  <RaitingIcon />
                  <span className="menu__user-raiting">{raiting}</span>
              </figure>
              <figure className="menu__user-coin-tag">
                  <CoinIcon />
                  <span className="menu__user-coin">{coins}</span>
              </figure>
          </footer>
        </section>

        <nav className="menu__menu-list">
            <div className="menu__menu-list-buttons">
              {menuListItems.map((item) => (
                  <MenuButton key={item.id} {...item.menuButton} />
              ))}
            </div>
            {website && (
                <a href={website} className="menu__external-link">
                    <span>Сайт</span>
                    <ArrowRightIcon />
                </a>
            )}
        </nav>
    </header>
  );  
}

export default Menu;