export interface PaginationProps {
    totalItems: number;
    itemsPerPage: number;
    page: number;
    onChange?: (event: React.MouseEvent<HTMLButtonElement>, page: number) => void;
  }
  