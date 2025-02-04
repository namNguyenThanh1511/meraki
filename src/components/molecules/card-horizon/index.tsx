import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoShareSocial, IoShareSocialOutline } from "react-icons/io5";
import ButtonComponent from "../../atoms/button";

import "./index.scss";
import { Product } from "../../../model/product";
import { useState } from "react";

type HorizontalProductCardProps = {
  item: Product;
};

export default function HorizontalProductCard({ item }: HorizontalProductCardProps) {
  const [isLiked, setIsLiked] = useState(false); // Trạng thái cho icon heart
  const [isShared, setIsShared] = useState(false); // Trạng thái cho icon share

  // Hàm xử lý toggle trạng thái
  const handleToggleLiked = () => setIsLiked(!isLiked);
  const handleToggleShared = () => setIsShared(!isShared);

  return (
    <div className="horizontal-product-card">
      {/* Product Image */}
      <div className="horizontal-product-card__image">
        <img src={item.image} alt={item.name} className="horizontal-product-card__image__img" />
      </div>

      {/* Product Details */}
      <div className="horizontal-product-card__details">
        <div className="horizontal-product-card__details__category">{item.category}</div>
        <div className="horizontal-product-card__details__name">{item.name}</div>
        <div className="horizontal-product-card__details__description">{item.description}</div>
        <ul className="horizontal-product-card__details__features">
          <li>Available in {item.colorsAvailable} colors</li>
          <li>
            Size ranges from {item.sizeRange[0]} to {item.sizeRange[1]}
          </li>
        </ul>
      </div>

      {/* Product Actions */}
      <div className="horizontal-product-card__actions">
        <div className="horizontal-product-card__actions__price">
          {item.discount > 0 ? (
            <>
              <div className="horizontal-product-card__actions__price--discounted">
                ${(item.price * (1 - item.discount / 100)).toFixed(2)}
              </div>
              <div className="horizontal-product-card__actions__price--original">
                ${item.price.toFixed(2)}
              </div>
            </>
          ) : (
            <div className="horizontal-product-card__actions__price">${item.price.toFixed(2)}</div>
          )}
        </div>
        <div className="horizontal-product-card__actions__rating">
          {"★".repeat(Math.round(item.rating))}
          {"☆".repeat(5 - Math.round(item.rating))}
        </div>
        <div className="horizontal-product-card__actions__stock">Stock: {item.stock} Available</div>

        <div className="horizontal-product-card__actions__items">
          <ButtonComponent shape="square" className="horizontal-product-card__actions__add-to-cart">
            ADD TO CART
          </ButtonComponent>

          {/* Heart Icon */}
          <div
            className="horizontal-product-card__actions__icons"
            onClick={handleToggleLiked}
            style={{ cursor: "pointer" }} // Thêm kiểu con trỏ cho trực quan
          >
            {isLiked ? <FaHeart color="red" /> : <FaRegHeart />}
          </div>

          {/* Share Icon */}
          <div
            className="horizontal-product-card__actions__icons"
            onClick={handleToggleShared}
            style={{ cursor: "pointer" }}
          >
            {isShared ? <IoShareSocial color="blue" /> : <IoShareSocialOutline />}
          </div>
        </div>
      </div>
    </div>
  );
}
