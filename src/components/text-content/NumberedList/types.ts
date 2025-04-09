export interface NumberedListItem {
    id: number | string
    text: string;
}

export interface NumberedListProps {
    items: NumberedListItem[];
    className?: string;
}