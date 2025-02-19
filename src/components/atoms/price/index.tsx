import styles from "./Price.module.scss";
export interface PriceProps {
  price: number;
  saleOff: number;
  className?: string;
}

export default function Price({ price, saleOff, className }: PriceProps) {
  return (
    <div className={className}>
      {saleOff > 0 ? (
        <div className={styles.priceWrapper}>
          <span className={styles.price}>${(price * (1 - saleOff / 100)).toFixed(2)}</span>
          <span className={styles.price + " " + styles.saleOff}>${price.toFixed(2)}</span>
        </div>
      ) : (
        <span className={styles.price}>${price.toFixed(2)}</span>
      )}
    </div>
  );
}
