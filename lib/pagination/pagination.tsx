import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { Button } from '@/button';
import type { UsePaginationProps } from '@/pagination/use-pagination-state';
import { usePaginationState } from '@/pagination/use-pagination-state';
import { cn } from '@/utils';

interface PaginationProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
    UsePaginationProps {
  onPageChange?: (page: number) => void;
}

const Pagination = forwardRef<HTMLElement, PaginationProps>(
  ({ className, onPageChange, currentPage, ...props }, ref) => {
    const paginationState = usePaginationState({ ...props, currentPage });

    const handlePageChange = (page: number) => {
      if (!onPageChange) return;
      onPageChange(page);
    };

    const handlePrevNext = (prev: boolean) => {
      if (prev && paginationState.hasPrev) {
        handlePageChange(currentPage - 1);
      } else if (!prev && paginationState.hasNext) {
        handlePageChange(currentPage + 1);
      }
    };

    return (
      <nav
        ref={ref}
        className={cn('', className)}
        aria-label={props['aria-label']}
      >
        <ul className="flex space-x-0.5">
          <li>
            <Button
              onClick={() => handlePrevNext(true)}
              variant="outline-primary"
              className="h-9 w-9 px-2"
            >
              <ChevronLeft className="h-4" />
            </Button>
          </li>
          {paginationState.pages.map((page, index) => (
            <li key={index}>
              <Button
                onClick={() => handlePageChange(page.page)}
                className={cn('h-9 w-9 text-ellipsis px-2', {
                  'bg-transparent text-black hover:border-2 hover:border-gray-200 hover:bg-gray-200':
                    currentPage !== page.page,
                })}
                variant={currentPage === page.page ? 'primary' : 'flat'}
              >
                {page.isEllipsis ? '...' : page.page}
              </Button>
            </li>
          ))}
          <Button
            onClick={() => handlePrevNext(false)}
            variant="outline-primary"
            className="h-9 w-9 px-1"
          >
            <ChevronRight className="h-4" />
          </Button>
        </ul>
      </nav>
    );
  },
);

Pagination.displayName = 'Pagination';

export { Pagination, type PaginationProps };
