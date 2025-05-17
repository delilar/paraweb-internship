import { FC } from "react";
import { Outlet } from "react-router";
import { MenuListItem } from "@components/menu/Menu/types";
import { useMediaQuery } from "react-responsive";
import { User } from "@/types/User";

import Menu from "@components/menu/Menu";
import HeaderMenu from "@/components/header/HeaderMenu";
import Breadcrumbs from "@/components/header/Breadcrumbs";

import "@style/layouts/PrivateLayout.scss";

import LayoutIcon from "@images/icons/layout-grid.svg";

const PrivateLayout: FC = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const menuItems: MenuListItem[] = [
        {
            id: 1,
            menuButton: {
                title: "Главная",
                icon: LayoutIcon,
                link: "/dashboard"
            }
        },
        {
            id: 2,
            menuButton: {
                title: "Сообщества",
                icon: LayoutIcon,
                link: "/communities"
            }
        },
        {
            id: 3,
            menuButton: {
                title: "Портфолио",
                icon: LayoutIcon,
                link: "/portfolio"
            }
        },
        {
            id: 4,
            menuButton: {
                title: "Рейтинг",
                icon: LayoutIcon,
                link: "/rating"
            }
        }
    ];

    const userData: User = {
        userName: "Екатерина Константинопольская",
        userStatus: "Студент",
        raiting: 9999,
        coins: 9999
    };

    return (
        <div className="private-layout">
            {isMobile ? (
                <>
                    <header className="private-layout__header">
                        <Menu
                            user={userData}
                            menuListItems={menuItems}
                            website="#"
                        />
                    </header>
                    <main className="private-layout__main">
                        <Breadcrumbs />
                        <Outlet />
                    </main>
                </>
            ) : (
                <>
                    <aside className="private-layout__sidebar">
                        <Menu
                            user={userData}
                            menuListItems={menuItems}
                            website="#"
                        />
                    </aside>
                    <main className="private-layout__main">
                        <HeaderMenu />
                        <Outlet />
                    </main>
                </>
            )}
        </div>
    );
};

export default PrivateLayout;