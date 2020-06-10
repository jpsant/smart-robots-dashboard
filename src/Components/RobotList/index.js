import React, { useState } from "react";
import "./styles.scss";

import Data from "../../Data/data.json";

import RobotItem from "../RobotItem";

import List from "../../Assets/list.svg";
import Lupa from "../../Assets/lupa.svg";

export default function RobotList({ selectedRobot }) {
  const [selected, robotHandler] = useState('');

  return (
    <div className="robotListContainer">
      <div className="robotListContainer__title">
        <img
          className="robotListContainer__title-list"
          src={List}
          alt="List icon"
        />
        <h1 className="robotListContainer__title-h1">Robot List</h1>
        <img
          className="robotListContainer__title-lupa"
          src={Lupa}
          alt="Magnifying glass icon"
        />
      </div>
      <div className="robotListContainer__list">
        {Data.map((robot) => (
          <RobotItem
            clicked={() => {
              selectedRobot(robot);
              robotHandler(robot.id);
            }}
            robot={selected}
            key={robot.id}
            id={robot.id}
            status={robot.status}
          />
        ))}
      </div>
    </div>
  );
}
