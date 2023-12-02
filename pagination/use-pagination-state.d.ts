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
declare function usePaginationState({ currentPage, pageSize, total, maxPages, }: UsePaginationProps): PaginationState;
export { type Page, type PaginationState, type UsePaginationProps, usePaginationState, };
