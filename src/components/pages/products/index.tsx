import Sidebar from "../../molecules/sidebar";
import ProductList from "../../molecules/product-list";
import mockProductCardTypeData from "../../../mock/mockProductCardTypeData";
import "./index.scss";
export default function ProductsPage() {
  return (
    <div className="products-page">
      <div className="products-page__sidebar">
        <Sidebar />
      </div>
      <div className="products-page__list">
        <ProductList list={mockProductCardTypeData} />
      </div>
    </div>
  );
}
