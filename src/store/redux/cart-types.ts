export interface IProduct {
  id: number;
  title: string;
  price: number;
  image: string;
}

export interface IProductInCart extends IProduct {
  quantity: number;
}

export interface ICartStates {
  cartProducts: IProductInCart[];
  value: number;
  totalQuantity: number;
}

export interface ICartActions {
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProductInCart) => void;
}
