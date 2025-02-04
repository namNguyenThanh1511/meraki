import React from "react";
import "./index.scss";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import ProductsFrame from "../../../molecules/products-frame";
import { RootState } from "../../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import { changeQuantity, remove } from "../../../../redux/features/cartSlice";

export interface CartItem {
  id: number;
  name: string;
  image: string;
  type: string;
  price: number;
  quantity: number;
}

const ShoppingCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const total = cart.products.reduce(
    (sum: number, item: CartItem) => sum + item.price * item.quantity,
    0
  );
  const handleIncrement = (product: CartItem) => {
    dispatch(changeQuantity({ id: product.id, quantity: product.quantity + 1 }));
  };

  const handleDecrement = (product: CartItem) => {
    if (product.quantity > 1) {
      dispatch(changeQuantity({ id: product.id, quantity: product.quantity - 1 }));
    } else {
      dispatch(remove(product.id));
    }
  };

  return (
    <div className="shopping-cart-wrapper">
      <ProductsFrame className="shopping-cart-frame" title="Shopping Cart" subText="3 items">
        <div className="shopping-cart">
          <table className="shopping-cart__table">
            <thead>
              <tr>
                <th>
                  <input type="checkbox" />
                </th>
                <th>Products</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.products.map((item: CartItem) => (
                <tr key={item.id}>
                  <td>
                    <input type="checkbox" defaultChecked />
                  </td>
                  <td className="shopping-cart__product">
                    <img src={item.image} alt={item.name} />
                    <div>
                      <p className="shopping-cart__product-name">{item.name}</p>
                      <p className="shopping-cart__product-type">Type: {item.type}</p>
                    </div>
                  </td>
                  <td>
                    <div className="shopping-cart__quantity">
                      <button
                        onClick={() => {
                          handleDecrement(item);
                        }}
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => {
                          handleIncrement(item);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>${item.price.toFixed(2)}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="shopping-cart__remove">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="shopping-cart__footer">
            <Link to={""} className="shopping-cart__continue">
              ← Continue Shopping
            </Link>
            <div className="shopping-cart__total">
              <span>Total ({cart.products.length} items): </span>
              <strong>${total.toFixed(2)}</strong>
              <button className="shopping-cart__checkout">Checkout →</button>
            </div>
          </div>
        </div>
      </ProductsFrame>
    </div>
  );
};

export default ShoppingCart;
