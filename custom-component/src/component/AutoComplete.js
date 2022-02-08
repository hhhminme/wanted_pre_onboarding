import React, { useState, useEffect } from "react";

const AutoComplete = ({ componentName }) => {
  const deselectedOptions = [
    "rustic",
    "antique",
    "vinyl",
    "vintage",
    "refurbished",
    "신품",
    "빈티지",
    "중고A급",
    "중고B급",
    "골동품",
    "허민 입니다.",
    "안녕하세요",
    "반갑습니다.",
  ];

  const [hasText, setHasText] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [options, setOptions] = useState(deselectedOptions);

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    const filteredOptions = deselectedOptions.filter((text) => {
      const text_check = text.slice(0, event.target.value.length);
      return text_check === event.target.value;
    });
    setOptions(filteredOptions);
    setHasText(true);
    setInputValue(event.target.value);
  };

  const handleDropDownClick = (clickedOption) => {
    setInputValue(options[clickedOption]);
    const filteredOptions = deselectedOptions.filter((text) => {
      const text_check = text.slice(0, options[clickedOption].length);
      return text_check === options[clickedOption];
    });
    setOptions(filteredOptions);
  };

  const handleDeleteButtonClick = () => setInputValue("");

  return (
    <section className="componentbg">
      <div>
        <h1 className="font-bold">{componentName}</h1>
      </div>
      <div className="items-center">
        {/* AutocompletWrapper */}
        <div>
          {/* InputContainer */}
          <div className="flex justify-between px-3 border rounded-lg focus-within:border-purple-700 z-1 hover:shadow-md">
            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              className="w-full outline-none focus:outline-transparent focus:border-purple-700"
            />
            <span className="cursor-pointer" onClick={handleDeleteButtonClick}>
              x
            </span>
          </div>
          {hasText ? (
            <ul className="border z-2 shadow-lg">
              {options.map((option, id) => {
                return (
                  <li
                    key={id}
                    onClick={() => {
                      handleDropDownClick(id);
                    }}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          ) : (
            false
          )}
        </div>
      </div>
    </section>
  );
};

export default AutoComplete;
