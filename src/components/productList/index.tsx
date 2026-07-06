import { useState, useEffect } from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatCurrency } from '@/utils/formatCurrency';
import { useCart } from '@/hooks/useCart';
import { IProduct } from '@/store/cart/cart-types';
import { Skeleton } from '../skeleton';
import './styles.css';

interface IProductListProps {
  title: string;
  data: IProduct[];
  loading: boolean;
}

export const ProductList = ({
  title,
  loading,
  data: products,
}: IProductListProps) => {
  const { appendItem } = useCart();
  const [skeletonCount, setSkeletonCount] = useState(7);

  const handleResize = () => {
    const width = window.innerWidth;

    if (width < 640) {
      setSkeletonCount(2);
    } else if (width >= 640 && width < 768) {
      setSkeletonCount(3);
    } else if (width >= 768 && width < 1024) {
      setSkeletonCount(4);
    } else if (width >= 1024 && width < 1360) {
      setSkeletonCount(5);
    } else {
      setSkeletonCount(7);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="flex flex-col px-4 pt-4">
      <h1 className="ml-[var(--swiper-navigation-sides-offset,15px)] text-xl font-normal text-white">
        {title}
      </h1>
      <div className="flex h-full w-full flex-col justify-center">
        {loading ? (
          <>
            <div className="flex w-full justify-around">
              {Array.from({ length: skeletonCount }).map((_, index) => (
                <div
                  key={index}
                  className="flex w-[200px] min-h-[265px] aspect-square flex-col items-center rounded-[15px] bg-[#fff] p-3"
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
          <Swiper
            modules={[Navigation, Pagination]}
            navigation={{ enabled: true }}
            pagination={{ enabled: true, clickable: true }}
            spaceBetween={10}
            breakpoints={{
              260: { slidesPerView: 2 },
              640: { slidesPerView: 3 },
              768: { slidesPerView: 4 },
              1024: { slidesPerView: 5 },
              1360: { slidesPerView: 7 },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="group relative flex w-[200px] min-h-[265px] aspect-square select-none flex-col items-center justify-center rounded-[15px] border-[0.5px] border-black/20 bg-[#fff] p-3 text-black">
                  <img
                    className="h-full w-full object-cover"
                    src={product.image}
                    alt={`Imagem do produto: ${product.title}}`}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 hidden rounded-[15px] bg-black transition-colors duration-500 ease-in-out group-hover:block group-hover:bg-black/30" />
                  <span className="line-clamp-2 min-h-10 max-h-10 font-semibold leading-5 text-zinc-700">
                    {product.title}
                  </span>
                  <span className="font-semibold text-purple-redux">
                    {formatCurrency(product.price)}
                  </span>
                  <button
                    className="absolute h-10 w-3/4 rounded-[5px] border-none bg-purple-redux text-[1.1rem] font-medium text-[#fff] text-center opacity-0 transition-opacity duration-[350ms] ease-in-out cursor-pointer group-hover:opacity-100"
                    onClick={() => appendItem(product)}
                  >
                    <span className="uppercase">
                      COMPRAR&nbsp;
                      <i className="fa fa-shopping-cart" />
                    </span>
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
