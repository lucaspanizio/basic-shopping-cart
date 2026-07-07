import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { IProduct } from '@/store/cart/cart-types';
import { CarouselArrowButton } from './carousel-arrow-button';
import { CarouselDots } from './carousel-dots';
import { ProductCard } from './product-card';

interface ProductCarouselProps {
  products: IProduct[];
  onAdd: (product: IProduct) => void;
}

export const ProductCarousel = ({ products, onAdd }: ProductCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'start' });
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };

    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi]);

  return (
    <div className="relative sm:px-16">
      <CarouselArrowButton
        direction="prev"
        onClick={scrollPrev}
        disabled={!canScrollPrev}
      />
      <CarouselArrowButton
        direction="next"
        onClick={scrollNext}
        disabled={!canScrollNext}
      />
      <div className="touch-pan-y overflow-hidden" ref={emblaRef}>
        <ul className="flex -ml-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAdd={onAdd} />
          ))}
        </ul>
      </div>
      <div className="mt-3 flex w-full items-center justify-center">
        <CarouselDots api={emblaApi} />
      </div>
    </div>
  );
};
