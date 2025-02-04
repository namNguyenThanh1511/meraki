import React, { useState } from "react";
import "./index.scss";
import { Link } from "react-router-dom";
import ButtonComponent from "../../../atoms/button";
import { Dropdown, MenuProps } from "antd";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaCheckCircle } from "react-icons/fa";
import { LuCircle } from "react-icons/lu";
import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/store";
import { CartItem } from "../cart";

const Checkout: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart);
  const shippingOptions = [
    {
      name: "Cash on Delivery (COD)",
      value: "cod",
      cost: 0,
    },
    {
      name: "Delivery",
      value: "delivery",
      cost: 5,
    },
  ];
  const paymentMethods = [
    {
      name: "COD",
      value: "cod",
      description:
        "When choosing Cash on Delivery (COD) as the payment method, please carefully inspect the items upon delivery and make the full payment for the entire order value to the shipper.",
    },
    {
      name: "Momo",
      value: "momo",
      description:
        "When choosing Cash on Delivery (COD) as the payment method, please carefully inspect the items upon delivery and make the full payment for the entire order value to the shipper.",
    },
    {
      name: "Banking",
      value: "banking",
      description:
        "When choosing Cash on Delivery (COD) as the payment method, please carefully inspect the items upon delivery and make the full payment for the entire order value to the shipper.",
    },
  ];
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const [selectedShip, setSelectedShip] = useState(shippingOptions[0]);

  const items: MenuProps["items"] = shippingOptions.map((item, index) => ({
    key: index,
    label: (
      <Link onClick={() => setSelectedShip(item)} to={""} rel="noopener noreferrer">
        {item.name}
      </Link>
    ),
  }));
  return (
    <div className="checkout-container">
      <div className="checkout-left">
        <div className="delivery-address">
          <h3>Delivery Address</h3>
          <p>
            Already have an account? <Link to={""}>Sign in.</Link>
          </p>
          <input type="text" placeholder="Full name" />
          <div className="input-group">
            <input type="email" placeholder="Email" />
            <input type="text" placeholder="Phone number" />
          </div>
          <input type="text" placeholder="123 Street, District, City" />
        </div>

        <div className="shipping-options">
          <h3>Shipping Options</h3>
          <Dropdown menu={{ items }} placement="bottom">
            <div className="shipping-options-tickbox">
              <div className="shipping-options-tickbox__name">{selectedShip.name}</div>
              <div className="shipping-options-tickbox__value">{selectedShip.cost} $</div>
              <div className="shipping-options-tickbox__icon">
                <IoMdArrowDropdown />
              </div>
            </div>
          </Dropdown>
        </div>
        <h3>Payment method</h3>
        <div className="payment-method">
          {paymentMethods.map((payment, index) => (
            <div key={index}>
              <div
                onClick={() => setPaymentMethod(payment.value)}
                className="payment-method__container"
              >
                <div className="payment-method__container__checkbox">
                  {paymentMethod === payment.value ? <FaCheckCircle /> : <LuCircle />}
                </div>
                <div className="payment-method__container__text">{payment.name}</div>
              </div>
              {paymentMethod === payment.value && (
                <p className="description-warning">{payment.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="checkout-right">
        <h3 className="checkout-right__title">Order Summary</h3>
        <div className="order-items">
          {cart.products.map((item: CartItem, index: number) => (
            <div key={index} className="order-item">
              <div className="order-item__img">
                <img src={item.image} alt="product" />
              </div>
              <div className="order-item__info">
                <p>{item.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name}</p>
                <span>{item.type}</span>
              </div>
              <p>${item.price}</p>
            </div>
          ))}
        </div>
        <div className="coupon">
          <input type="text" placeholder="Add coupon" />
          <ButtonComponent>Apply</ButtonComponent>
        </div>
        <div className="order-total">
          <p>
            Subtotal: <span>$78</span>
          </p>
          <p>
            Shipping Fees: <span>$5</span>
          </p>
        </div>
        <div>
          <p>
            Total: <span>$83</span>
          </p>
        </div>
        <div className="checkout-btn-wrapper">
          <ButtonComponent className="checkout-btn">Checkout</ButtonComponent>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
