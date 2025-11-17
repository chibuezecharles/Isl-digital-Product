interface UsePaginationProps {
  currentPage: number;
  totalPages: number;
}

export default function usePagination({
  currentPage,
  totalPages,
}: UsePaginationProps) {
  const getPageNumbers = () => {
    const pageNumbers = [];
    const delta = currentPage === 1 || currentPage === totalPages ? 2 : 1; // Number of pages to show on each side of the current page

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - delta && i <= currentPage + delta)
      ) {
        pageNumbers.push(i);
      } else if (
        i === currentPage - delta - 1 ||
        i === currentPage + delta + 1
      ) {
        pageNumbers.push("...");
      }
    }

    return pageNumbers;
  };

  return { getPageNumbers };
}
