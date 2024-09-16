import { useQuery } from '@tanstack/react-query';
import { IProduct } from '../../store/cart/cart-types';
import { api } from '../api';

const FIVE_MINUTES_MS = 1000 * 60 * 5;

export const useFetchProducts = () =>
  useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await api.get<{ results: any[] }>('/search', {
        params: {
          offset: 0,
          limit: 50,
          q: 'celular',
        },
      });

      const data: IProduct[] = response.data.results.map((item: any) => ({
        id: item.id,
        title: item.title,
        price: item.price,
        image: item.thumbnail.replace('-I.jpg', '-L.jpg'),
      }));

      return data;
    },
    staleTime: FIVE_MINUTES_MS,
  });
