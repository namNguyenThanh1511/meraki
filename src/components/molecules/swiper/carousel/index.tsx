// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/bundle";
import ProductCard from "../../card";

import { ProductCardType } from "../../../../model/product";
export interface CarouselProps {
  items: ProductCardType[];
}
const Carousel = ({ items }: CarouselProps) => {
  return (
    <Swiper
      slidesPerView={5}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {items.map((item, index) => (
        <SwiperSlide>
          <ProductCard key={index} item={item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
