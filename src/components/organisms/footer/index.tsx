import { FaFacebook } from "react-icons/fa6";
import { SlSocialInstagram } from "react-icons/sl";
import { AiFillTwitterCircle } from "react-icons/ai";
import "./index.scss";
import { mainFooterBackdrop, mainLogo } from "../../../assets/constant";
import { Link } from "react-router-dom";
import InputComponent from "../../atoms/input";
import { MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CiPhone } from "react-icons/ci";

function Footer() {
  const footerCol = [
    {
      title: "Company",
      items: [
        {
          path: "about",
          name: "About Us",
        },
        {
          path: "",
          name: "Testimonials",
        },
        {
          path: "",
          name: "FAQS",
        },
        {
          path: "",
          name: "Terms & Condition",
        },
        {
          path: "",
          name: "Latest Update",
        },
      ],
    },
    {
      title: "Products",
      items: [
        {
          path: "mens-section",
          name: "Men's Section",
        },
        {
          path: "womens-section",
          name: "Women's Section",
        },
        {
          path: "kids-section",
          name: "Kids' Section",
        },
        {
          path: "shoes",
          name: "Shoes",
        },
        {
          path: "apparel",
          name: "Apparel",
        },
        {
          path: "equipments",
          name: "Equipments",
        },
      ],
    },
    {
      title: "Support",
      items: [
        {
          path: "order-tracking",
          name: "Order Tracking",
        },
        {
          path: "payment-guide",
          name: "Payment Guide",
        },
        {
          path: "help-centre",
          name: "Help Centre",
        },
        {
          path: "privacy-policy",
          name: "Privacy Policy",
        },
        {
          path: "return-policy",
          name: "Return Policy",
        },
        {
          path: "promo-codes",
          name: "Promo Codes",
        },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="footer__backdrop">
        <img src={mainFooterBackdrop} alt="" />
      </div>
      <div className="footer__wrapper">
        <div className="footer__content">
          <div className="footer__content__left">
            <div className="footer__content__left__logo">
              <img src={mainLogo} alt="" />
            </div>
            <div className="footer__content__left__description">
              All content on this website is protected by copyright and may not be usedwithout
              permission from 2Sport. For more information about our PrivacyPolicy, please contact
              our Support Center.
            </div>
            <div className="footer__content__left__copyright">
              Copyright © 2024 2Sport. All Rights Reserved.
            </div>
          </div>
          <div className="footer__content__right">
            {footerCol.map((col, index) => (
              <div key={index} className="footer__content__right__item">
                <h2>{col.title}</h2>
                <ul>
                  {col.items.map((item) => (
                    <li>
                      <Link to={item.path}>{item.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <h2>Get our Updates</h2>
        <div className="footer__references">
          <div className="footer__references__left">
            <div className="footer__references__left__wrapper">
              <input
                placeholder="Enter your email address ..."
                className="footer__references__left__wrapper__input"
                type="text"
              />
              <div className="footer__references__left__wrapper--btn">SUBCRIBE</div>
            </div>
          </div>
          <div className="footer__references__right">
            <div className="footer__references__right__address">
              <ul>
                <li>
                  <span>
                    <IoLocationOutline className="footer-icon" />
                  </span>
                  <span>123 street, district, city</span>
                </li>
                <li>
                  <span>
                    <CiPhone className="footer-icon" />
                  </span>
                  <span>+84 123-456-789</span>
                </li>
                <li>
                  <span>
                    <MdOutlineEmail className="footer-icon" />
                  </span>
                  <span>support@gmail.com</span>
                </li>
              </ul>
            </div>
            <div className="footer__references__right__contact">
              <h2>Contact</h2>
              <div className="footer__references__right__contact__wrapper">
                <div className="footer__references__right__contact__item">FB</div>
                <div className="footer__references__right__contact__item">IG</div>
                <div className="footer__references__right__contact__item">TW</div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__end"></div>
      </div>
    </footer>
  );
}

export default Footer;
