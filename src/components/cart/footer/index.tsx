import { useCart } from '../../../hooks/useCart';
import { formatCurrency } from '../../../utils/formatCurrency';
import './styles.css';

export const Footer = () => {
  const { totalValue } = useCart();

  return (
    <div className="cart-footer">
      <span>{formatCurrency(totalValue)}</span>
    </div>
  );
};
