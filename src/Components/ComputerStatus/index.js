import React from "react";
import "./styles.scss";

import Computer from "../../Assets/computer.svg";
import Battery from "../../Assets/battery.svg";
import Off from "../../Assets/off.svg";

export default function ComputerStatus() {
  return (
    <div className="computerStatusContainer">
      <div className="computerStatusContainer__title">
        <img
          className="computerStatusContainer__title-icon"
          src={Computer}
          alt="Computer icon"
        />
        <h1 className="computerStatusContainer__title-h1">Computer Status</h1>
      </div>
      <div className="computerStatusContainer__container">
        <img className="computerStatusContainer__container-icon" src={Battery} alt="Battery Icon Indicator"/>
        <h1 className="computerStatusContainer__container-battery">Battery:</h1>
        <h2 className="computerStatusContainer__container-value">22%</h2>
        <img className="computerStatusContainer__container-status" src={Off} alt="Off Status light"/>
      </div>
    </div>
  );
}
