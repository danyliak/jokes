import { useEffect, useRef, useState } from 'react';

const useDebounce = <T>(value: T, delay: number): T | null => {
  const [debouncedValue, setDebouncedValue] = useState<T | null>(null);
  const timerRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerRef.current = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timerRef.current);
  }, [value, delay]);

  return debouncedValue;
};

export { useDebounce };
