import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleBtn = () => {
    setIsDarkTheme(!isDarkTheme);

    document.body.style.backgroundColor = isDarkTheme ? "white" : "black";
    document.body.style.color = isDarkTheme ? "black" : "white";
  };

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="nav-head">
      <div className="nav-title">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/about">About</Link>{" "}
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <button className="nav-btn" onClick={toggleBtn}>Toggle</button>
          <li className="cart">
            {" "}
            <Link to="/cart" className="cart-link">
              <img
                src="https://img.icons8.com/skeuomorphism/32/experimental-shopping-cart-skeuomorphism.png"
                alt="experimental-shopping-cart-skeuomorphism"
              />
              <span className="cart-count">{cartItems.length}</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
