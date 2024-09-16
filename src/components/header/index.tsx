import { useCart } from '../../hooks/useCart';
import logo from '../../assets/logo.png';
import './styles.css';

export const Header = () => {
  const { toggle } = useCart();
  return (
    <div className="header">
      <div className="header_logo">
        <img src={logo} alt="Logo" width="56px" />
        <h1>Redux Store</h1>
      </div>
      <button type="button" className="header_btn-cart" onClick={toggle}>
        <i className="fa fa-shopping-cart" />
      </button>
    </div>
  );
};
