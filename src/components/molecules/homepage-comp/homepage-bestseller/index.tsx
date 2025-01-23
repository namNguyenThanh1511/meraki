import ProductList from "../../product-list";
import "./index.scss";

export default function HomepageBestSeller() {
  return (
    <div>
      <div className="homepage__bestseller__header">
        <div className="homepage__bestseller__header__title">
          <h2>Best Seller</h2>
        </div>
        <div className="homepage__bestseller__header__sort">
          <div className="homepage__bestseller__header__sort__by custom-border ">Sort by</div>
          <div className="homepage__bestseller__header__sort__all">All product</div>
        </div>
      </div>
      <div className="homepage__bestseller__body">
        <ProductList />
      </div>
    </div>
  );
}
