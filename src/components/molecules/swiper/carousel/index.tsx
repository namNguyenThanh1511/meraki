// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper-bundle.css";
import ProductCard from "../../card";

import { Product } from "../../../../model/product";
import CardBlog from "../../card-blog";
import { BlogCardType } from "../../../../model/blog";
export interface CarouselProps {
  items: Product[] | BlogCardType[];
  cardType?: "product" | "blog";
}
const Carousel = ({ items, cardType }: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          {cardType === "product" ? (
            <ProductCard item={item as Product} />
          ) : (
            <CardBlog item={item as BlogCardType} />
          )}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
