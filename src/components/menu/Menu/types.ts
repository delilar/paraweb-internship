import MenuButtonType from "@components/menu/MenuButton/types";
import { User } from "@/types/User";

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
    user: User;
    menuListItems: MenuListItem[];
    websiteUrl?: string;
}

export default interface MenuProps extends BaseMenuProps {
    notifications?: Notification[];
}