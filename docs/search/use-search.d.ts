interface UseSearchProps<T> {
    minChars?: number;
    fetcher: (query: string) => Promise<T[]>;
    delay?: number;
}
interface UseSearchReturn<T> {
    isEmpty: boolean;
    isError: boolean;
    results?: T[];
    isLoading: boolean;
    query: string;
    search: (query: string, preventSearch?: boolean) => void;
}
declare function useSearch<T>({ minChars, delay, fetcher, }: UseSearchProps<T>): UseSearchReturn<T>;
export { useSearch, type UseSearchProps, type UseSearchReturn };
