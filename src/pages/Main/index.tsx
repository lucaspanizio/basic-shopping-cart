import { useGetProducts } from '@/services/api/products';
import { Template } from '@/components/template';
import { ProductList } from '@/components/productList';
import { Cart } from '@/components/cart';

export const Main = () => {
  const { data: smartphones = [], isLoading: loadingSmartphones } =
    useGetProducts({ query: 'celular' });
  const { data: notebooks = [], isLoading: loadingNotebooks } = useGetProducts({
    query: 'notebook',
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
