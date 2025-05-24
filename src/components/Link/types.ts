import { ReactNode } from "react";

export interface LinkProps {
    type?: 'icon' | 'underlined' | 'social';
    socialType?: 'vk' | 'tg' | 'id' | 'whatsapp' | 'logo-guap-mono' | 'logo-guap-color';
    size?: 'normal' | 'bold';
    link?: string;
    children?: ReactNode;
    className?: string;
    onClick?: (e: React.MouseEvent) => void;
}