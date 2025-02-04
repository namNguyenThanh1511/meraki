import { useState } from "react";
import ProductCard from "../card";

import "./index.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import HorizontalProductCard from "../card-horizon";
import { CiBoxList, CiGrid41 } from "react-icons/ci";
import { FaListUl } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { Product } from "../../../model/product";
import { Dropdown, MenuProps } from "antd";
import { Link } from "react-router-dom";
import { IoMdArrowDropdown } from "react-icons/io";
export interface ProductListProps {
  list: Product[];
}

export default function ProductList({ list = [] }: ProductListProps) {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const [isGridView, setIsGridView] = useState(true); // Chế độ hiển thị: true = Grid View, false = List View

  const productsPerPage = 8; // Số sản phẩm trên mỗi trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = list.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(list.length / productsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  const sortOptions = [
    {
      name: "Popularity",
    },
    {
      name: "Rate",
    },
  ];
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0].name);
  const items: MenuProps["items"] = sortOptions.map((item, index) => ({
    key: index,
    label: (
      <Link onClick={() => setSelectedSortOption(item.name)} to={""} rel="noopener noreferrer">
        {item.name}
      </Link>
    ),
  }));
  return (
    <div className="product-list__wrapper">
      <div className="product-list__header">
        <div className="product-list__header__count">
          Showing {indexOfFirstProduct + 1} - {indexOfLastProduct} of {list.length} results
        </div>
        <div className="product-list__header__sort">
          <div className="product-list__header__sort__by custom-border ">Sort by</div>
          <div className="product-list__header__sort__item">
            <Dropdown menu={{ items }} placement="bottom">
              <div>
                {selectedSortOption} <IoMdArrowDropdown />
              </div>
            </Dropdown>
          </div>
        </div>
        {/* Thanh chuyển đổi chế độ hiển thị */}
        <div className="product-list__view-toggle">
          {isGridView ? (
            <BsFillGridFill />
          ) : (
            <CiGrid41
              className={`toggle-button ${isGridView ? "active" : ""}`}
              onClick={() => setIsGridView(true)}
            />
          )}

          {!isGridView ? (
            <FaListUl />
          ) : (
            <CiBoxList
              className={`toggle-button ${!isGridView ? "active" : ""}`}
              onClick={() => setIsGridView(false)}
            />
          )}
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className={`product-list ${isGridView ? "grid-view" : "list-view"}`}>
        {currentProducts.map((product, index) =>
          isGridView ? (
            <div key={index} className="product-list__item">
              <ProductCard item={product} />
            </div>
          ) : (
            <div key={index} className="product-list__item">
              <HorizontalProductCard item={product} />
            </div>
          )
        )}
      </div>

      {/* Phân trang */}
      <div className="product-list__pagination">
        <MdArrowBackIos
          className={`${currentPage === 1 ? "disable" : ""} product-list__pagination__arrow`}
          onClick={() => handlePageChange(currentPage - 1)}
        />

        {Array.from({ length: totalPages }, (_, index) => (
          <div
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={
              currentPage === index + 1
                ? "product-list__pagination__item active"
                : "product-list__pagination__item"
            }
          >
            {index + 1}
          </div>
        ))}

        <MdArrowForwardIos
          className={`${
            currentPage === totalPages ? "disable" : ""
          } product-list__pagination__arrow`}
          onClick={() => handlePageChange(currentPage + 1)}
        />
      </div>
    </div>
  );
}
