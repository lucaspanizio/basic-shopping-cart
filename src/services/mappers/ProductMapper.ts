import { IProduct } from '../../store/cart/cart-types';

class ProductMapper {
  toDomain(data: any): IProduct[] {
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.thumbnail.replace('-I.jpg', '-L.jpg'),
    }));
  }
}

export const productMapper = new ProductMapper();
