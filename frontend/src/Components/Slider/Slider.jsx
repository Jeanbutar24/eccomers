import "./Slider.css";
import { sliderItems } from "../../data";
import { left, right } from "../../icons/index";
import { useState } from "react";
import { Link } from "react-router-dom";
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };
  return (
    <div className="containerSlider">
      <div onClick={() => handleClick("left")} className={`left`}>
        <img src={left} alt="" width={30} height={30} />
      </div>
      <div
        className={`wrapper`}
        style={{ transform: `translateX(${-100 * slideIndex}vw)` }}>
        {sliderItems.map((item, index) => (
          <div className={`slideContainer`} key={index}>
            <div className={`image`}>
              <img
                src={item.img}
                width="400px"
                height="600px"
                objectFit="contain"
                alt=""
              />
            </div>
            <div className={`info`}>
              <h1>{item.title}</h1>
              <p>{item.desc}</p>
              <Link to="/product" style={{ textDecoration: "none" }}>
                <button>Buy Me</button>
              </Link>
            </div>
          </div>
        ))}

        <div onClick={() => handleClick("right")} className={`right`}>
          <img src={right} alt="" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Slider;
