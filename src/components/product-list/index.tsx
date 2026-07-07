import { useCart } from '@/hooks/use-cart';
import { IProduct } from '@/store/cart/cart-types';

import { ProductCarousel } from './product-carousel';
import { ProductListSkeleton } from './product-list-skeleton';

interface ProductListProps {
  title: string;
  data: IProduct[];
  loading: boolean;
}

export const ProductList = ({ title, loading, data: products }: ProductListProps) => {
  const { appendItem } = useCart();

  return (
    <section data-slot="product-list" className="flex flex-col px-4 pt-4">
      <h2 className="py-2 text-center text-xl font-medium text-white">
        {title}
      </h2>
      {loading ? (
        <ProductListSkeleton />
      ) : (
        <ProductCarousel products={products} onAdd={appendItem} />
      )}
    </section>
  );
};
