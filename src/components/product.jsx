import { useDispatch, useSelector } from "react-redux";
import "./product.css";
import { addItem, removeItem } from "../redux/slice";
import { useEffect } from "react";
import { fetchData } from "../redux/productSlice";

export let Product = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  // Make sure the correct key in store is used (depends on your store setup)
  const product = useSelector((state) => state.products.items);
  console.log("Fetched Products:", product);
  const cartCount = useSelector((state) => state.cart.items);
  return (
    <div className="product-container">
      {product.map((item) => (
        <section className="product-card" key={item.id}>
          <div className="product-image">
            <img src={item.thumbnail} alt={item.title} />
          </div>

          <div className="product-info">
            
            <h5 className="category">{(item.category).toUpperCase()}</h5>
              <h4 className="weight">Rating : {item.rating}/5</h4>
            <h2 className="product-title">{item.title}</h2>
            <p className="desc">{item.description}</p>
            <h5 className="brand">Brand: {item.brand}</h5>
            
            <h5 className="weight">Weight: {item.weight}g</h5>
            <h5 className="dimensions">Height: {item.dimensions?.height} cm</h5>
            <p className="price">${item.price}</p>
          </div>

          <div className="buttons">
            {cartCount.find((cartItem) => cartItem.id === item.id)?<button
              className="remove-btn"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>:<button className="add-btn" onClick={() => dispatch(addItem(item))}>
              Add to Cart
            </button>}
            
          </div>
        </section>
      ))}
    </div>
  );
};
