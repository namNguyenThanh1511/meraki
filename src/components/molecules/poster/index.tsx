import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import "./index.scss";

export interface PosterType {
  img: string;
  header?: string;
  title?: string;
  description?: string;
  linkText?: string;
  link?: string;
}

export interface PosterProps {
  item: PosterType;
}

export default function Poster({
  item: { img, header, title, description, linkText, link = "/" },
}: PosterProps) {
  return (
    <div className="poster">
      <div className="poster__backdrop">
        <img src={img} alt="" />
        <div className="poster__backdrop__overlay"></div>
        <div className="poster__content">
          {header && <div className="poster__content__header">{header}</div>}
          {title && <div className="poster__content__title">{title}</div>}
          {description && <div className="poster__content__description">{description}</div>}
          <Link className="poster__content__link" to={link}>
            <div className="poster__content__link__text">{linkText}</div>
            <div className="poster__content__link__icon">
              <FaArrowRight />
            </div>
          </Link>
        </div>
        <div className="poster__blank"></div>
      </div>
    </div>
  );
}
