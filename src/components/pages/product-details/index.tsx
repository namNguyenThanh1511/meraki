import React, { useState } from "react";
import { Button, Dropdown, MenuProps } from "antd";
import { IoMdArrowDropdown, IoMdHeartEmpty } from "react-icons/io";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa"; // Thêm FaStarHalfAlt
import "./index.scss";
import ButtonComponent from "../../atoms/button";
import { Link } from "react-router-dom";
import ProductTabs from "../../molecules/product-description-tab";
import ProductsFrame from "../../molecules/products-frame";
import Carousel from "../../molecules/swiper/carousel";
import mockProductCardTypeData from "../../../mock/mockProductCardTypeData";

export interface ProductDetailsProps {
  name: string;
  category: string;
  rating: number;
  reviews: number;
  description: string;
  price: number;
  stock: number;
  images: string[];
  sizes: string[];
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  name,
  description,
  stock,
  images,
  rating,
  reviews,
  sizes,
}) => {
  const [quantity, setQuantity] = useState(1);

  const [selectedSize, setSelectedSize] = useState(sizes[0]);
  const items: MenuProps["items"] = sizes.map((item, index) => ({
    key: index,
    label: (
      <Link onClick={() => setSelectedSize(item)} to={""} rel="noopener noreferrer">
        {item}
      </Link>
    ),
  }));

  const handleQuantityChange = (amount: number) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  // Xử lý rating
  const fullStars = Math.floor(rating); // Số sao đầy
  const hasHalfStar = rating % 1 >= 0.5; // Kiểm tra sao nửa
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Tính số sao rỗng

  return (
    <div className="product-details-wrapper">
      <div className="product-details">
        <div className="product-details__info">
          <p className="product-details__category">SHOES</p>
          <h1 className="product-details__name">{name}</h1>

          {/* Hiển thị rating */}
          <div className="product-details__rating">
            <span className="product-details__stars">
              {[...Array(fullStars)].map((_, i) => (
                <FaStar key={`full-${i}`} />
              ))}
              {hasHalfStar && <FaStarHalfAlt />}
              {[...Array(emptyStars)].map((_, i) => (
                <FaRegStar key={`empty-${i}`} />
              ))}
              <span>({rating} rate)</span>
            </span>
            <span className="product-details__reviews">({reviews} reviews)</span>
          </div>

          <p className="product-details__description">{description}</p>

          <div className="product-details__size">
            <span>Size</span>
            <Dropdown menu={{ items }} placement="bottom">
              <Button>
                {selectedSize} <IoMdArrowDropdown />
              </Button>
            </Dropdown>
          </div>

          <div className="product-details__stock">
            <span>Stock:</span> <strong>{stock} Available</strong>
          </div>

          <div className="product-details__quantity">
            <div
              className="product-details__quantity__change"
              onClick={() => handleQuantityChange(-1)}
            >
              -
            </div>
            <span>{quantity}</span>
            <div
              className="product-details__quantity__change"
              onClick={() => handleQuantityChange(1)}
            >
              +
            </div>
          </div>

          <div className="product-details__actions">
            <ButtonComponent
              bgColour="#3E3E3E"
              shape="primary"
              className="product-details__add-to-cart"
            >
              ADD TO CART
            </ButtonComponent>
            <div className="product-details__wishlist">
              <IoMdHeartEmpty size={20} />
            </div>
          </div>
        </div>

        {/* Hiển thị hình ảnh */}
        <div className="product-details__images">
          <div className="product-details__main-image">
            <img src={images[0]} alt={name} />
          </div>
          <div className="product-details__thumbnail-list">
            {images.slice(1).map((img, index) => (
              <div key={index} className="product-details__thumbnail">
                <img src={img} alt={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ProductTabs />
      <ProductsFrame title="Related Products" subText="View All">
        <Carousel cardType="product" items={mockProductCardTypeData} />
      </ProductsFrame>
    </div>
  );
};

export default ProductDetails;
