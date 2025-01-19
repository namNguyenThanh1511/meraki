import "./index.scss";
import {
  adidasLogo,
  bitisLogo,
  liningLogo,
  nbLogo,
  nikeLogo,
  yonexLogo,
} from "../../../../assets/constant";
export default function HomepageBrands() {
  const brands = [
    {
      name: "Adidas",
      logo: adidasLogo,
    },
    {
      name: "Adidas",
      logo: nikeLogo,
    },
    {
      name: "Adidas",
      logo: nbLogo,
    },
    {
      name: "Adidas",
      logo: bitisLogo,
    },
    {
      name: "Adidas",
      logo: yonexLogo,
    },
    {
      name: "Adidas",
      logo: liningLogo,
    },
  ];
  return (
    <div className="">
      <div className="homepage__brands__title">Brands</div>
      <div className="homepage__brands__items">
        {brands.map((brand) => (
          <div className="homepage__brands__items__item">
            <img src={brand.logo} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}
