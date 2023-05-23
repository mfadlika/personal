import { useState } from "react";
import { BurgerSVG } from "../../../../public/assets/svg";

type Food = {
  id: number;
  name: string;
  desc: string;
  price: number;
};

const foodMenu: Food[] = [
  {
    id: 1,
    name: "Beef Steak with Sauce",
    desc: "A marinade to transform any steak by making it juicier, more tender and adding a hint of flavor. Made with dijon mustard, garlic, onion powder, soy sauce, Worcestershire sauce, and black pepper.",
    price: 25,
  },
  {
    id: 2,
    name: "Tuna Meat with Broccoli",
    desc: "A thick cut of tuna that can be grilled, seared, or baked served with broccoli. Tuna steak has a meaty texture and a mild flavor that can be enhanced with marinades, sauces, or spices.",
    price: 25,
  },
  {
    id: 3,
    name: "Rice Noodles with Egg",
    desc: "A delicious food made in no time with egg, rice noodles, and vegetables in a savory sauce. A simple and satisfying meal that can be customized with your favorite ingredients.",
    price: 25,
  },
  {
    id: 4,
    name: "Vegetables Salad",
    desc: "A crunchy and creamy salad made with fresh broccoli florets, bacon and sunflower seeds tossed in a mayonnaise-based dressing. A perfect side dish for potlucks and barbecues.",
    price: 25,
  },
];

export default function FoodMenu() {
  const [degree, setDegree] = useState<number>(90);

  return (
    <section id="food-menu">
      <main className="menu-main">
        <div className="menu-box w-8/12 h-5/6 bg-slate-500 mx-auto my-16">
          <div className="menu-specialties">
            <div className="typing-demo">OUR SPECIALTIES</div>
          </div>
          <div className="menu-bar">
            <BurgerSVG fill="white" height="100%" width="100%" />
          </div>
          <div className="flex justify-center mx-auto w-5/12 pl-12 pt-5">
            <div className="text-3xl">
              {foodMenu[(degree / 90 - 1) as number].name}
              <h5 className="menu-desc text-lg text-justify">
                {foodMenu[(degree / 90 - 1) as number].desc}
              </h5>
            </div>
          </div>
          <div className="menu-options">
            <button className="menu-card" onClick={() => setDegree(90)}>
              <div className="menu-option"></div>
              <span className="pt-5 flex text-center leading-4 text-xs">
                {foodMenu[0].name}
              </span>
            </button>
            <button className="menu-card" onClick={() => setDegree(180)}>
              <div className="menu-option"></div>
              <span className="pt-5 flex text-center leading-4 text-xs">
                {foodMenu[1].name}
              </span>
            </button>
            <button className="menu-card" onClick={() => setDegree(270)}>
              <div className="menu-option"></div>
              <span className="pt-5 flex text-center leading-4 text-xs">
                {foodMenu[2].name}
              </span>
            </button>
            <button className="menu-card" onClick={() => setDegree(360)}>
              <div className="menu-option"></div>
              <span className="pt-5 flex text-center leading-4 text-xs">
                {foodMenu[3].name}
              </span>
            </button>
          </div>
          <div
            className={`menu-wrap menu-rotate-${degree} grid grid-cols-2 gap-0`}
          >
            <div className="menu-plate"></div>
            <div className="menu-plate"></div>
            <div className="menu-plate"></div>
            <div className="menu-plate"></div>
          </div>
        </div>
      </main>
    </section>
  );
}
