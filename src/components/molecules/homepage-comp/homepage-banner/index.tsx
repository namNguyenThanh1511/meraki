import { bannerShoes, tennisbanner } from "../../../../assets/constant";
import "./index.scss";
import ButtonComponent from "../../../atoms/button";
export default function HomePageBanner() {
  return (
    <div className="homepage__banner">
      <div className="homepage__banner__background">
        <img className="homepage__banner__background__img" src={tennisbanner} alt="" />
        <div className="homepage__banner__content">
          <div className="homepage__banner__content__left">
            <h1>Play More, </h1>
            <h1>Pay Less</h1>
            <p>
              Welcome to Your Ultimate Destination for Gently Used Sporting Excellence – Where the
              Game Never Ends, and the Savings Are Endless!
            </p>
            <ButtonComponent
              textColour=""
              width={"150px"}
              height={"45px"}
              shape="square"
              bgColour="#FA7D0B"
            >
              Shop Now
            </ButtonComponent>
          </div>
          <div className="homepage__banner__content__right">
            <svg className="homepage__banner__content__right__sports" viewBox="0 0 500 400">
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(90)">
                  <stop offset="0%" stop-color="#ff7a00" />
                  <stop offset="100%" stop-color="#280099" />
                </linearGradient>
              </defs>
              <text
                x="0"
                y="150"
                font-size="200"
                font-weight="bold"
                fill="none"
                stroke="url(#gradient)"
                stroke-width="2"
                textAnchor="middle"
              >
                <tspan x="50%" dy="0">
                  SPO
                </tspan>
                <tspan x="50%" dy="200">
                  RTS
                </tspan>
              </text>
            </svg>

            <div className="homepage__banner__content__right__shoe">
              <img
                className="homepage__banner__content__right__shoe__img"
                src={bannerShoes}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
