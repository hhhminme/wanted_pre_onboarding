import React from "react";

const Tab = ({ componentName }) => {
  return (
    <section className="componentbg">
      <div>
        <h1 className="font-bold">{componentName}</h1>
      </div>
      <div className="items-center">
        <div></div>
      </div>
    </section>
  );
};

export default Tab;
