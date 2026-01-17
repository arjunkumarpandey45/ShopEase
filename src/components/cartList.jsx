import { useDispatch, useSelector } from "react-redux";
import "./cartlist.css";
import { removeItem, resetCart, updateQuantity } from "../redux/slice"; 
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export let Cartlist = () => {
  const selector = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
const navigAte=useNavigate()
  // Initialize local cart state from localStorage or Redux
  const [cartItem, setcartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItem");
    return savedCart ? JSON.parse(savedCart) : selector;
  });

  
  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(cartItem));
  }, [cartItem]);

  useEffect(() => {
    setcartItems(selector);
  }, [selector]);

  const manageQuantity = (id, q) => {
    const quantity = parseInt(q) > 0 ? parseInt(q) : 1;
    const cartTempItems = cartItem.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setcartItems(cartTempItems);
    dispatch(updateQuantity({ id, quantity })); }
 
  const totalPrice = cartItem.reduce(
    (total, item) =>
      item.quantity ? total + item.price * item.quantity : total + item.price,
    0
  );
const handlePlaced=()=>{
  localStorage.clear()
  dispatch(resetCart())
  alert("Order Placed")
  navigAte('/')
}
  return (
    <>
      {cartItem.length > 0 && (
        <div className="cart-actions">
          <button
            className="reset-btn"
            onClick={() => {
              dispatch(resetCart());
              setcartItems([]);
              localStorage.removeItem("cartItem");
            }}
          >
            Reset Cart
          </button>
            <button className="place-order-btn" onClick={handlePlaced}>Place Order</button>
          <div className="total-box">
            <span>Total:</span> ₹{totalPrice.toFixed(2)}
          </div>
        </div>
      )}

      <div className="cart-container">
        {cartItem.length ? (
          cartItem.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.thumbnail} alt={item.title} />
              <div className="cart-info">
                <h2>{item.title}</h2>
                <p>{item.category}</p>
              </div>
              <div>
                <input className="quantity-input"
                  type="number"
                  min="1"
                  value={item.quantity ? item.quantity : 1}
                  onChange={(e) => manageQuantity(item.id, e.target.value)}
                  placeholder="Enter"
                />
                <div className="cart-price">
                  ₹
                  {(item.quantity ? item.price * item.quantity : item.price).toFixed(
                    2
                  )}
                </div>
                <button
                  className="hatao-btn"
                  onClick={() => {
                    const removeCartItem = cartItem.filter((i) => i.id !== item.id);
                    setcartItems(removeCartItem);
                    localStorage.setItem("cartItem", JSON.stringify(removeCartItem));
                    dispatch(removeItem(item.id));
                  }}
                >
                  Remove
                </button>
              </div>
            
            </div>
           
          ))
        ) : (
          <div className="empty-cart">🛒 Your cart is empty</div>
        )}
      </div>
      
    </>
  );
};
