export interface BreadcrumbLink {
    label: string;
    href: string;
}

export interface BreadcrumbsProps {
    links?: BreadcrumbLink[];
}