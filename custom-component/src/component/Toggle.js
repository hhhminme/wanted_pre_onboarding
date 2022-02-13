import React, { useState } from "react";

const Toggle = ({ componentName }) => {
  const [toggleState, setToggleState] = useState("OFF");
  const handleToggleClick = () => {
    toggleState === "OFF" ? setToggleState("ON") : setToggleState("OFF");
  };

  return (
    <section className="componentbg">
      <div>
        <h1 className="font-bold">{componentName}</h1>
      </div>
      <div className="flex justify-center">
        <div className="flex-col mt-14 w-[140px]">
          <label className="relative">
            <input
              type="checkbox"
              className="absolute left-1/2 -translate-x-1/2 w-full h-full peer appearance-none rounded-md cursor-pointer"
              onClick={handleToggleClick}
            />
            <span className="togglebox duration-300 ease-in-out peer-checked:bg-purple-700 toggleslide after:duration-300 peer-checked:after:translate-x-6 sm:peer-checked:after:translate-x-10 group-hover:after:translate-x-1"></span>
            Toggle Switch {toggleState}
          </label>
        </div>
      </div>

      {/* <p className="mt-1 text-center text-sm sm:text-lg">
        Toggle Switch {toggleState}
      </p> */}
    </section>
  );
};

export default Toggle;
