import { useEffect, useState } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react';
import { formatCurrency } from '@/utils/format-currency';
import { useCart } from '@/hooks/use-cart';
import { IProduct } from '@/store/cart/cart-types';
import { Button } from '@/components/button';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
  useCarousel,
} from '@/components/carousel';
import { Skeleton } from './skeleton';

interface IProductListProps {
  title: string;
  data: IProduct[];
  loading: boolean;
}

const ITEM_BASIS_CLASSES =
  'basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 3xl:basis-[14.2857%]';

const CarouselArrowButton = ({ direction }: { direction: 'prev' | 'next' }) => {
  const { scrollPrev, scrollNext, canScrollPrev, canScrollNext } =
    useCarousel();
  const isPrev = direction === 'prev';

  return (
    <Button
      type="button"
      onClick={isPrev ? scrollPrev : scrollNext}
      disabled={isPrev ? !canScrollPrev : !canScrollNext}
      className="h-12 w-12 shrink-0 rounded-full border-white bg-transparent text-white hover:bg-white/10 disabled:opacity-40"
    >
      {isPrev ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </Button>
  );
};

const CarouselDots = ({ api }: { api: CarouselApi | undefined }) => {
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

  return (
    <div className="flex gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <button
          key={index}
          type="button"
          onClick={() => api?.scrollTo(index)}
          className={`h-4 w-4 rounded-full transition-colors ${index === current ? 'bg-white' : 'bg-white/30'
            }`}
        />
      ))}
    </div>
  );
};

export const ProductList = ({
  title,
  loading,
  data: products,
}: IProductListProps) => {
  const { appendItem } = useCart();
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="flex flex-col px-4 pt-4">
      <h1 className="ml-4 text-xl font-normal text-white">{title}</h1>
      <div className="flex h-full w-full flex-col justify-center">
        {loading ? (
          <>
            <div className="flex w-full gap-2.5 overflow-hidden">
              {Array.from({ length: 7 }).map((_, index) => (
                <div
                  key={index}
                  className={`flex min-h-64 aspect-square shrink-0 flex-col items-center rounded-2xl bg-zinc-800 p-3 ${ITEM_BASIS_CLASSES}`}
                >
                  <Skeleton variant="card" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="50%" />
                </div>
              ))}
            </div>
            <div className="mt-3 ml-4 flex w-full items-center justify-between pr-8">
              <Skeleton variant="circle" width="50px" />
              <div className="flex gap-2">
                <Skeleton variant="circle" width="15px" />
                <Skeleton variant="circle" width="15px" />
                <Skeleton variant="circle" width="15px" />
              </div>
              <Skeleton variant="circle" width="50px" />
            </div>
          </>
        ) : (
          <Carousel setApi={setApi} opts={{ align: 'start' }}>
            <CarouselContent className="-ml-2.5">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className={`pl-2.5 ${ITEM_BASIS_CLASSES}`}
                >
                  <div className="group relative flex min-h-64 aspect-square select-none flex-col items-center justify-center rounded-2xl border border-white/10 bg-zinc-800 p-3">
                    <img
                      className="h-full w-full object-cover mix-blend-multiply"
                      src={product.image}
                      alt={`Imagem do produto: ${product.title}}`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 hidden rounded-2xl bg-black transition-colors duration-500 ease-in-out group-hover:block group-hover:bg-black/30" />
                    <span className="line-clamp-2 min-h-10 max-h-10 font-semibold leading-5 text-gray-300">
                      {product.title}
                    </span>
                    <span className="font-semibold text-purple-redux">
                      {formatCurrency(product.price)}
                    </span>
                    <button
                      className="absolute h-10 w-3/4 rounded-md border-none bg-purple-redux text-lg font-medium text-white text-center opacity-0 transition-opacity duration-300 ease-in-out cursor-pointer group-hover:opacity-100"
                      onClick={() => appendItem(product)}
                    >
                      <span className="uppercase">
                        COMPRAR&nbsp;
                        <i className="fa fa-shopping-cart" />
                      </span>
                    </button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="mt-3 ml-4 flex w-full items-center justify-between pr-8">
              <CarouselArrowButton direction="prev" />
              <CarouselDots api={api} />
              <CarouselArrowButton direction="next" />
            </div>
          </Carousel>
        )}
      </div>
    </div>
  );
};
