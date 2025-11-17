import usePagination from "./hooks/usePagination";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  const { getPageNumbers } = usePagination({ currentPage, totalPages });

  return (
    <div className="justify-center items-center  flex">
      {getPageNumbers().map((page, index) => (
        <button
          key={index}
          onClick={() => typeof page === "number" && onPageChange(page)}
          className={`w-10 h-8 p-2 flex-col justify-center items-center gap-2 inline-flex text-sm font-medium outline-none border border-[#E8E8E8] ${
            page === currentPage
              ? "bg-primary-100 text-white cursor-auto"
              : "bg-white text-[#1E1E1E] [&:not([disabled])]:hover:bg-primary-100 hover:text-white"
          }`}
          disabled={typeof page !== "number" || page === currentPage}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
