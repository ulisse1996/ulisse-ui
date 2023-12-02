import { useEffect, useRef, useState } from 'react';

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

function useSearch<T>({
  minChars = 0,
  delay = 500,
  fetcher,
}: UseSearchProps<T>): UseSearchReturn<T> {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const [isLoading, setLoading] = useState(false);
  const [query, setQuery] = useState<{ value: string; prevent: boolean }>({
    value: ``,
    prevent: false,
  });
  const [results, setResults] = useState<T[]>([]);
  const [isError, setError] = useState(false);

  useEffect(() => {
    if (query.prevent) {
      return;
    }

    const { value } = query;

    if (typeof value === `undefined`) {
      return;
    }

    if (value.length < minChars) {
      return;
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    setError(false);
    setLoading(true); // Start loading before fetch

    timeoutRef.current = setTimeout(async () => {
      try {
        const res = await fetcher(value);
        setResults(res);
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }, delay);
  }, [query]);

  return {
    isEmpty: !results,
    isError,
    isLoading,
    query: query.value,
    results,
    search: (q: string, preventSearch) => {
      setQuery({ value: q, prevent: preventSearch || false });
    },
  };
}

export { useSearch, type UseSearchProps, type UseSearchReturn };
