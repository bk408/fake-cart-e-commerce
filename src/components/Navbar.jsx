import { Link } from "react-router-dom";

const Navbar = () => {
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
