import { useEffect, useState } from 'react';
import type { EmblaCarouselType } from 'embla-carousel';

interface CarouselDotsProps {
  api: EmblaCarouselType | undefined;
}

export const CarouselDots = ({ api }: CarouselDotsProps) => {
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setCurrent(api.selectedScrollSnap());

    setCount(api.scrollSnapList().length);
    onSelect();
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api.off('select', onSelect);
    };
  }, [api]);

  if (count <= 1) return null;

  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => api?.scrollTo(index)}
          className={`size-4 cursor-pointer rounded-full transition-colors ${
            index === current ? 'bg-white' : 'bg-white/30'
          }`}
        />
      ))}
    </div>
  );
};
