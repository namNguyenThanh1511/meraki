import { twoImageBadmintonImg, twoImageBasketImg } from "../../../../assets/constant";
import Poster, { PosterType } from "../../poster";
import "./index.scss";
export default function Homepage2Image() {
  const poster: PosterType = {
    img: twoImageBadmintonImg,
    header: "NEW UP!",
    title: "UNLEASH YOUR POTENTIAL",
    description: "Explore our wide range of high-quality sportswear.",
    linkText: "Shop now",
    link: "/shop",
  };
  const poster1: PosterType = {
    img: twoImageBasketImg,
    header: "OUR BEST",
    title: "STAY AHEAD OF THE GAMEL",
    description: "Upgrade your workout with our collection.",
    linkText: "Explore More",
    link: "/shop",
  };
  return (
    <div>
      <div className="homepage__2image__wrapper">
        <div className="homepage__2image__item">
          <Poster item={poster} />
        </div>
        <div className="homepage__2image__item">
          <Poster item={poster1} />
        </div>
      </div>
    </div>
  );
}
