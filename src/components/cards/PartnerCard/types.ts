export interface SocialLinkProps {
    type?: 'vk' | 'tg' | 'id' | 'whatsapp' | 'logo-guap-mono' | 'logo-guap-color';
    link?: string;
}

export interface PartnerCardProps {
    imageUrl?: string;
    title?: string;
    link?: string;
    linkText?: string;
    contactPerson?: string;
    phone?: string;
    email?: string;
    socialLinks?: SocialLinkProps[];
}