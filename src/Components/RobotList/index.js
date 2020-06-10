import React, { useState, useEffect } from "react";

import "./styles.scss";

import RobotItem from '../RobotItem';

import List from "../../Assets/list.svg";
import Lupa from "../../Assets/lupa.svg";

export default function RobotList() {
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
        <RobotItem />
        <RobotItem />
        <RobotItem />
        <RobotItem />
        <RobotItem />
        <RobotItem />
        <RobotItem />
        <RobotItem />
        <RobotItem />
      </div>
    </div>
  );
}
