export interface PaginationProps {
    count: number;
    page?: number;
    onChange?: (event: React.ChangeEvent<unknown>, page: number) => void;
    disabled?: boolean;
}