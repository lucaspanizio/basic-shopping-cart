import { useCart } from '@/hooks/use-cart';

export const Header = () => {
  const { toggle, totalQuantity } = useCart();
  return (
    <header className="sticky top-0 z-20 flex w-full h-20 items-center justify-between px-6 text-white bg-zinc-900">
      <a
        className="flex items-center gap-2 outline-none"
        href="/"
      >
        <img className="w-14" src="/logo.png" alt="Logo Redux Store" loading="lazy" />
        <h1 className="text-3xl font-semibold uppercase">
          Redux Store
        </h1>
      </a>
      <button
        id="btn-cart"
        type="button"
        className="relative w-auto rounded-md border-none bg-transparent text-3xl cursor-pointer"
        onClick={toggle}
      >
        <i className="fa fa-shopping-cart" />
        {totalQuantity > 0 && (
          <span className="absolute -top-1 -right-2.5 flex min-w-6 min-h-6 max-w-12 items-center justify-center overflow-hidden whitespace-nowrap rounded-full p-1 text-xs font-bold text-center text-white bg-purple-redux">
            {totalQuantity}
          </span>
        )}
      </button>
    </header>
  );
};
