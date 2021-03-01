import React from "react"
import NavPanel from "./NavPanel"
import HistoryBar from "./HistoryBar"
import QuerryBoard from "./QuerryBoard"

const ConsolePage: React.FC = () => {
  return (
    <div className="console-app">
      <NavPanel />
      <HistoryBar />
      <QuerryBoard />
    </div>
  );
}

export default ConsolePage