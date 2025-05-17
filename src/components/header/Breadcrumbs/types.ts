export interface BreadcrumbLink {
    label: string;
    href?: string;
    disabled?: boolean;
}

export interface BreadcrumbsProps {
    links?: BreadcrumbLink[];
}