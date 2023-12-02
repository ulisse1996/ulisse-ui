import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import type { UsePaginationProps } from '../pagination/use-pagination-state';
interface PaginationProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>, UsePaginationProps {
    onPageChange?: (page: number) => void;
}
declare const Pagination: import("react").ForwardRefExoticComponent<Omit<PaginationProps, "ref"> & import("react").RefAttributes<HTMLElement>>;
export { Pagination, type PaginationProps };
