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
  items: IProductInCart[];
  isOpen: boolean;
  totalValue: number;
  totalQuantity: number;
}

export interface ICartActions {
  toggle: any;
  appendItem: (product: IProduct) => void;
  removeItem: (product: IProductInCart) => void;
}
