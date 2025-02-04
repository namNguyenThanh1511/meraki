import "./index.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoShareSocial, IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { Product } from "../../../model/product";
export interface ProductCardProps {
  item: Product;
}
export default function ProductCard({ item }: ProductCardProps) {
  const actions = [
    {
      name: "favorite",
      activeIcon: <FaHeart />,
      deactiveIcon: <FaRegHeart />,
    },
    {
      name: "share",
      activeIcon: <IoShareSocial />,
      deactiveIcon: <IoShareSocialOutline />,
    },
    {
      name: "zoom",
      activeIcon: <MdOutlineZoomInMap />,
      deactiveIcon: <MdOutlineZoomOutMap />,
    },
  ];
  return (
    <div className="product-card">
      <div className="product-card__backdrop">
        <div className="product-card__actions">
          {actions.map((item, index) => (
            <div key={index} className="product-card__actions__item">
              {item.deactiveIcon}
            </div>
          ))}
        </div>
        <div className="product-card__backdrop__overlay"></div>
        <img src={item.image} alt="" />
        <div className="product-card__add-to-cart">Add to cart</div>
        <div
          className={`${
            item.discount > 0 ? "product-card__saleoff" : "product-card__saleoff--disabled"
          }`}
        >
          {item.discount > 0 ? `-${item.discount}%` : ""}
        </div>
      </div>

      <div className="product-card__info">
        <div className="product-card__info__title">{item.category}</div>
        <div className="product-card__info__name">
          {item.name.length > 15 ? item.name.substring(0, 15) + "..." : item.name}
        </div>
        <div className="product-card__price__wrapper">
          <div className="product-card__info__discounted-price">
            ${(item.price - item.price * (item.discount / 100)).toFixed(2)}
          </div>
          <div
            className={`${
              item.discount > 0
                ? "product-card__info__price--discounted"
                : "product-card__info__price"
            }`}
          >
            ${item.price}
          </div>
        </div>
      </div>
    </div>
  );
}
