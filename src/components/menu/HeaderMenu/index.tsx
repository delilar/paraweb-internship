import { FC } from "react";
import { HeaderMenusProps } from "./types";

import ImagePlaceholder from "@/components/ImagePlaceholder";
import BellIcon from "@images/icons/bell.svg";

import "@style/components/menu/HeaderMenu.scss";
import Breadcrumbs from "../Breadcrumbs";

const HeaderMenu: FC<HeaderMenusProps> = ({ links, userImage }) => {
  return (
    <div className="header-menu">
      <Breadcrumbs links={links} />
      <div className={"header-menu__bell-icon"}>
        <BellIcon />
      </div>
      <div className="header-menu__image-wrapper">
        {userImage ? <img src={userImage} /> : <ImagePlaceholder />}
      </div>
    </div>
  );
};

export default HeaderMenu;