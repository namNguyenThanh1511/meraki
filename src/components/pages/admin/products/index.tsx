import mockProductCardTypeData from "../../../../mock/mockProductCardTypeData";
import AdminProductCard from "../../../molecules/admin-product-card";
import styles from "./AdminProductsPage.module.scss";
function AdminProductsPage() {
  return (
    <div className={styles.adminProductPageWrapper}>
      {mockProductCardTypeData.map((product, index) => (
        <div className={styles.adminProductPageWrapper__item} key={index}>
          <AdminProductCard item={product} />
        </div>
      ))}
    </div>
  );
}

export default AdminProductsPage;
