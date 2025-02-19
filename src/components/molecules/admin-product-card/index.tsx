import React from "react";
import styles from "./AdminProductCard.module.scss";
import { FaArrowUp } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { Product } from "../../../model/product";
import Price from "../../atoms/price";
import TextSubstring from "../../atoms/TextSubstring";

interface ProductProps {
  item: Product;
}

const AdminProductCard: React.FC<ProductProps> = ({ item }) => {
  return (
    <div className={styles.card}>
      {/* Product Header */}
      <div className={styles.header}>
        <img src={item.image} alt={item.name} className={styles.image} />
        <div className={styles.info}>
          {/* <h2 className={styles.name}>
            {item.name.length > 20 ? item.name.substring(0, 20) + "..." : item.name}
          </h2> */}
          <TextSubstring str={item.name} limit={20} className={styles.name} />
          <p className={styles.category}>{item.category}</p>
          <p className={styles.price}>
            <Price price={item.price} saleOff={item.discount} />
          </p>
        </div>
        <HiDotsHorizontal className={styles.moreIcon} />
      </div>

      {/* Description */}
      <div className={styles.description}>
        <h3>Description</h3>
        <p>
          {item.description.length > 50
            ? item.description.substring(0, 50) + "..."
            : item.description}
        </p>
      </div>

      {/* Stats */}
      <div className={styles.stats}>
        <div className={styles.row}>
          <span className={styles.row__title}>Sales</span>
          <span className={styles.sales}>
            <FaArrowUp className={styles.arrowUp} /> {item.sale}
          </span>
        </div>
        <div className={styles.row}>
          <span className={styles.row__title}>Remaining Products</span>
          <div className={styles.progressBar}>
            <div
              className={styles.progress}
              style={{ width: `${(item.stock / ((item.sale ?? 0) + item.stock)) * 100}%` }}
            ></div>
          </div>
          <span className={styles.row__title}>{item.stock}</span>
        </div>
      </div>
    </div>
  );
};

export default AdminProductCard;
