import { productMapper } from '@/hooks/api/mappers/ProductMapper';
import { useQuery } from '@tanstack/react-query';
import { api } from '.';

const FIVE_MINUTES_MS = 1000 * 60 * 5;

export const useGetProducts = ({ category }: { category: string }) =>
  useQuery({
    queryKey: [`products_${category}`],
    queryFn: async () => {
      const { data } = await api.get<{ products: any[] }>(
        `/category/${category}`,
        {
          params: {
            limit: 10, // Quantidade de registros
            select: 'id,title,price,thumbnail',
          },
        },
      );

      return productMapper.toDomain(data.products);
    },
    staleTime: FIVE_MINUTES_MS,
  });
