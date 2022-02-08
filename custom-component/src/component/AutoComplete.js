import React, { useState, useEffect } from "react";

const AutoComplete = ({ componentName }) => {
  const AutoCompleteList = [
    "antique",
    "apple",
    "banana",
    "rustic",
    "vinyl",
    "vintage",
    "refurbished",
    "신품",
    "빈티지",
    "중고A급",
    "중고B급",
    "골동품",
    "허민입니다.",
    "반갑습니다",
  ];

  const DropDown = ({
    dropDownOptions,
    autoCompleteClick,
    selectedOptionIdx,
  }) => {
    return (
      <ul className="block mx-auto list-none shadow-lg z-4 border rounded-b-lg">
        {dropDownOptions.map((item, idx) => (
          <li
            className={`${
              selectedOptionIdx === idx ? "bg-gray-100" : "bg-white"
            } hover:bg-gray-100 p-1 last: rounded-b-lg`}
            key={idx}
            onClick={() => autoCompleteClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    );
  };

  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [dropDownOptions, setdropDownOptions] = useState(AutoCompleteList);
  const [selectedOptionIdx, setSelectedOptionIdx] = useState(-1);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
      setdropDownOptions([]);
    } else if (inputValue !== "") {
      setHasText(true);
      setdropDownOptions(
        AutoCompleteList.filter((element) => {
          if (element === inputValue) {
            setHasText(false);
          }
          return element.includes(inputValue);
        })
      );
    }
  }, [inputValue]);

  const inputChange = (event) => {
    setInputValue(event.target.value);
  };

  const autoCompleteClick = (selectedOption) => {
    setInputValue(selectedOption);
    setSelectedOptionIdx(-1);
  };

  const deleteBtnClick = () => {
    setInputValue("");
  };

  const dropDownKeyControl = (event) => {
    if (hasText) {
      if (
        event.key === "ArrowDown" &&
        dropDownOptions.length - 1 > selectedOptionIdx
      ) {
        setSelectedOptionIdx((prev) => prev + 1);
      }
      if (event.key === "ArrowUp" && selectedOptionIdx >= 0) {
        setSelectedOptionIdx((prev) => prev - 1);
      }
      if (event.key === "Enter" && selectedOptionIdx >= 0) {
        autoCompleteClick(dropDownOptions[selectedOptionIdx]);
        setSelectedOptionIdx(-1);
      }
    }
  };

  return (
    <section className="componentbg">
      <div>
        <h1 className="font-bold">{componentName}</h1>
      </div>
      <div className="w-[70%] m-auto mt-12">
        <div
          className={`flex justify-between p-1 border rounded-lg ${
            hasText && "focus-within:rounded-b-none"
          } focus-within:shadow-lg`}
        >
          <input
            type="text"
            value={inputValue}
            onChange={inputChange}
            onKeyUp={inputChange}
            onKeyDown={dropDownKeyControl}
            className="w-full outline-none"
          />
          <span className="cursor-pointer" onClick={deleteBtnClick}>
            &times;
          </span>
        </div>
        {hasText && (
          <DropDown
            dropDownOptions={dropDownOptions}
            autoCompleteClick={autoCompleteClick}
            selectedOptionIdx={selectedOptionIdx}
          />
        )}
      </div>
    </section>
  );
};

export default AutoComplete;
