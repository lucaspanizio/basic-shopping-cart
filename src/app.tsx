import { useGetProducts } from '@/api/products';
import { Template } from '@/components/template';
import { ProductList } from '@/components/product-list';
import { Cart } from '@/components/cart';

export const App = () => {
  const { data: smartphones = [], isLoading: loadingSmartphones } =
    useGetProducts({ category: 'smartphones' });
  const { data: notebooks = [], isLoading: loadingNotebooks } = useGetProducts({
    category: 'laptops',
  });

  return (
    <Template>
      <ProductList
        title="Notebooks"
        data={notebooks}
        loading={loadingNotebooks}
      />
      <ProductList
        title="Celulares"
        data={smartphones}
        loading={loadingSmartphones}
      />
      <Cart />
    </Template>
  );
};