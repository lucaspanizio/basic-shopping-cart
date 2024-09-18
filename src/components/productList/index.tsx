import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { formatCurrency } from '../../utils/formatCurrency';
import { useFetchProducts } from '../../services/api/products';
import { useCart } from '../../hooks/useCart';
import './styles.css';

export const ProductList = () => {
  const { appendItem } = useCart();
  const { data: products = [] } = useFetchProducts();

  return (
    <div className="product-list">
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
            <div className="product-list__card">
              <img
                className="product-list__card-img"
                src={product.image}
                alt="Imagem do Produto"
              />
              <div className="product-list__card-overlay" />
              <span className="product-list__card-description">
                {product.title}
              </span>
              <span className="product-list__card-price">
                {formatCurrency(product.price)}
              </span>
              <button
                className="product-list__card-button"
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
  );
};
