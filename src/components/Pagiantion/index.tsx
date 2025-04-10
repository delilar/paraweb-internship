import { FC, MouseEvent } from "react";
import classNames from "classnames";
import { PaginationProps } from "./types";
import "@style/components/Pagination/Pagination.scss";
import ChevronLeftIcon from "@images/icons/chevron-left.svg";
import ChevronRightIcon from "@images/icons/chevron-right.svg";

const Pagination: FC<PaginationProps> = ({ totalItems, itemsPerPage, page, onChange }) => {
  const pageCount = Math.ceil(totalItems / itemsPerPage);

  const handleChange = (event: MouseEvent<HTMLButtonElement>, newPage: number) => {
    if (newPage >= 1 && newPage <= pageCount && newPage !== page) {
      onChange?.(event, newPage);
    }
  };

  const generatePages = (): (number | "ellipsis")[] => {
    if (pageCount <= 7) {
      return Array.from({ length: pageCount }, (_, i) => i + 1);
    }

    const pages: (number | "ellipsis")[] = [];
    pages.push(1);

    if (page > 3) {
      pages.push("ellipsis");
    }

    const start = Math.max(2, page - 1);
    const end = Math.min(pageCount - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (page < pageCount - 2) {
      pages.push("ellipsis");
    }

    pages.push(pageCount);

    return pages;
  };

  const pages = generatePages();

  const renderPageButton = (pageNumber: number) => (
    <button
      key={`page-${pageNumber}`}
      className={classNames("pagination__item", {
        "pagination__item--selected": page === pageNumber,
      })}
      onClick={(e) => handleChange(e, pageNumber)}
      aria-current={page === pageNumber ? "true" : undefined}
    >
      {pageNumber}
    </button>
  );

  const isFirstPage = page <= 1;
  const isLastPage = page >= pageCount;

  return (
    <nav className="pagination" role="navigation">
      <button
        className={classNames("pagination__item", "pagination__item--button", {
          "pagination__item--disabled": isFirstPage
        })}
        onClick={(e) => handleChange(e, page - 1)}
        disabled={isFirstPage}
      >
        <ChevronLeftIcon />
      </button>

      {pages.map((item, index) =>
        item === "ellipsis" ? (
          <div key={`ellipsis-${index}`} className="pagination__ellipsis">
            <span>...</span>
          </div>
        ) : (
          renderPageButton(item as number)
        )
      )}

      <button
        className={classNames("pagination__item", "pagination__item--button", {
          "pagination__item--disabled": isLastPage
        })}
        onClick={(e) => handleChange(e, page + 1)}
        disabled={isLastPage}
      >
        <ChevronRightIcon />
      </button>
    </nav>
  );
};

export default Pagination;