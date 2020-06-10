import React from "react";
import "./styles.scss";

import Turtlebot from "../../Assets/turtlebot-icon.svg";
import On from "../../Assets/on.svg";
import Off from "../../Assets/off.svg";

export default function RobotItem({ id, status, clicked, robot }) {
  return (
    <div className="robotItemContainer" style={{opacity: robot === id ? '1' : '0.5'}} onClick={clicked}>
      <img
        className="robotItemContainer-turtlebot"
        src={Turtlebot}
        alt="turtlebot icon"
      />
      <h1 className="robotItemContainer-id">ID:</h1>
      <h2 className="robotItemContainer-value">{id}</h2>
      <h1 className="robotItemContainer-status">Status:</h1>
      <img
        className="robotItemContainer-light"
        src={status === "online" ? On : Off}
        alt="Robot General Status Indicator"
      />
    </div>
  );
}
