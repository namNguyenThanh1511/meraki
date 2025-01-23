import { BlogCardType } from "../../../model/blog";
import "./index.scss";
export interface CardBlogProps {
  item: BlogCardType;
}
export default function CardBlog({ item }: CardBlogProps) {
  const handleConvertMonth = (month: number) => {
    const monthList = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthList[month];
  };
  return (
    <div className="card-blog">
      <div className="card-blog__backdrop">
        <div className="card-blog__backdrop__overlay"></div>
        <div className="card-blog__backdrop__calendar">
          <p>{item.date.getDay()}</p>
          <p>{handleConvertMonth(item.date.getMonth())}</p>
        </div>
        <img src={item.backdrop} alt="" />
      </div>
      <div className="card-blog__content">
        <div className="card-blog__content__title">{item.title}</div>
        <div className="card-blog__content__description">{item.author}</div>
      </div>
    </div>
  );
}
