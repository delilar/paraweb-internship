import { FC, useState } from "react";
import { Outlet, Navigate } from "react-router";
import { MenuListItem } from "@components/menu/Menu/types";
import { BreadcrumbLink } from "@/components/header/Breadcrumbs/types";
import { useMediaQuery } from "react-responsive";

import Menu from "@components/menu/Menu";
import HeaderMenu from "@/components/header/HeaderMenu";

import "@style/layouts/PrivateLayout.scss";

import LayoutIcon from "@images/icons/layout-grid.svg";
import Breadcrumbs from "@/components/header/Breadcrumbs";

const PrivateLayout: FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const isMobile = useMediaQuery({ maxWidth: 767 });

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    const breadcrumbsData: BreadcrumbLink[] = [
        {
            label: "Первый пункт",
            href: "https://www.google.com/"
        }, 
        {
            label: "Второй пункт",
            href: "https://www.google.com/",
            disabled: true
        }
    ]

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

    const userData = {
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
                            {...userData}
                            menuListItems={menuItems}
                            website="#"
                        />
                    </header>
                    <main className="private-layout__main">
                        <Breadcrumbs links={breadcrumbsData} />
                        <Outlet />
                    </main>
                </>
            ) : (
                <>
                    <aside className="private-layout__sidebar">
                        <Menu
                            {...userData}
                            menuListItems={menuItems}
                            website="#"
                        />
                    </aside>
                    <main className="private-layout__main">
                        <HeaderMenu links={breadcrumbsData} />
                        <Outlet />
                    </main>
                </>
            )}
        </div>
    );
};

export default PrivateLayout;