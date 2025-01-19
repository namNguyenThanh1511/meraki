import HomePageBanner from "../../molecules/homepage-comp/homepage-banner";
import HomepageBrands from "../../molecules/homepage-comp/homepage-brands";
import Homepage2Image from "../../molecules/homepage-comp/homepage-2image";
import HomepageFeature from "../../molecules/homepage-comp/homepage-featured";

export default function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__banner">
        <HomePageBanner />
      </div>
      <div className="homepage__brands">
        <HomepageBrands />
      </div>
      <div className="homepage__2image">
        <Homepage2Image />
      </div>
      <div className="homepage__featured">
        <HomepageFeature />
      </div>
      <div className="homepage__card"></div>
      <div className="homepage__bestseller"></div>
      <div className="homepage__questions"></div>
      <div className="homepage__latest-update"></div>
    </div>
  );
}
