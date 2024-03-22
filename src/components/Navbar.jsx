
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
 const [isDarkTheme, setIsDarkTheme] = useState(false)

  const toggleBtn = () => {
    setIsDarkTheme(!isDarkTheme)
    
    document.body.style.backgroundColor = isDarkTheme ? "white" : "black";
    document.body.style.color = isDarkTheme ? "black" : "white";
  }

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
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
