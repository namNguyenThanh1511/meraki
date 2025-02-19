import { Button, Dropdown, MenuProps, Slider } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import InputComponent from "../../atoms/input";
import { questionIMG } from "../../../assets/constant";
import { sizeList } from "../../../mock/mockProductCardTypeData";

export interface SidebarProps {
  filters: {
    categories: string[];
    brands: string[];
    sizes: number[];
    priceRange: number[];
  };
  onFilterChange(
    type: "categories" | "brands" | "sizes" | "priceRange",
    value: string | number[],
    checked?: boolean
  ): void;
}

const Sidebar = ({ filters, onFilterChange }: SidebarProps) => {
  const handleCheckboxChange = (type: "categories" | "brands", name: string, checked: boolean) => {
    onFilterChange(type, name, checked);
  };

  const sidebarItems = [
    {
      name: "New in Closet",
      count: 50,
    },
    {
      name: "Featured Items",
      count: 50,
    },
    {
      name: "Men's Wear",
      count: 50,
    },
    {
      name: "Women's Wear",
      count: 50,
    },
    {
      name: "Kids' Wear",
      count: 50,
    },
    {
      name: "Sports Shoes",
      count: 50,
    },
    {
      name: "Sports Equipment ",
      count: 50,
    },
    {
      name: "Shoes",
      count: 50,
    },
    {
      name: "Apparel",
      count: 50,
    },
    {
      name: "Equipment",
      count: 50,
    },
  ];
  const brands = [
    {
      name: "Nike",
      count: 50,
    },
    {
      name: "Puma",
      count: 50,
    },
    {
      name: "Adidas",
      count: 50,
    },
    {
      name: "Reebok",
      count: 50,
    },
    {
      name: "New Balance",
      count: 50,
    },
    {
      name: "Skechers",
      count: 50,
    },
    {
      name: "Others",
      count: 50,
    },
  ];

  const items: MenuProps["items"] = sizeList.map((item, index) => ({
    key: index,
    label: (
      <Link onClick={() => handleSizeSelect(item.name)} to={""} rel="noopener noreferrer">
        {item.name}
      </Link>
    ),
  }));
  const [priceRange, setPriceRange] = useState(filters.priceRange || [10, 650]);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleSizeSelect = (size: string) => {
    setSelectedSize(size);
    onFilterChange("sizes", size, true);
  };
  const handlePriceChange = (newRange: number[]) => {
    setPriceRange(newRange);
    onFilterChange("priceRange", newRange);
  };
  return (
    <div className="sidebar">
      <div className="sidebar__section">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__list">
          {sidebarItems.map((item, index) => (
            <li key={index} className="sidebar__item">
              <label className="sidebar__item__inner">
                <input
                  onChange={(e) => handleCheckboxChange("categories", item.name, e.target.checked)}
                  name={item.name}
                  type="checkbox"
                  className="sidebar__checkbox"
                />
                <div>
                  {item.name} ({item.count})
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__section">
        <h3 className="sidebar__title">Brands</h3>
        <ul className="sidebar__list">
          {brands.map((item, index) => (
            <li key={index} className="sidebar__item">
              <label className="sidebar__item__inner">
                <input
                  onChange={(e) => handleCheckboxChange("brands", item.name, e.target.checked)}
                  name={item.name}
                  type="checkbox"
                  className="sidebar__checkbox"
                />
                <div>
                  {item.name} ({item.count})
                </div>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__section">
        <h3 className="sidebar__title">Size</h3>
        <div className="sidebar__sizes">
          <Dropdown menu={{ items }} placement="bottom">
            <Button>
              {selectedSize || "Select size"} <IoMdArrowDropdown />
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="sidebar__section">
        <h3 className="sidebar__title">Price</h3>
        <div className="sidebar__price-range">
          <Slider
            min={0}
            max={1000}
            range={{ draggableTrack: true }}
            value={priceRange}
            onChange={handlePriceChange}
            tooltip={{ open: true }}
          />
          <div className="sidebar__price-values">
            <div className="price-wrapper">
              <p>Min price</p>
              <InputComponent value={`$${priceRange[0]}`} placeholder="Min price" />
            </div>

            <div className="price-wrapper">
              <p>Max price</p>
              <InputComponent value={`$${priceRange[1]}`} placeholder="Max price" />
            </div>
          </div>
        </div>
        <button className="sidebar__clear-filter">Clear All Filter</button>
      </div>
      <div className="sidebar__img">
        <img src={questionIMG} alt="" />
      </div>
    </div>
  );
};

export default Sidebar;
