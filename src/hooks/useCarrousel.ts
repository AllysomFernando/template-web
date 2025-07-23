import { useEffect, useRef, useState } from 'react';

interface UseCarouselOptions {
  total: number;
  autoPlay?: boolean;
  interval?: number;
}

export const useCarousel = ({
  total,
  autoPlay = false,
  interval = 3000,
}: UseCarouselOptions) => {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const next = () => setCurrent((prev) => (prev + 1) % total);
  const prev = () => setCurrent((prev) => (prev - 1 + total) % total);
  const goTo = (index: number) => setCurrent(index);

  useEffect(() => {
    if (autoPlay && total > 1) {
      intervalRef.current = setInterval(next, interval);
      return () => {
        if (intervalRef.current) clearInterval(intervalRef.current);
      };
    }
  }, [autoPlay, interval, total]);

  return {
    current,
    next,
    prev,
    goTo,
    isFirst: current === 0,
    isLast: current === total - 1,
  };
};
