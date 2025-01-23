import { useState } from "react";
import "./index.scss";
import Carousel from "../../swiper/carousel";
import mockProductCardTypeData from "../../../../mock/mockProductCardTypeData";
import { ProductCardType } from "../../../../model/product";
export default function HomepageFeature() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [filteredData, setFilteredData] = useState<ProductCardType[]>(mockProductCardTypeData);
  const category = [
    {
      title: "All",
      category: "all",
    },
    {
      title: "Shoes",
      category: "shoes",
    },
    {
      title: "Apparel",
      category: "apparel",
    },
    {
      title: "Equipment",
      category: "equipment",
    },
  ];
  const handleChangeCategory = (category: string) => {
    setSelectedCategory(category);
    if (category === "all") {
      setFilteredData(mockProductCardTypeData);
    } else {
      setFilteredData(
        mockProductCardTypeData.filter(
          (x: ProductCardType) => x.category.toLowerCase() === category
        )
      );
    }
  };
  return (
    <div>
      <div className="homepage__featured__header">
        <div className="homepage__featured__header__title">Featured</div>
        <div className="homepage__featured__header__category">
          {category.map((item, index) => (
            <div
              key={index}
              className={`${
                selectedCategory === item.category
                  ? "homepage__featured__header__category__item homepage__featured__header__category__item--active"
                  : "homepage__featured__header__category__item"
              }`}
              onClick={() => handleChangeCategory(item.category)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
      <div className="homepage__featured__items">
        {/* <ProductCard /> */}
        <Carousel cardType="product" items={filteredData} />
      </div>
    </div>
  );
}
