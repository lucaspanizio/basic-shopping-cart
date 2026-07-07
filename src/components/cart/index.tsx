import { useCart } from '@/hooks/use-cart';

import { CardTitle } from './card-title';
import { CardContent } from './card-content';
import { CardFooter } from './card-footer';

export const Cart = () => {
  const { isOpen, toggle } = useCart();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/55"
          onClick={toggle}
        />
      )}

      <div
        className={`fixed top-0 right-0 z-30 flex h-full w-80 max-md:w-full flex-col justify-start text-white bg-zinc-800 shadow-xl transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <CardTitle />
        <CardContent />
        <CardFooter />
      </div>
    </>
  );
};
