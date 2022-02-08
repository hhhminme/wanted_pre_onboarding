import React, { useState } from "react";

const Tab = ({ componentName }) => {
  const tabs = ["Tab1", "Tab2", "Tab3"];
  const [tabActiveState, setTabActiveState] = useState(0);
  const clickHandler = (idx) => {
    setTabActiveState(idx);
  };

  const contentObj = {
    0: <p>Tab menu ONE</p>,
    1: <p>Tab menu TWO</p>,
    2: <p>Tab menu THREE</p>,
  };

  const tabList = tabs.map((tab, idx) => (
    <li
      className={`${
        tabActiveState === idx
          ? " bg-purple-700 text-white"
          : "bg-gray-200 text-gray-400"
      } w-1/3 duration-200 ease-in-out font-semibold`}
      key={idx}
      onClick={() => {
        clickHandler(idx);
      }}
    >
      {tab}
    </li>
  ));
  return (
    <section className="componentbg">
      <div>
        <div className="flex h-10">
          <h1 className="font-bold">{componentName}</h1>
          <ul className="flex w-full bg-gray-200 pl-6">{tabList}</ul>
        </div>
      </div>
      <div className="text-center mt-20">{contentObj[tabActiveState]}</div>
    </section>
  );
};

export default Tab;
