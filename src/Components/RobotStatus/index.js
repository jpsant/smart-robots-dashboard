import React from "react";
import "./styles.scss";

import Gear from "../../Assets/gear.svg";
import Pin from "../../Assets/pin.svg";
import Rotation from "../../Assets/rotation.svg";
import Velocimeter from "../../Assets/velocimeter.svg";
import Battery from "../../Assets/turtlebot-battery.svg";
import Engine from "../../Assets/engine.svg";
import On from "../../Assets/on.svg";
import Off from "../../Assets/off.svg";

import Turtlebot from "../../Assets/turtlebot-svg.svg";

export default function RobotStatus({ ...props }) {
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
            src={Rotation}
            alt="Rotation Icon"
          />

          <h1 className="robotStatusContainer__container__position-value">
            Rotation: {props.robot.rotation}
          </h1>
        </div>
        <div className="robotStatusContainer__container__rotation">
          <div className="robotStatusContainer__container__rotation-title">
          <img
            className="robotStatusContainer__container__rotation-title-icon"
            src={Pin}
            alt="Position Icon"
          />
            <h1 className="robotStatusContainer__container__rotation-title-x">
              X:{props.robot.posX}
            </h1>
            <h1 className="robotStatusContainer__container__rotation-title-y">
              Y:{props.robot.posY}
            </h1>
            <h1 className="robotStatusContainer__container__rotation-title-z">
              Z:{props.robot.posZ}
            </h1>
          </div>
          <div className="robotStatusContainer__container__rotation-container"></div>
        </div>
        <div className="robotStatusContainer__container__speed">
          <div className="robotStatusContainer__container__speed-title">
            <img
              className="robotStatusContainer__container__speed-title-icon"
              src={Velocimeter}
              alt="speed Icon"
            />
            <h1 className="robotStatusContainer__container__speed-title-title">
              Speed
            </h1>
            <h1 className="robotStatusContainer__container__speed-title-x">
              X:{props.robot.speedX}
            </h1>
            <h1 className="robotStatusContainer__container__speed-title-y">
              Y:{props.robot.speedY}
            </h1>
          </div>
          <div className="robotStatusContainer__container__speed-container"></div>
        </div>
        <div className="robotStatusContainer__container__battery">
          <h1 className="robotStatusContainer__container__battery-value">
            {props.robot.battery}%
          </h1>
          <img
            className="robotStatusContainer__container__battery-icon"
            src={Battery}
            alt="Turtlebot battery icon"
          />
        </div>
        <div className="robotStatusContainer__container__leftEngine">
          <div className="robotStatusContainer__container__leftEngine__title">
            <img
              className="robotStatusContainer__container__leftEngine__title-icon"
              src={Engine}
              alt="Turtlebot Engine Icon"
            />
            <h1 className="robotStatusContainer__container__leftEngine__title-h1">
              Left Engine
            </h1>
          </div>
          <div className="robotStatusContainer__container__leftEngine-container">
            <div className="robotStatusContainer__container__leftEngine-container-status">
              <h1>Status:</h1>
              <img
                src={props.robot.leftStatus === "online" ? On : Off}
                alt="Engine Status Light"
              />
            </div>
            <div className="robotStatusContainer__container__leftEngine-container-speed">
              <h1>Speed: {props.robot.leftSpeed}</h1>
            </div>
          </div>
        </div>
        <div className="robotStatusContainer__container__rightEngine">
          <div className="robotStatusContainer__container__rightEngine__title">
            <img
              className="robotStatusContainer__container__rightEngine__title-icon"
              src={Engine}
              alt="Turtlebot Engine Icon"
            />
            <h1 className="robotStatusContainer__container__rightEngine__title-h1">
              Right Engine
            </h1>
          </div>
          <div className="robotStatusContainer__container__rightEngine-container">
            <div className="robotStatusContainer__container__rightEngine-container-status">
              <h1>Status:</h1>
              <img
                src={props.robot.rightStatus === "online" ? On : Off}
                alt="Engine Status Light"
              />
            </div>
            <div className="robotStatusContainer__container__rightEngine-container-speed">
              <h1>Speed: {props.robot.rightSpeed}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
