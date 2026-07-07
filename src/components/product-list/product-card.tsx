import { formatCurrency } from '@/utils/format-currency';
import { IProduct } from '@/store/cart/cart-types';

interface ProductCardProps {
  product: IProduct;
  onAdd: (product: IProduct) => void;
}

export const ProductCard = ({ product, onAdd }: ProductCardProps) => (
  <li data-slot="product-card" id={String(product.id)} className="product-carousel-item pl-4">
    <article className="group relative flex h-75 w-full select-none flex-col items-center gap-2 rounded-2xl border border-white/10 bg-zinc-800 p-3">
      <div className="flex w-full flex-1 items-center justify-center overflow-hidden rounded-xl bg-white p-2">
        <img
          className="size-full object-contain"
          src={product.image}
          alt={`Imagem do produto: ${product.title}`}
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 hidden rounded-2xl bg-black transition-colors duration-500 ease-in-out group-hover:block group-hover:bg-black/30" />
      <h3 className="line-clamp-2 min-h-10 max-h-10 font-semibold leading-5 text-gray-300">
        {product.title}
      </h3>
      <p className="font-semibold text-purple-redux">
        {formatCurrency(product.price)}
      </p>
      <button
        type="button"
        className="absolute top-1/2 left-1/2 h-10 w-3/4 -translate-x-1/2 -translate-y-1/2 cursor-pointer rounded-md border-none bg-purple-redux text-lg font-medium text-white text-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100"
        onClick={() => onAdd(product)}
      >
        <span className="uppercase">
          COMPRAR&nbsp;
          <i className="fa fa-shopping-cart" />
        </span>
      </button>
    </article>
  </li>
);
