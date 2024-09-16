import { useCart } from '../../hooks/useCart';
import logo from '../../assets/logo.png';
import './styles.css';

export const Header = () => {
  const { toggle, totalQuantity } = useCart();
  return (
    <div className="header">
      <a className="header_logo" href="/">
        <img src={logo} alt="Logo" width="56px" />
        <h1>Redux Store</h1>
      </a>
      <button type="button" className="header_btn-cart" onClick={toggle}>
        <i className="fa fa-shopping-cart" />
        {totalQuantity > 0 && (
          <span className="header_btn-cart_badge">{totalQuantity}</span>
        )}
      </button>
    </div>
  );
};
