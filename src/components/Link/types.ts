import { ReactNode } from "react";

export interface LinkProps {
    type?: 'icon' | 'underlined' | 'social';
    socialType?: 'vk' | 'tg' | 'id' | 'whatsapp' | 'logo-guap-mono' | 'logo-guap-color';
    size?: 'normal' | 'bold';
    children?: ReactNode;
}