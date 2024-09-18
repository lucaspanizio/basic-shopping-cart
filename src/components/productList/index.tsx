import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatCurrency } from '@/utils/formatCurrency';
import { useCart } from '@/hooks/useCart';
import { IProduct } from '@/store/cart/cart-types';
import './styles.css';

interface IProductListProps {
  title: string;
  data: IProduct[];
}

export const ProductList = ({ title, data: products }: IProductListProps) => {
  const { appendItem } = useCart();

  return (
    <div className="product-list">
      <h1 className="product-list__title">{title}</h1>
      <div className="product-list__slides">
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
                  alt="Imagem do Produto"
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
      </div>
    </div>
  );
};
