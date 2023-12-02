interface Page {
  isEllipsis: boolean;
  page: number;
}

interface PaginationState {
  pages: Page[];
  hasNext: boolean;
  hasPrev: boolean;
}

interface UsePaginationProps {
  currentPage: number;
  total: number;
  pageSize: number;
  maxPages: number;
}

function generatePagination(
  total: number,
  current: number,
  maxPages: number,
): (string | number)[] {
  if (total < maxPages) {
    return [...new Array(total).keys()];
  }
  const left = Math.max(
    0,
    Math.min(total - maxPages, current - Math.floor(maxPages / 2)),
  );
  const items = new Array(maxPages);
  for (let i = 0; i < maxPages; i += 1) {
    items[i] = i + left;
  }

  // replace non-ending items with placeholders
  if (items[0] > 0) {
    items[0] = 0;
    items[1] = '...';
  }
  if (items[items.length - 1] < total - 1) {
    items[items.length - 1] = total - 1;
    items[items.length - 2] = '...';
  }
  return items;
}

function usePaginationState({
  currentPage,
  pageSize,
  total,
  maxPages,
}: UsePaginationProps): PaginationState {
  const totalPages = Math.ceil(total / pageSize);

  const pages: Page[] = generatePagination(
    totalPages,
    currentPage,
    maxPages,
  ).map((el, index, arr) => {
    const isEllipsis = el === `...`;
    const ellipsisPage =
      index === 1 ? Number(arr[3]) - 1 : Number(arr[arr.length - 3]) + 2;
    return {
      isEllipsis,
      page: typeof el === `number` ? el + 1 : ellipsisPage,
    };
  });

  return {
    hasNext: currentPage < totalPages,
    hasPrev: currentPage > 1,
    pages,
  };
}

export {
  type Page,
  type PaginationState,
  type UsePaginationProps,
  usePaginationState,
};
