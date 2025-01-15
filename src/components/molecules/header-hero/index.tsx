import { Link } from "react-router-dom";
import "./index.scss";
import { navbar } from "../../../assets/constant";
import { CiUser } from "react-icons/ci";
import { LuShoppingCart } from "react-icons/lu";
import { UserOutlined } from "@ant-design/icons";
function Hero() {
  return (
    <div className="navbar">
      <div className="navbar__dropdown">
        <div className="navbar__dropdown__item">Browse Categories</div>
        <div className="navbar__dropdown__product">Product</div>
      </div>
      <div className="navbar__container">
        <ul className="navbar__items">
          {navbar.map((item, index) => (
            <li className="navbar__items__item" key={index}>
              <Link to={item.path}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar__actions">
        <div className="navbar__actions__avatar">
          <span>
            <UserOutlined />
          </span>
          <span>Sign in</span>
        </div>
        <div className="navbar__actions__cart">
          <span>
            <LuShoppingCart />
          </span>
          <span>Cart</span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
