import { useSelector } from 'react-redux';
import './addcart.css';
import { Link} from 'react-router-dom';

export let AddCart = () => {
  const cartCount = useSelector((state) => state.cart.items);

  return (
    <div className="icons">
      <input type="text" placeholder="Search..." />

     <Link to="/cart"> <div className="cart">
        🛒
        <span className="cart-count">{cartCount.length?cartCount.length:0}</span> 
      </div></Link>

     <Link to="/profile"> <span className="user">👤</span></Link>
    </div>
  );
};
