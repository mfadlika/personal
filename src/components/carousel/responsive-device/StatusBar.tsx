import React from "react";
import { BatterySVG, WifiSVG } from "../../../../public/assets/svg";

export default function StatusBar({ option }: OptionProps) {
  return (
    <div className={`status-bar ${option}-status-bar flex justify-between`}>
      <div className="flex items-center pl-2 text-white">
        {new Date().getHours()}:
        {new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes()}
      </div>
      <div className="flex w-2/12 items-center justify-between pr-2">
        <WifiSVG height="75%" width="75%" fill="white" className="px-0.5" />
        <BatterySVG height="75%" width="75%" fill="white" className="px-0.5" />
      </div>
    </div>
  );
}
