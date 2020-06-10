import React from "react";
import "./styles.scss";

import Turtlebot from "../../Assets/turtlebot-icon.svg";
import On from "../../Assets/on.svg";
import Off from "../../Assets/off.svg";
import Warning from "../../Assets/warning.svg";

export default function RobotItem() {
  return (
    <div className="robotItemContainer">
      <img
        className="robotItemContainer-turtlebot"
        src={Turtlebot}
        alt="turtlebot icon"
      />
      <h1 className="robotItemContainer-id">ID:</h1>
      <h2 className="robotItemContainer-value">AEX12S33</h2>
      <h1 className="robotItemContainer-status">Status:</h1>
      <img
        className="robotItemContainer-light"
        src={On}
        alt="Robot General Status Indicator"
      />
    </div>
  );
}
