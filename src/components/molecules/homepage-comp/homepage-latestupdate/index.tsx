import { Link } from "react-router-dom";
import { mockBlogCardTypeData } from "../../../../mock/mockBlogCardTypeData";
import Carousel from "../../swiper/carousel";
import "./index.scss";
import { FaArrowRight } from "react-icons/fa";
export default function HomepageLatestUpdate() {
  return (
    <div>
      <div className="homepage__latest-update__header">
        <div className="homepage__latest-update__title">Latest Updates</div>
        <Link className="homepage__latest-update__right" to="/">
          <div className="homepage__latest-update__view-all">See All Article</div>
          <div className="homepage__latest-update__arrow">
            <FaArrowRight />
          </div>
        </Link>
      </div>
      <Carousel items={mockBlogCardTypeData} cardType="blog" />
    </div>
  );
}
