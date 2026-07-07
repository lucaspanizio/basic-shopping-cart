import { useQuery } from '@tanstack/react-query';

import { api } from './index';

type DummyProduct = {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  brand: string;
  sku: string;
  weight: number;
  images: string[];
  thumbnail: string;
};

const FIVE_MINUTES_MS = 1000 * 60 * 5;

export const useGetProducts = ({ category }: { category: string }) =>
  useQuery({
    staleTime: FIVE_MINUTES_MS,
    queryKey: [`products_${category}`],
    queryFn: async () => {
      const { data } = await api.get<{ products: DummyProduct[] }>(`/category/${category}`, {
        params: {
          limit: 10, // Quantidade de registros
          select: 'id,title,price,thumbnail',
        },
      });
      return data.products;
    },
    select: (data) =>
      data.map((item) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.thumbnail,
      })),
  });
