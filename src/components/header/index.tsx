import { useCart } from '../../hooks/useCart';
import logo from '../../assets/logo.png';
import './styles.css';

export const Header = () => {
  const { toggle, totalQuantity } = useCart();
  return (
    <div className="header">
      <a className="header__logo" href="/">
        <img className="header__logo-img" src={logo} alt="Logo" />
        <h1 className="header__logo-title">Redux Store</h1>
      </a>
      <button type="button" className="header__btn-cart" onClick={toggle}>
        <i className="fa fa-shopping-cart" />
        {totalQuantity > 0 && (
          <span className="header__btn-cart-badge">{totalQuantity}</span>
        )}
      </button>
    </div>
  );
};
