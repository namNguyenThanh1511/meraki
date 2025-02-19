import "./index.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoShareSocial, IoShareSocialOutline } from "react-icons/io5";
import { MdOutlineZoomInMap, MdOutlineZoomOutMap } from "react-icons/md";
import { Product } from "../../../model/product";
import { useNavigate } from "react-router-dom";
import TextSubstring from "../../atoms/TextSubstring";
import Price from "../../atoms/price";
export interface ProductCardProps {
  item: Product;
}
export default function ProductCard({ item }: ProductCardProps) {
  const navigate = useNavigate();
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
    <div
      onClick={() => {
        navigate(`products/${item.id}`);
      }}
      className="product-card"
    >
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
        <TextSubstring str={item.name} limit={30} className="product-card__info__name" />
        <div className="product-card__price__wrapper">
          {/* <div className="product-card__info__discounted-price">
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
          </div> */}
          <Price price={item.price} saleOff={item.discount} />
        </div>
      </div>
    </div>
  );
}
