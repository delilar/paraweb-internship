import { FC, useRef, useState, useEffect } from "react";
import classNames from "classnames";
import BellIcon from "@images/icons/bell.svg";
import CompanyLogoIcon from "@images/company-placeholder-icon.svg";
import ImagePlaceholder from "@/components/ImagePlaceholder";
import MenuDropDown from "../MenuDropDown";
import MenuMobileProps from "./types";

const MenuMobile: FC<MenuMobileProps> = ({
  logo,
  user,
  menuListItems,
  websiteUrl
}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const menuRef = useRef<HTMLElement>(null);

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

  return (
    <header className="menu menu--mobile" ref={menuRef}>
      <figure className="menu__logo-wrapper">
        {logo ? <img src={logo} className="menu__logo" alt="Logo" /> : <CompanyLogoIcon />}
      </figure>
      <div className="menu__header-buttons-wrapper">
        <button className="menu__bell-icon" type="button">
          <BellIcon />
        </button>
        <button className="menu__image-wrapper" onClick={handleImageClick} type="button">
          {user.userImage ? 
            <img src={user.userImage} className="menu__user-image" alt="User profile" /> : 
            <ImagePlaceholder outerClassName="menu__user-image" />}
        </button>
      </div>
      
      <MenuDropDown
        isOpen={isDropdownOpen}
        onClose={handleCloseDropdown}
        logo={logo}
        user={user}
        menuListItems={menuListItems}
        websiteUrl={websiteUrl}
        profile="/profile"
        profileSettings="/settings"
        logout="/logout"
      />
    </header>
  );
};

export default MenuMobile;