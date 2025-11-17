import Pagination from "../ui/Pagination";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface TablePaginationProps {
  currentPage?: number;
  totalPages: number;
  pageSize?: number;
  setPageSize?: (pageSize: number) => void;
  setCurrentPage?: (page: number) => void;
  prevPage?: () => void;
  nextPage?: () => void;
  defaultPageSize?: number;
}

const buttonClass =
  "flex items-center p-2 w-10 h-8 rounded-sm border border-[#e4e5ef] outline-none text-[#B5B5C3] [&:not([disabled])]:hover:text-primary-100 [&:not([disabled])]:focus-visible:text-primary-100 [&:not([disabled])]:hover:border-primary-100 [&:not([disabled])]:focus-visible:border-primary-100 disabled:opacity-50 disabled:cursor-not-allowed";

export default function TablePagination({
  currentPage: propCurrentPage,
  totalPages,
  pageSize: propPageSize,
  setCurrentPage,
  setPageSize,
  prevPage,
  nextPage,
  defaultPageSize = 10,
}: TablePaginationProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const useUrlParams =
    !setCurrentPage || !setPageSize || !prevPage || !nextPage;

  const pageFromUrl = Number(searchParams.get("page")) || 1;
  const pageSizeFromUrl =
    Number(searchParams.get("pageSize")) || defaultPageSize;

  const [internalPage, setInternalPage] = useState(
    propCurrentPage || pageFromUrl
  );
  const [internalPageSize, setInternalPageSize] = useState(
    propPageSize || pageSizeFromUrl
  );

  const currentPageValue =
    propCurrentPage !== undefined ? propCurrentPage : internalPage;
  const pageSizeValue =
    propPageSize !== undefined ? propPageSize : internalPageSize;

  useEffect(() => {
    if (propCurrentPage !== undefined) {
      setInternalPage(propCurrentPage);
    } else if (useUrlParams) {
      setInternalPage(pageFromUrl);
    }

    if (propPageSize !== undefined) {
      setInternalPageSize(propPageSize);
    } else if (useUrlParams) {
      setInternalPageSize(pageSizeFromUrl);
    }
  }, [
    propCurrentPage,
    propPageSize,
    pageFromUrl,
    pageSizeFromUrl,
    useUrlParams,
  ]);

  const updateUrlParams = (params: Record<string, string>) => {
    const newParams = new URLSearchParams(searchParams);

    Object.entries(params).forEach(([key, value]) => {
      if (value) {
        newParams.set(key, value);
      } else {
        newParams.delete(key);
      }
    });

    setSearchParams(newParams);
  };

  const handlePageChange = (page: number) => {
    if (setCurrentPage) {
      setCurrentPage(page);
    } else {
      setInternalPage(page);
      updateUrlParams({ page: page.toString() });
    }
  };

  const handlePageSizeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newSize = parseInt(event.target.value, 10);

    if (setPageSize) {
      setPageSize(newSize);
      if (setCurrentPage) {
        setCurrentPage(1);
      }
    } else {
      setInternalPageSize(newSize);
      setInternalPage(1);
      updateUrlParams({
        pageSize: newSize.toString(),
        page: "1",
      });
    }
  };

  const handlePrevPage = () => {
    if (prevPage) {
      prevPage();
    } else if (currentPageValue > 1) {
      handlePageChange(currentPageValue - 1);
    }
  };

  const handleNextPage = () => {
    if (nextPage) {
      nextPage();
    } else if (currentPageValue < totalPages) {
      handlePageChange(currentPageValue + 1);
    }
  };

  return (
    <div className="p-4 mt-2 flex justify-center md:justify-between items-center">
      <div>
        {totalPages > 0 && (
          <div className="hidden md:flex items-center gap-4 text-[#7d8299] text-sm font-semibold">
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                <span className="mr-2">Items per page:</span>
                <select
                  className="bg-transparent outline-none [&>option]:bg-white [&>option:checked]:bg-primary-foreground"
                  onChange={handlePageSizeChange}
                  value={pageSizeValue}
                >
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="50">50</option>
                  <option value="100">100</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center gap-4">
        <button
          className={buttonClass}
          disabled={currentPageValue === 1}
          onClick={handlePrevPage}
        >
          <ArrowLeft />
        </button>
        <Pagination
          currentPage={currentPageValue}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <button
          className={buttonClass}
          disabled={currentPageValue === totalPages || totalPages === 0}
          onClick={handleNextPage}
        >
          <ArrowRight />
        </button>
      </div>
    </div>
  );
}
