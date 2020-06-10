import React, { useState, useEffect } from "react";
import './styles.scss';

import RobotList from '../../Components/RobotList';
import ComputerStatus from '../../Components/ComputerStatus';
import RobotStatus from '../../Components/RobotStatus';

export default function ComponentsContainer() {

  const[selectedRobot, handleSelectedRobot] = useState({});

  return (
    <div className="componentsContainer">
      <div className="componentsContainer-components">
      <RobotList selectedRobot={(robot) => handleSelectedRobot(robot)} />
      <ComputerStatus />
      <RobotStatus robot={selectedRobot} />
      </div>
    </div>
  )
}
