import Sidebar from "../../molecules/sidebar";
import ProductList from "../../molecules/product-list";
import mockProductCardTypeData from "../../../mock/mockProductCardTypeData";
import "./index.scss";
import { useState } from "react";
import { Product } from "../../../model/product";
export default function ProductsPage() {
  const [filters, setFilters] = useState<{
    categories: string[];
    brands: string[];
    sizes: number[];
    priceRange: number[];
  }>({
    categories: [],
    brands: [],
    sizes: [],
    priceRange: [0, 1000],
  });

  const handleFilterChange = (
    type: "categories" | "brands" | "sizes" | "priceRange",
    value: string | number[],
    checked?: boolean
  ) => {
    setFilters((prevFilters) => {
      if (type === "priceRange" && Array.isArray(value)) {
        return { ...prevFilters, priceRange: value };
      }

      if (type === "sizes") {
        const updatedValues = checked
          ? [...prevFilters.sizes, Number(value)]
          : prevFilters.sizes.filter((item) => item !== Number(value));

        return { ...prevFilters, sizes: updatedValues };
      }

      if (type === "categories" || type === "brands") {
        const updatedValues = checked
          ? [...prevFilters[type], value as string]
          : prevFilters[type].filter((item) => item !== value);

        return { ...prevFilters, [type]: updatedValues };
      }

      return prevFilters;
    });
  };

  const filteredProducts = mockProductCardTypeData.filter((product: Product) => {
    const categoryMatch =
      filters.categories.length === 0 || filters.categories.includes(product.category);
    const brandMatch =
      filters.brands.length === 0 || (product.brand && filters.brands.includes(product.brand));

    const sizeMatch =
      filters.sizes.length === 0 ||
      filters.sizes.some((size) => product.sizeRange[0] <= size && size <= product.sizeRange[1]);

    const priceMatch =
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1];

    return categoryMatch && brandMatch && sizeMatch && priceMatch;
  });

  return (
    <div className="products-page">
      <div className="products-page__sidebar">
        <Sidebar filters={filters} onFilterChange={handleFilterChange} />
      </div>
      <div className="products-page__list">
        <ProductList list={filteredProducts} />
      </div>
    </div>
  );
}
