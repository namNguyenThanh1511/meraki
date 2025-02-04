export interface ProductCardType {
  id: number;
  name: string;
  category: string;
  imgUrl: string;
  price: number;
  discount: number;
}

// src/models/Product.ts
export interface Product {
  id: number; // Unique identifier
  name: string; // Tên sản phẩm
  category: string; // Danh mục sản phẩm
  description: string; // Mô tả sản phẩm
  price: number; // Giá sản phẩm
  rating: number; // Điểm đánh giá
  reviewCount: number; // Số lượng đánh giá
  stock: number; // Số lượng tồn kho
  features: string[]; // Các đặc điểm nổi bật
  image: string; // URL ảnh sản phẩm
  colorsAvailable: number; // Số lượng màu sắc có sẵn
  sizeRange: [number, number]; // Dải size (VD: từ 36 đến 45)
  discount: number;
  sale?: number;
}
