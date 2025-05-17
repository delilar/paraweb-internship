import MenuProps from "./types";
import "@style/components/menu/Menu.scss";
import { FC } from "react";
import { useMediaQuery } from "react-responsive";
import MenuMobile from "../MenuMobile";
import MenuDesktop from "../MenuDesktop";

const Menu: FC<MenuProps> = ({
  logo,
  user,
  menuListItems,
  websiteUrl,
  notifications
}) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  
  return isMobile ? (
    <MenuMobile
      logo={logo}
      user={user}
      menuListItems={menuListItems}
      websiteUrl={websiteUrl}
    />
  ) : (
    <MenuDesktop
      logo={logo}
      user={user}
      menuListItems={menuListItems}
      websiteUrl={websiteUrl}
    />
  );  
}

export default Menu;