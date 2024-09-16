class ProductMapper {
  toDomain(data: any) {
    return data.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.thumbnail.replace('-I.jpg', '-L.jpg'),
    }));
  }
}

export const productMapper = new ProductMapper();
