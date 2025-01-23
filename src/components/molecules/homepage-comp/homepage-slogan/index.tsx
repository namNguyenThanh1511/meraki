import "./index.scss";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiLike } from "react-icons/bi";
import { MdOutlinePayments } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";

export default function HomepageSlogan() {
  const footerItems = [
    {
      title: "Shipping NATIONWIDE",
      description: "Payment on delivery",
      icon: <LiaShippingFastSolid />,
    },
    {
      title: "Quality",
      description: "Product quality guaranteed.",
      icon: <BiLike />,
    },
    {
      title: "Proceed to PAYMENT",
      description: "With many METHODS",
      icon: <MdOutlinePayments />,
    },
  ];
  return (
    <div>
      <div className="homepage__slogan__wrapper">
        <div className="homepage__slogan__header">
          <div className="homepage__slogan__header__left">
            <div className="homepage__slogan__header__left__text custom-border ">
              <h1>WE ARE</h1>
              <h1>DIFFERENT</h1>
            </div>
          </div>
          <div className="homepage__slogan__header__mid">
            <p>Discover our qualities that makes us</p>
            <p>different than other marketplace.</p>
          </div>
          <div className="homepage__slogan__header__right">
            <div className="homepage__slogan__header__right__text">More About Us</div>
            <div className="homepage__slogan__header__right__arrow">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="homepage__slogan__footer">
          {footerItems.map((item, index) => (
            <div key={index} className="homepage__slogan__footer__item">
              <div className="homepage__slogan__footer__item__icon">{item.icon}</div>
              <div className="homepage__slogan__footer__item__title">{item.title}</div>
              <div className="homepage__slogan__footer__item__description">{item.description}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
