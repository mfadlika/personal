import { useState } from "react";
import ResponsiveDevice from "../components/carousel/responsive-device/ResponsiveDevice";
import { ArrowLeftSVG } from "../../public/assets/svg";
import FoodMenu from "../components/carousel/food-menu/FoodMenu";
import Stats from "./stats";

export default function Work() {
  const [slide, setSlide] = useState<number>(0);

  const screen = [<ResponsiveDevice />, <FoodMenu />, <Stats />];

  function backSlideHandler() {
    if (slide === 0) {
      setSlide(0);
    } else {
      setSlide(slide - 1);
    }
  }

  function forwardSlideHandler() {
    if (slide === screen.length - 1) {
      setSlide(slide);
    } else {
      setSlide(slide + 1);
    }
  }
  return (
    <section
      id="work"
      className="flex justify-center items-center bg-slate-300"
    >
      <div className="box-container" key={slide}>
        {screen[slide]}
      </div>
      <div>
        <button className="gallery-back-button" onClick={backSlideHandler}>
          <ArrowLeftSVG fill="white" />
        </button>
        <button
          className="gallery-forward-button"
          onClick={forwardSlideHandler}
        >
          <ArrowLeftSVG fill="white" />
        </button>
      </div>
    </section>
  );
}
