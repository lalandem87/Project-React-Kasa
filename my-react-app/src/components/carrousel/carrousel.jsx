import { useState } from "react";
import "./carrousel.scss";

export function Slider({ images, alt }) {
  const [indexImg, setIndexImg] = useState(0);
  const length = images.length;

  const nextImg = () => {
    setIndexImg(indexImg === length - 1 ? 0 : indexImg + 1);
  };

  const previousImg = () => {
    setIndexImg(indexImg === 0 ? length - 1 : indexImg - 1);
  };

  return (
    <div className="slider">
      <img className="slider__img" src={images[indexImg]} alt={alt} />
      {length > 1 && (
        <>
          <div className="slider__i">
            <i className="fa-solid fa-angle-left" onClick={previousImg}></i>
            <i className="fa-solid fa-angle-right" onClick={nextImg}></i>
          </div>

          <div className="slider__counter">
            {indexImg + 1}/ {length}
          </div>
        </>
      )}
    </div>
  );
}
