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
    <div className="product-list">
      <h1 className="product-list__title">{title}</h1>
      <div className="product-list__slides">
        {loading ? (
          <>
            <div className="product-list__skeletons">
              {Array.from({ length: skeletonCount }).map((_, index) => (
                <div key={index} className="product-list__skeletons-card">
                  <Skeleton variant="card" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" />
                  <Skeleton variant="text" width="50%" />
                </div>
              ))}
            </div>
            <div className="product-list__skeletons-pagination">
              <Skeleton variant="circle" width="50px" />
              <div className="product-list__skeletons-pagination__items">
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
                <div className="product-list__slides-card">
                  <img
                    className="product-list__slides-card-img"
                    src={product.image}
                    alt={`Imagem do produto: ${product.title}}`}
                    loading="lazy"
                  />
                  <div className="product-list__slides-card-overlay" />
                  <span className="product-list__slides-card-description">
                    {product.title}
                  </span>
                  <span className="product-list__slides-card-price">
                    {formatCurrency(product.price)}
                  </span>
                  <button
                    className="product-list__slides-card-button"
                    onClick={() => appendItem(product)}
                  >
                    <span>
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
