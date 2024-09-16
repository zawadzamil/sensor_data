'use client';
import { useState, useEffect, useCallback } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export const useFilters = (initialFilters, separator = ',') => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [filters, setFilters] = useState(initialFilters);

  // Load filters from URL on initial render
  useEffect(() => {
    const filtersFromUrl = Object.keys(initialFilters).reduce((acc, key) => {
      const value = searchParams.get(key);
      if (value !== null) {
        if (Array.isArray(initialFilters[key])) {
          acc[key] = value.split(separator);
        } else if (typeof initialFilters[key] === 'number') {
          acc[key] = Number(value);
        } else {
          acc[key] = value;
        }
      } else {
        acc[key] = initialFilters[key];
      }
      return acc;
    }, {});

    setFilters(filtersFromUrl);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateFilter = useCallback((key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters(initialFilters);
  }, [initialFilters]);

  const constructQueryString = useCallback(
    (filters, initialFilters, separator) => {
      return Object.entries(filters)
        .filter(([key, value]) => {
          if (Array.isArray(value)) {
            return value.length > 0;
          }
          return value !== initialFilters[key];
        })
        .map(([key, value]) => {
          if (Array.isArray(value)) {
            return `${key}=${value.join(separator)}`;
          }
          return `${key}=${value}`;
        })
        .join('&');
    },
    [],
  );

  // Separate function to update URL
  const syncUrlWithFilters = useCallback(() => {
    const queryString = constructQueryString(
      filters,
      initialFilters,
      separator,
    );

    const newUrl = queryString
      ? `${window.location.pathname}?${queryString}`
      : window.location.pathname;

    if (newUrl !== window.location.pathname + window.location.search) {
      router.replace(newUrl, { scroll: false });
    }
  }, [filters, initialFilters, router, separator, constructQueryString]);

  // Sync URL with filters whenever filters change
  useEffect(() => {
    syncUrlWithFilters();
  }, [filters, syncUrlWithFilters]);

  return [filters, updateFilter, syncUrlWithFilters, resetFilters];
};

// Function to manually construct query string
// const constructQueryString = useCallback(
//   (filters, initialFilters, separator) => {
//     return Object.entries(filters)
//       .filter(([key, value]) => {
//         if (Array.isArray(value)) {
//           return value.length > 0;
//         }
//         return value !== initialFilters[key];
//       })
//       .map(([key, value]) => {
//         if (Array.isArray(value)) {
//           return `${encodeURIComponent(key)}=${value.map(encodeURIComponent).join(separator)}`;
//         }
//         return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
//       })
//       .join('&');
//   },
//   [],
// );
