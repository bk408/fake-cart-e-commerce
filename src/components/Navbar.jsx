
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
 const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleBtn = () => {
    setIsDarkTheme(!isDarkTheme)
    
    document.body.style.backgroundColor = isDarkTheme ? "white" : "black";
    document.body.style.color = isDarkTheme ? "black" : "white";
  }

  const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

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
          <button onClick={toggleBtn}>Toggle</button>
          <li className="cart">
            {" "}
            <Link to="/cart">Cart {cartItems.length} </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
