export interface ListItem {
    id: string | number;
    text: string;
    children?: ListItem[];
}

export interface BulletListProps {
    items: ListItem[];
    className?: string;
}