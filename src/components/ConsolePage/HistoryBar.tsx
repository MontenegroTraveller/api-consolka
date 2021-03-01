import React from "react"
import greenState from "./images/green-state.svg"
import elementDots from "./images/history-dots.svg"

const HistoryBar: React.FC = () => {
  return (
    <div className="history-bar">
      <div className="element-block">
        <img src={greenState} alt="green state" />
        <span className="element-block__span">track.get</span>
        <img src={elementDots} alt="dots" />
      </div>
    </div>
  );
}

export default HistoryBar