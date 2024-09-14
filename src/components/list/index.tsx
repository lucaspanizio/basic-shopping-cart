import { useProducts } from '../../hooks/useProducts';
import { useFetchProducts } from '../../services/api/products';
import { IProduct } from '../../store/redux/cart-types';
import { Product } from '../product';
import { Button } from '../button';
import './styles.css';

export const List = () => {
  const { addToCart } = useProducts();
  const { data: products = [] } = useFetchProducts();

  return (
    <div className="grid">
      {products?.map((product: IProduct, index: number) => {
        return (
          <Product key={`${product.id}_${index}`} data={product}>
            <Button
              title="COMPRAR"
              bgColor="#54B435"
              handleClick={() => addToCart(product)}
            />
          </Product>
        );
      })}
    </div>
  );
};
