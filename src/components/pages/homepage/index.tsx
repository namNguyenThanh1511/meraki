import HomePageBanner from "../../molecules/homepage-comp/homepage-banner";
import HomepageBrands from "../../molecules/homepage-comp/homepage-brands";
import Homepage2Image from "../../molecules/homepage-comp/homepage-2image";
import HomepageFeature from "../../molecules/homepage-comp/homepage-featured";
import HomepageSlogan from "../../molecules/homepage-comp/homepage-slogan";
import HomepageBestSeller from "../../molecules/homepage-comp/homepage-bestseller";
import HomePageQuestion from "../../molecules/homepage-comp/homepage-question";
import HomepageLatestUpdate from "../../molecules/homepage-comp/homepage-latestupdate";

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
      <div className="homepage__slogan">
        <HomepageSlogan />
      </div>
      <div className="homepage__bestseller">
        <HomepageBestSeller />
      </div>
      <div className="homepage__questions">
        <HomePageQuestion />
      </div>
      <div className="homepage__latest-update">
        <HomepageLatestUpdate />
      </div>
    </div>
  );
}
