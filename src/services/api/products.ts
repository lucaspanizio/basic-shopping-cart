import { productMapper } from './../mappers/ProductMapper';
import { useQuery } from '@tanstack/react-query';
import { api } from '../api';

const FIVE_MINUTES_MS = 1000 * 60 * 5;

export const useFetchProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data } = await api.get<{ results: any[] }>('/search', {
        params: {
          offset: 0,
          limit: 50,
          q: 'celular',
        },
      });

      return productMapper.toDomain(data.results);
    },
    staleTime: FIVE_MINUTES_MS,
  });
