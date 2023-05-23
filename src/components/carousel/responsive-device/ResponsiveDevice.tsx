import React, { useState } from "react";
import RadioButton from "./RadioButton";
import Screen from "./Screen";

export default function ResponsiveDevice() {
  const [option, setOption] = useState<string>("mobile");
  return (
    <div className="resp-device">
      <RadioButton option={option} setOption={setOption} />
      <div className={`box ${option}`}>
        <Screen option={option} />
      </div>
      <div className={`phone-notch ${option}-notch`}></div>
    </div>
  );
}
