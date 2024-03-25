import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import { clearCart, removeItem } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch()

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  }

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h2>Your Cart</h2>
        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Your cart is empty.</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, id) => (
                <div className="cart-item" key={id}>
                  <img src={item.image} alt="product-img" />
                  <div className="cart-item-details">
                    <h3>{shortTitle(item.title)}</h3>
                    <p>Price: {item.price}</p>
                    <p> {item.category} </p>
                    <button
                      className="btn"
                      onClick={() => handleRemoveItem(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="clear-cart-btn"
              onClick={() => handleClearCart()}
            >
              Clear Cart
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const shortTitle = (title) => {
  const words = title.split(" ");  // Men's clothing of brand => "men" "clothing" "of" "brand"
   
  if (words.length > 8) {
    return words.splice(0, 8).join(" ") + "..."; // splice remove the existing array values => Men's clothing of brand june => Men's clothing of brand...
  }

  return title;
}


export default Cart;
