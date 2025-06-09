import { useState } from "react";
import ResponsiveDevice from "../components/carousel/responsive-device/ResponsiveDevice";
import { ArrowLeftSVG } from "../../public/assets/svg";
import FoodMenu from "../components/carousel/food-menu/FoodMenu";
import Stats from "../components/stats";
import { GetServerSideProps } from "next";
import { getStat } from "./api/server";

export default function Work(props: any) {
  const [slide, setSlide] = useState<number>(0);

  const screen = [
    <ResponsiveDevice key="0" />,
    <FoodMenu key="1" />,
    <Stats key="2" {...props} />,
  ];

  function backSlideHandler() {
    if (slide === 0) {
      setSlide(screen.length - 1);
    } else {
      setSlide(slide - 1);
    }
  }

  function forwardSlideHandler() {
    if (slide === screen.length - 1) {
      setSlide(0);
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const ip =
    ctx.req.headers["x-forwarded-for"] ||
    (ctx.req.socket.remoteAddress as string);

  var { graph, stats, city, country }: any = await getStat(ip, "works");

  return {
    props: {
      graph,
      stats,
      city,
      country,
    },
  };
};
