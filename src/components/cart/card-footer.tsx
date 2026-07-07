import { useCart } from '@/hooks/use-cart';
import { formatCurrency } from '@/utils/format-currency';

export const CardFooter = () => {
  const { totalValue } = useCart();

  return (
    <div className="fixed bottom-0 flex h-10 w-full items-center justify-center p-4 font-bold bg-zinc-900">
      <span>{formatCurrency(totalValue)}</span>
    </div>
  );
};
