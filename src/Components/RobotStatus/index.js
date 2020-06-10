import React from "react";
import "./styles.scss";

import Gear from "../../Assets/gear.svg";
import Pin from "../../Assets/pin.svg";
import Rotation from "../../Assets/rotation.svg";
import Velocimeter from "../../Assets/velocimeter.svg";

import Turtlebot from "../../Assets/turtlebot-svg.svg";

export default function RobotStatus() {
  return (
    <div className="robotStatusContainer">
      <div className="robotStatusContainer__title">
        <h1 className="robotStatusContainer__title-h1">Robots Status</h1>
        <img
          className="robotStatusContainer__title-icon"
          src={Gear}
          alt="Gear icon"
        />
      </div>
      <div className="robotStatusContainer__container">
        <img
          className="robotStatusContainer__container-image"
          src={Turtlebot}
          alt="Turtlebot"
        />
        <div className="robotStatusContainer__container__position">
          <img
            className="robotStatusContainer__container__position-icon"
            src={Pin}
            alt="Position Icon"
          />
          <h1 className="robotStatusContainer__container__position-x">X:135</h1>
          <h1 className="robotStatusContainer__container__position-y">Y:225</h1>
          <h1 className="robotStatusContainer__container__position-z">Z:3</h1>
        </div>
        <div className="robotStatusContainer__container__rotation">
          <img
            className="robotStatusContainer__container__rotation-icon"
            src={Rotation}
            alt="Rotation Icon"
          />
          <h1 className="robotStatusContainer__container__rotation-value">
            Rotation: 235
          </h1>
        </div>
        <div className="robotStatusContainer__container__speed">
          <img
            className="robotStatusContainer__container__speed-icon"
            src={Velocimeter}
            alt="speed Icon"
          />
          <h1 className="robotStatusContainer__container__speed-title">
            Speed
          </h1>
          <h1 className="robotStatusContainer__container__speed-x">
            X:15
          </h1>
          <h1 className="robotStatusContainer__container__speed-y">
            Y:22
          </h1>
        </div>
      </div>
    </div>
  );
}
