import React, { useState } from "react";

const ClickToEdit = ({ componentName }) => {
  const [nameState, setNameState] = useState("허민");
  const [nameEditable, setNameEditable] = useState(false);
  const [ageState, setAgeState] = useState("25");
  const [ageEditable, setAgeEditable] = useState(false);

  // 이름
  const handleNameDoubleClick = () => {
    setNameEditable(true);
  };

  const handleNameChange = (e) => {
    setNameState(e.target.value);
  };

  const handleNameKeyDown = (e) => {
    if (e.key === "Enter") {
      setNameEditable(false);
    }
  };
  // 나이
  const handleAgeDoubleClick = () => {
    setAgeEditable(true);
  };

  const handleAgeChange = (e) => {
    setAgeState(e.target.value);
  };

  const handleAgeKeyDown = (e) => {
    if (e.key === "Enter") {
      setAgeEditable(false);
    }
  };

  return (
    <section className="componentbg">
      <div>
        <h1 className="font-bold">{componentName}</h1>
      </div>
      <div className="mt-5">
        <div className="flex justify-center mb-4">
          <label for="name">
            이름
            {nameEditable ? (
              <input
                id="name"
                type="text"
                value={nameState}
                onChange={handleNameChange}
                onKeyDown={handleNameKeyDown}
                className="border ml-2 w-40 text-center"
              />
            ) : (
              <p
                className="inline-block border ml-2 w-40 text-center"
                onDoubleClick={handleNameDoubleClick}
              >
                {nameState}
              </p>
            )}
          </label>
        </div>
        <div className="flex justify-center mb-4">
          <label for="age">
            나이
            {ageEditable ? (
              <input
                id="age"
                type="number"
                value={ageState}
                onChange={handleAgeChange}
                onKeyDown={handleAgeKeyDown}
                className="border ml-2 w-40 text-center"
              />
            ) : (
              <p
                className="inline-block border ml-2 w-40 text-center"
                onDoubleClick={handleAgeDoubleClick}
              >
                {ageState}
              </p>
            )}
          </label>
        </div>
        <p className="text-center">
          이름 {nameState} 나이 {ageState}
        </p>
      </div>
    </section>
  );
};

export default ClickToEdit;
