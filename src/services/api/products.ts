import { productMapper } from './../mappers/ProductMapper';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

const FIVE_MINUTES_MS = 1000 * 60 * 5;

export const useGetProducts = ({ query }: { query: string }) =>
  useQuery({
    queryKey: [`products_${query}`],
    queryFn: async () => {
      const { data } = await api.get<{ results: any[] }>('/search', {
        params: {
          offset: 0, // A partir de qual registro começa a contar o limit
          limit: 10, // Quantidade de registros
          q: query, // Termo da busca
          sort: 'sales_desc', // Ordena pelos mais vendidos
        },
      });

      return productMapper.toDomain(data.results);
    },
    staleTime: FIVE_MINUTES_MS,
  });
