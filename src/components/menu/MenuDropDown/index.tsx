import MenuDropDownProps from "./types";
import "@style/components/menu/MenuDropDown.scss";
import { FC, useEffect } from "react";

import RaitingIcon from "@images/icons/color-raiting.svg";
import CoinIcon from "@images/coin-icon.svg";
import DoorExitIcon from "@images/icons/door-exit.svg"

import MenuButton from "@components/menu/MenuButton";
import ImagePlaceholder from "@/components/ImagePlaceholder";

import classNames from "classnames";
import { CSSTransition } from "react-transition-group";

const MenuDropDown: FC<MenuDropDownProps> = ({
  isOpen,
  onClose,
  logo,
  userImage,
  userName,
  userStatus,
  raiting,
  coins,
  menuListItems,
  website,
  profile,
  profileSettings,
  logout
}) => {  

  const dropDownClassname = classNames("menu-dropdown", { "menu-dropdown--visible": isOpen });

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen, onClose]);
  

  return (
    <CSSTransition
      in={isOpen}
      timeout={300}
      classNames="menu-dropdown"
      unmountOnExit
    >
      <section className={dropDownClassname}>
          <header className="menu-dropdown__user-info-wrapper">
              {userImage ? <img src={userImage} className="menu-dropdown__user-image" alt="User profile" /> : <ImagePlaceholder outerClassName="menu-dropdown__user-image" />}
              <article className="menu-dropdown__user-info">
                <h3 className="menu-dropdown__user-name">{userName}</h3>
                <div className="menu-dropdown__user-stats">
                  <p className="menu-dropdown__user-status">{userStatus}</p>
                  <figure className="menu-dropdown__user-raiting-tag">
                      <RaitingIcon />
                      <span className="menu-dropdown__user-raiting">{raiting}</span>
                  </figure>
                  <figure className="menu-dropdown__user-coin-tag">
                      <CoinIcon />
                      <span className="menu-dropdown__user-coin">{coins}</span>
                  </figure>
                </div>
              </article>
          </header>

          <nav className="menu__menu-list">
              {menuListItems.map((item) => (
                  <MenuButton 
                    key={item.id} 
                    {...item.menuButton}
                  />
              ))}
          </nav>

          <nav className="menu-dropdown__links">
              {profile && <a href={profile} className="menu-dropdown_profile-link">Профиль</a>}
              {profileSettings && <a href={profileSettings} className="menu-dropdown_profile-settings-link">Настройки профиля</a>}
              {website && (<a href={website} className="menu-dropdown__external-link">Сайт</a>)}
          </nav>

          <footer className="menu-dropdown__logout">
              <DoorExitIcon />
              <a href={logout} className="menu-dropdown__logout-button">Выйти</a>
          </footer>
      </section>
    </CSSTransition>
  );
};

export default MenuDropDown;