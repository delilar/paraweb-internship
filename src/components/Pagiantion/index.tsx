import { FC, useState, useEffect, MouseEvent } from "react";
import { PaginationProps } from "./types";
import "@style/components/Pagination/Pagination.scss";
import ChevronLeftIcon from "@images/icons/chevron-left.svg";
import ChevronRightIcon from "@images/icons/chevron-right.svg";

const Pagination: FC<PaginationProps> = ({ count, page: externalPage, onChange, disabled = false }) => {
  const [page, setPage] = useState(externalPage || 1);

  useEffect(() => {
    if (externalPage && externalPage !== page) {
      setPage(externalPage);
    }
  }, [page, externalPage]);

  const handleChange = (event: MouseEvent<HTMLButtonElement>, newPage: number) => {
    if (!disabled && newPage >= 1 && newPage <= count) {
      setPage(newPage);
      onChange?.(event, newPage);
    }
  };

  const generatePages = (): (number | 'ellipsis')[] => {
    if (count <= 3) {
      return Array.from({ length: count }, (_, i) => i + 1);
    }

    const result: (number | 'ellipsis')[] = [];

    if (page <= 2) {
      result.push(1, 2, 3, 'ellipsis', count);
    } else if (page >= count - 1) {
      result.push(1, 'ellipsis', count - 2, count - 1, count);
    } else {
      result.push(1, 'ellipsis', page - 1, page, page + 1, 'ellipsis', count);
    }

    return result;
  };

  const pages = generatePages();

  const renderPageButton = (pageNumber: number) => (
    <button
      key={`page-${pageNumber}`}
      className={`pagination__item ${!disabled && page === pageNumber ? 'pagination__item--selected' : ''} ${disabled ? 'pagination__item--disabled' : ''}`}
      onClick={(e) => handleChange(e, pageNumber)}
      disabled={disabled}
      aria-current={!disabled && page === pageNumber ? 'true' : undefined}
    >
      {pageNumber}
    </button>
  );

  return (
    <nav className={`pagination ${disabled ? 'pagination--disabled' : ''}`} role="navigation">
      {page > 1 && (
        <button
          className={`pagination__item pagination__item--button ${disabled ? 'pagination__item--disabled' : ''}`}
          onClick={(e) => handleChange(e, page - 1)}
          disabled={disabled}
        >
          <ChevronLeftIcon />
        </button>
      )}

      {pages.map((item, index) => (
        item === 'ellipsis' ? (
          <div key={index} className={`pagination__ellipsis ${disabled ? 'pagination__ellipsis--disabled' : ''}`}>
            <span>...</span>
          </div>
        ) : (
          renderPageButton(item as number)
        )
      ))}

      {page < count && (
        <button
          className={`pagination__item pagination__item--button ${disabled ? 'pagination__item--disabled' : ''}`}
          onClick={(e) => handleChange(e, page + 1)}
          disabled={disabled}
        >
          <ChevronRightIcon />
        </button>
      )}
    </nav>
  );
};

export default Pagination;