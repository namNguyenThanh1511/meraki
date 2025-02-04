import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";

const ProductsFrame: React.FC<{
  children: React.ReactNode;
  title: string;
  subText: string;
  className?: string;
}> = ({ children, title, subText, className }) => {
  return (
    <div className={`frame-products ${className}`}>
      <div className="frame-products__header">
        <h2 className="frame-products__title">{title}</h2>
        <Link to={""} className="frame-products__view-all">
          {subText}
        </Link>
      </div>
      <div className="frame-products__carousel">{children}</div>
    </div>
  );
};

export default ProductsFrame;
