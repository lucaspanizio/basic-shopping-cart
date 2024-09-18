import { useGetProducts } from '../../services/api/products';
import { Template } from '../../components/template';
import { ProductList } from '../../components/productList';
import { Cart } from '../../components/cart';

export const Main = () => {
  const { data: smartphones = [] } = useGetProducts({ query: 'celular' });
  const { data: notebooks = [] } = useGetProducts({ query: 'notebook' });

  return (
    <>
      <Template>
        <ProductList title="Notebooks" data={notebooks} />
        <ProductList title="Celulares" data={smartphones} />
        <Cart />
      </Template>
    </>
  );
};
