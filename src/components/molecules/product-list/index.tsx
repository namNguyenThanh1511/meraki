import { useState } from "react";
import mockProductCardTypeData from "../../../mock/mockProductCardTypeData";
import ProductCard from "../card";
import "./index.scss";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
export default function ProductList() {
  const [currentPage, setCurrentPage] = useState(1); // Trang hiện tại
  const productsPerPage = 8; // Số sản phẩm trên mỗi trang
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = mockProductCardTypeData.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(mockProductCardTypeData.length / productsPerPage);
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
  return (
    <>
      <div className="product-list">
        {currentProducts.map((product, index) => (
          <div key={index} className="product-list__item">
            <ProductCard item={product} />
          </div>
        ))}
        {/* Phân trang */}
      </div>
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
    </>
  );
}
