import { featureFive, featureFour, featureOne, featureThree, featureTwo } from "../assets/constant";
import { ProductCardType } from "../model/product";

const mockProductCardTypeData: ProductCardType[] = [
  {
    id: 1,
    name: "Nike Air Max 90",
    category: "Shoes",
    imgUrl: featureOne,
    price: 120,
    discount: 10, // 10% giảm giá
  },
  {
    id: 2,
    name: "Adidas Ultraboost 22",
    category: "Apparel",
    imgUrl: featureTwo,
    price: 180,
    discount: 15,
  },
  {
    id: 3,
    name: "Converse Chuck Taylor",
    category: "Apparel",
    imgUrl: featureThree,
    price: 70,
    discount: 5,
  },
  {
    id: 4,
    name: "Puma RS-X",
    category: "Equipment",
    imgUrl: featureFour,
    price: 100,
    discount: 20,
  },
  {
    id: 5,
    name: "New Balance 574",
    category: "Equipment",
    imgUrl: featureFive,
    price: 90,
    discount: 0,
  },
  {
    id: 6,
    name: "ASICS Gel-Kayano 28",
    category: "Apparel",
    imgUrl: featureFour,
    price: 160,
    discount: 10,
  },
  {
    id: 7,
    name: "Reebok Nano X2",
    category: "Shoes",
    imgUrl: featureThree,
    price: 130,
    discount: 15,
  },
  {
    id: 8,
    name: "Vans Old Skool",
    category: "Shoes",
    imgUrl: featureTwo,
    price: 65,
    discount: 0,
  },
  {
    id: 9,
    name: "Under Armour HOVR Phantom 2",
    category: "Shoes",
    imgUrl: featureOne,
    price: 140,
    discount: 10,
  },
  {
    id: 10,
    name: "Jordan 1 Retro High",
    category: "Equipment",
    imgUrl: featureTwo,
    price: 200,
    discount: 25,
  },
];

export default mockProductCardTypeData;
