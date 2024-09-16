import { useCart } from '../../hooks/useCart';
import { useFetchProducts } from '../../services/api/products';
import { IProduct } from '../../store/cart/cart-types';
import { Product } from '../product';
import { Button } from '../button';
import './styles.css';

export const List = () => {
  const { appendItem } = useCart();
  const { data: products = [] } = useFetchProducts();

  return (
    <div className="list">
      {products?.map((product: IProduct, index: number) => {
        return (
          <Product key={`${product.id}_${index}`} data={product}>
            <Button
              text="COMPRAR"
              bgColor="#54B435"
              handleClick={() => appendItem(product)}
            />
          </Product>
        );
      })}
    </div>
  );
};
