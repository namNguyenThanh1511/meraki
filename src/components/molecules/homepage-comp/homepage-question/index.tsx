import { FaArrowRight, FaPlus } from "react-icons/fa";
import { questionIMG } from "../../../../assets/constant";
import "./index.scss";
import { useState } from "react";
import { GrSubtract } from "react-icons/gr";
import { Link } from "react-router-dom";
export default function HomePageQuestion() {
  const [activeIndex, setOnActiveIndex] = useState<number>(1);
  const questions = [
    {
      title: "How do I determine the right size for my sportswear?",
      description:
        "We provide a detailed size guide on each product page to help you find the perfect fit. You can refer to the measurements and follow our ideal sizing recommendations. If you have any specific questions about sizing, feel free to reach out to our customer support team for assistance.",
    },
    {
      title: "How long does shipping my order take?",
      description:
        "We provide a detailed size guide on each product page to help you find the perfect fit. You can refer to the measurements and follow our ideal sizing recommendations. If you have any specific questions about sizing, feel free to reach out to our customer support team for assistance.",
    },
    {
      title: "Do you offer international shipping?",
      description:
        "We provide a detailed size guide on each product page to help you find the perfect fit. You can refer to the measurements and follow our ideal sizing recommendations. If you have any specific questions about sizing, feel free to reach out to our customer support team for assistance.",
    },
  ];
  const handleOnChangeActiveIndex = (index: number) => {
    setOnActiveIndex(index);
  };
  return (
    <div className="homepage__question">
      <div className="homepage__question__image">
        <div className="homepage__question__image__backdrop">
          <img src={questionIMG} alt="" />
          <div className="homepage__question__image__content">
            <div className="homepage__question__image__content__title">REACH THE PEAK</div>
            <div className="homepage__question__image__content__description">
              <p>Discover the perfect gear</p>
              <p> to elevate your performance.</p>
            </div>
            <div className="homepage__question__image__content__more">
              <Link to={""}>
                <div className="homepage__question__image__content__more__text">Explore More</div>

                <div className="homepage__question__image__content__more__arrow">
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="homepage__question__content">
        <div className="homepage__question__content__title">Questions</div>
        <div className="homepage__question__content__questions">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`homepage__question__content__questions__item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div className="homepage__question__content__questions__item__title">
                <div className="homepage__question__content__questions__item__title__text">
                  {question.title}
                </div>
                <div className="homepage__question__content__questions__item__title__collapse ">
                  {activeIndex === index ? (
                    <GrSubtract onClick={() => handleOnChangeActiveIndex(-1)} />
                  ) : (
                    <FaPlus onClick={() => handleOnChangeActiveIndex(index)} />
                  )}
                </div>
              </div>
              <div className="homepage__question__content__questions__item__description">
                {question.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
