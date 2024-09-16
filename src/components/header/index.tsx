import { useCart } from '../../hooks/useCart';
import './styles.css';

export const Header = () => {
  const { toggle } = useCart();
  return (
    <div className="header">
      <div className="header_logo">Logo</div>
      <button type="button" className="header_btn-cart" onClick={toggle}>
        <i className="fa fa-shopping-cart"></i>
      </button>
    </div>
  );
};
