import MenuButtonType from "@components/menu/MenuButton/types";

interface Notification {
    id: number;
    title: string;
    description: string;
}

export interface MenuListItem {
    id: number;
    menuButton: MenuButtonType;
}

export interface BaseMenuProps {
    logo?: string;
    userImage?: string;
    userName: string;
    userStatus: string;
    raiting: number;
    coins: number;
    menuListItems: MenuListItem[];
    website?: string;
}

export default interface MenuProps extends BaseMenuProps {
    notifications?: Notification[];
}