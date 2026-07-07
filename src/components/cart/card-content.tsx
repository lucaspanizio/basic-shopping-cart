import { useCart } from '@/hooks/use-cart';
import { formatCurrency } from '@/utils/format-currency';

export const CardContent = () => {
  const { items, appendItem, removeItem, hasAnyProduct } = useCart();

  return (
    <div className="flex flex-col gap-4 overflow-auto px-4 py-6 mb-6 [&::-webkit-scrollbar]:w-0">
      {hasAnyProduct ? (
        <>
          {items.map((product) => (
            <div
              className="flex h-28 justify-between gap-3 pb-4 text-xs [&:not(:last-child)]:border-b [&:not(:last-child)]:border-zinc-700"
              key={product.id}
            >
              <img
                className="min-w-24 max-w-24 select-none overflow-hidden rounded-md [-webkit-user-drag:none]"
                src={product.image}
                alt="Imagem do Produto"
              />
              <div className="flex w-full flex-col items-start justify-between">
                <span className="line-clamp-2 max-h-10 leading-5 text-white">
                  {product.title}
                </span>
                <span className="text-sm font-bold text-white">
                  {formatCurrency(product.price)}
                </span>
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-700 text-white cursor-pointer"
                    onClick={() => removeItem(product)}
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <span className="w-6 text-center text-sm">
                    {product.quantity}
                  </span>
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-md bg-zinc-700 text-white cursor-pointer"
                    onClick={() => appendItem(product)}
                  >
                    <i className="fa fa-plus" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <span className="text-sm text-gray-300">
          Nenhum produto adicionado.
        </span>
      )}
    </div>
  );
};
