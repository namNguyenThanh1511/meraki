import { twoImageBadmintonImg, twoImageBasketImg } from "../../../../assets/constant";
import "./index.scss";
export default function Homepage2Image() {
  return (
    <div>
      <div className="homepage__2image__wrapper">
        <div className="homepage__2image__item">
          <img src={twoImageBadmintonImg} alt="" />
        </div>
        <div className="homepage__2image__item">
          <img src={twoImageBasketImg} alt="" />
        </div>
      </div>
    </div>
  );
}
