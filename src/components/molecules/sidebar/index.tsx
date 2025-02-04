import { Button, Dropdown, MenuProps, Slider } from "antd";
import "./index.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import InputComponent from "../../atoms/input";
import { questionIMG } from "../../../assets/constant";

const Sidebar = () => {
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
  const sizeList = [
    {
      name: "39",
    },
    {
      name: "40",
    },
    {
      name: "41",
    },
    {
      name: "42",
    },
    {
      name: "43",
    },
    {
      name: "44",
    },
  ];
  const items: MenuProps["items"] = sizeList.map((item, index) => ({
    key: index,
    label: (
      <Link onClick={() => setSelectedSize(item.name)} to={""} rel="noopener noreferrer">
        {item.name}
      </Link>
    ),
  }));
  const [selectedSize, setSelectedSize] = useState(sizeList[0].name);
  return (
    <div className="sidebar">
      <div className="sidebar__section">
        <h3 className="sidebar__title">Categories</h3>
        <ul className="sidebar__list">
          {sidebarItems.map((item, index) => (
            <li key={index} className="sidebar__item">
              <label className="sidebar__item__inner">
                <input type="checkbox" className="sidebar__checkbox" />
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
                <input type="checkbox" className="sidebar__checkbox" />
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
              {selectedSize} <IoMdArrowDropdown />
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="sidebar__section">
        <h3 className="sidebar__title">Price</h3>
        <div className="sidebar__price-range">
          <Slider min={0} max={1000} range={{ draggableTrack: true }} defaultValue={[10, 650]} />
          <div className="sidebar__price-values">
            <div className="price-wrapper">
              <p>Min price</p>
              <InputComponent value="$10" placeholder="Min price" />
            </div>

            <div className="price-wrapper">
              <p>Max price</p>
              <InputComponent value="$650" placeholder="Max price" />
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
