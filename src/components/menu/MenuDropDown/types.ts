import { BaseMenuProps } from "../Menu/types";

export default interface MenuDropDownProps extends BaseMenuProps {
    isOpen: boolean;
    onClose: () => void;
    profile: string;
    profileSettings: string;
    logout: string;
}