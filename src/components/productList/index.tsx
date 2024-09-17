import { useCart } from '../../hooks/useCart';
import { useFetchProducts } from '../../services/api/products';
import { IProduct } from '../../store/cart/cart-types';
import { formatCurrency } from '../../utils/formatCurrency';
import './styles.css';

export const ProductList = () => {
  const { appendItem } = useCart();
  const { data: products = [] } = useFetchProducts();

  return (
    <div className="product-list">
      {products.map((product: IProduct) => (
        <div className="product-list__card" key={product.id}>
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
      ))}
    </div>
  );
};
