import { useCart } from '@/hooks/use-cart';

export const CardTitle = () => {
  const { totalQuantity, hasAnyProduct, toggle } = useCart();

  return (
    <div className="flex items-center justify-between p-4 bg-zinc-900">
      <div>
        <span>Carrinho de compras </span>
        {hasAnyProduct && (
          <span className="text-[0.85rem] text-gray-300">
            ({totalQuantity} {totalQuantity === 1 ? 'item' : 'itens'})
          </span>
        )}
      </div>

      <button
        title="Fechar carrinho"
        className="border-none bg-transparent text-[1.1rem] text-white cursor-pointer"
        onClick={toggle}
      >
        <i className="fa fa-close" />
      </button>
    </div>
  );
};
