import { useCart } from '@/hooks/useCart';
import { formatCurrency } from '@/utils/formatCurrency';

export const Content = () => {
  const { items, appendItem, removeItem, hasAnyProduct } = useCart();

  return (
    <div className="flex flex-col gap-4 overflow-auto px-4 py-6 mb-6 [&::-webkit-scrollbar]:w-0">
      {hasAnyProduct ? (
        <>
          {items.map((product) => (
            <div
              className="flex h-[110px] justify-between gap-3 pb-4 text-[0.8rem] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-zinc-700"
              key={product.id}
            >
              <img
                className="min-w-[100px] max-w-[100px] select-none overflow-hidden rounded-[5px] [-webkit-user-drag:none]"
                src={product.image}
                alt="Imagem do Produto"
              />
              <div className="flex w-full flex-col items-start justify-between">
                <span className="line-clamp-2 max-h-[2.4rem] leading-[1.2rem] text-white">
                  {product.title}
                </span>
                <span className="text-[0.9rem] font-bold text-white">
                  {formatCurrency(product.price)}
                </span>
                <div className="flex items-center justify-center gap-4">
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-zinc-700 text-white cursor-pointer"
                    onClick={() => removeItem(product)}
                  >
                    <i className="fa fa-minus" />
                  </button>
                  <span className="w-[25px] text-center text-[0.9rem]">
                    {product.quantity}
                  </span>
                  <button
                    className="flex h-6 w-6 items-center justify-center rounded-[5px] bg-zinc-700 text-white cursor-pointer"
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
        <span className="text-[0.9rem] text-gray-300">
          Nenhum produto adicionado.
        </span>
      )}
    </div>
  );
};
