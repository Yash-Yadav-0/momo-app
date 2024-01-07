import React from "react";
import BuffMomo from "../homepageImage/BuffMomo.png";
import BuffFryMomo from "../homepageImage/BuffFryMomo.png";
import BuffCMomo from "../homepageImage/BuffCMomo.png";

const BuffMenuData = [
  { id: 1, value: "Buff Momo", img: BuffMomo, text: "Rs.150" },
  { id: 2, value: "Buff Fry Momo", img: BuffCMomo, text: "Rs.180" },
  { id: 3, value: "Buff C. Momo", img: BuffFryMomo, text: "Rs.200" },
];

const MenuSlider = () => {
  return (
    <div className="menuSlider">
      {BuffMenuData.map((d) => (
        <div className="menuSlider-Card">
          <div className="menuSliderImageDiv">
            <img className="menuSliderImage" src={d.img} alt="" />
          </div>
          <div className="menuSliderTextSection">
            <p className="big-text-three">{d.value}</p>
            <p className="big-text-two">{d.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuSlider;
